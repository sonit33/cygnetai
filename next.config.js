/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  env: {
    NEXT_APP_FIREBASE_API_KEY: "AIzaSyD2pywkuhwDCfxCdL-g9_Sxsfe0Hj3UX8I",
    NEXT_APP_FIREBASE_AUTH_DOMAIN: "cygnetai.firebaseapp.com",
    NEXT_APP_FIREBASE_PROJECT_ID: "cygnetai",
    NEXT_APP_FIREBASE_STORAGE_BUCKET: "cygnetai.appspot.com",
    NEXT_APP_FIREBASE_MESSAGE_SENDER_ID: "493251753347",
    NEXT_APP_FIREBASE_APP_ID: "1:493251753347:web:df87f2c107373008f432b6",
    NEXT_APP_FIREBASE_MEASUREMENT_ID: "G-3VE4PW28HN",
  },
  output: "standalone",
};

module.exports = nextConfig;
