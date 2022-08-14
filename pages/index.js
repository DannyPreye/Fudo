import Head from "next/head";
import Hero from "../components/Hero";
import Services from "../components/Services";
import Menu from "../components/Menu";
import { client } from "../lib/client";

export default function Home({ pizzas }) {

  return (
    <div>
      <Head>
        <title>FUDO</title>

        <meta name="description" content="Food delivery website" />
        <meta name="author" content="Olawoyin Daniel" />
        <link rel="icon" href="/Logo.png" />
      </Head>
      {/* body */}
      <main className="py-[1rem] px-[2rem]">
        <Hero />
        <Services />
        <Menu pizzas={pizzas} />
      </main>
    </div>
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
