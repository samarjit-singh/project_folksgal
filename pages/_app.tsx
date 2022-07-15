import type { AppProps } from "next/app";
import { useState, useEffect } from "react";
import "../styles/globals.css";

import { GoogleOAuthProvider } from "@react-oauth/google";

import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

const MyApp = ({ Component, pageProps }: AppProps) => {
  // SSR - SERVER SIDE RENDERING
  const [isSSR, setIsSSR] = useState(true);

  // defining when the page is not used for server side rendering
  useEffect(() => {
    setIsSSR(false);
  }, []);

  if (isSSR) return null;

  return (
    <GoogleOAuthProvider
      clientId={`${process.env.NEXT_PUBLIC_GOOGLE_API_TOKEN}`}
    >
      <Navbar />
      <div className="flex gap-6 md:gap-20">
        <div className="h-[92vh] overflow-hidden xl:hover:overflow-auto">
          <Sidebar />
        </div>
        <div className="mt-4 flex flex-col gap-10 overflow-auto h-[88vh] videos flex-1">
          <Component {...pageProps} />
        </div>
      </div>
    </GoogleOAuthProvider>
  );
};

export default MyApp;
