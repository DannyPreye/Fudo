import Head from "next/head";
import Hero from "../components/Hero";
import Services from "../components/Services";

export default function Home() {
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
      </main>
    </div>
  );
}

