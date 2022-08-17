import Head from "next/head";
import Hero from "../components/Hero";
import Services from "../components/Services";
import Menu from "../components/Menu";
import { client } from "../lib/client";
import { motion } from "framer-motion"

export default function Home({ pizzas }) {

  return (
    <motion.div initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 2 }}
    >
      <Head>
        <meta name="description" content="Food delivery website" />
      </Head>
      {/* body */}
      <main className="py-[1rem] px-[2rem]">
        <Hero />
        <Services />
        <Menu pizzas={pizzas} />
      </main>
    </motion.div>
  );
}

export const getServerSideProps = async () => {
  const query = '*[_type == "pizza"]';
  const pizzas = await client.fetch(query);

  return {
    props: {
      pizzas
    }
  }
}
