import { useRouter } from "next/router";
import { useEffect } from "react";
// import {useAuth}

type Props = {
  children: string | JSX.Element | JSX.Element[] | (() => JSX.Element);
};
const ProtectedRoute = ({ children }: Props) => {
  const router = useRouter();
  //   const {user, isLoading} = useAuth

  useEffect(() => {
    protectRoutes(1, 2);
  }, []);

  function protectRoutes(isLoading: any, user: any) {
    if (!isLoading && !user) {
      router.replace("/auth");
    }
  }

  return <>{children}</>;
};

export default ProtectedRoute;
