import Footer from "../components/Footer";
import Nav from "../components/Nav";
import "../styles/globals.css";
import Head from "next/head";
import { AnimatePresence } from "framer-motion";

function MyApp({ Component, pageProps }) {
  return (
    <AnimatePresence>
      <Head>
        <title>FUDO</title>
        <meta name="author" content="Olawoyin Daniel" />
        <link rel="icon" href="/Logo.png" />
      </Head>
      <Nav />
      <Component {...pageProps} />
      <Footer />
    </AnimatePresence>
  );
}

export default MyApp;
