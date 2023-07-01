import "@components/styles/globals.css";
import type { AppProps } from "next/app";
import { AuthContextProvider } from "@components/store/AuthContext";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AuthContextProvider>
      <Component {...pageProps} />
    </AuthContextProvider>
  );
}
