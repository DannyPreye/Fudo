import { AnimatePresence } from "framer-motion";

import Footer from "../components/Footer";
import Nav from "../components/Nav";
import "../styles/globals.css";
import Head from "next/head";
import { ChakraProvider } from '@chakra-ui/react'


function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <AnimatePresence exitBeforeEnter initial={true}>
        <Head>
          <title>FUDO</title>
          <meta name="author" content="Olawoyin Daniel" />
          <link rel="icon" href="/Logo.png" />
        </Head>
        <Nav />
        <Component {...pageProps} />
        <Footer />
      </AnimatePresence>
    </ChakraProvider>
  );
}

export default MyApp;
