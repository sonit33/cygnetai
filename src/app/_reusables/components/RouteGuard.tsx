import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { isLoggedIn } from "../lib/utils/google-auth";

export { RouteGuard };

interface Props {
  children: any;
}

function RouteGuard({ children }: Props) {
  const router = useRouter();
  const [authorized, setAuthorized] = useState(false);

  useEffect(() => {
    const loggedIn = isLoggedIn();
    setAuthorized(loggedIn);
    router.push("/login");
  }, []);

  return authorized && children;
}
