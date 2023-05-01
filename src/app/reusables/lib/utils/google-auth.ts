import { getAuth, signInWithPopup, GoogleAuthProvider, signOut } from "firebase/auth";
import { firebaseInit } from "./firebase-init";

export interface UserInfo {
  displayName?: string | null;
  email?: string | null;
  metadata?: {
    createdAt?: string;
    creationTime?: string;
    lastLoginAt?: string;
    lastSignInTime?: string;
  };
  photoUrl?: string | null;
}

const app = firebaseInit();

export async function login() {
  try {
    const provider = new GoogleAuthProvider();
    if (app) {
      const auth = getAuth(app);
      const result = await signInWithPopup(auth, provider);
      const credential = GoogleAuthProvider.credentialFromResult(result);
      if (credential) {
        const token = credential.accessToken;
        const user = result.user;
        return { token, user };
      }
      throw new Error("Credentials returned undefined");
    }
    throw new Error("Auth creation failed");
  } catch (e: any) {
    console.log(e);
    throw new Error(`Login failed: ${e.message}`);
  }
}

export async function logout() {
  try {
    const auth = getAuth(app);
    await signOut(auth);
  } catch (e: any) {
    console.log(e);
    throw new Error(`Logout failed: ${e.message}`);
  }
}
