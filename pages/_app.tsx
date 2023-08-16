import Navbar from "../components/navbar";
import type { AppProps } from "next/app";
import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Navbar />
        <Component {...pageProps} />
    </>
  );
}

export default MyApp;
