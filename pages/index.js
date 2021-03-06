import Head from "next/head";
import Categories from "../components/Categories";
import Footer from "../components/Footer";
import Nav from "../components/Nav";
import Random from "../components/Random";
import Trending from "../components/Trending";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Recipenda</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="">
        <Nav />
        <div className="max-w-6xl mx-auto ">
          <Categories />
          <Random />
          <Trending />
        </div>
        <Footer />
      </main>
    </div>
  );
}
