import Head from "next/head";
import React from "react";
import Categories from "../../components/Categories";
import DetailSec from "../../components/DetailSec";
import Footer from "../../components/Footer";
import Nav from "../../components/Nav";

const Detail = ({ data }) => {
  return (
    <div>
      <Head>
        <title>Recipes Details</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="">
        <Nav />
        <div className="max-w-6xl mx-auto ">
          <Categories />
          <DetailSec results={data} />
        </div>
        <div className="sm:fixed bottom-0 right-0 left-0 ">
          <Footer />
        </div>
      </main>
    </div>
  );
};

export default Detail;

export async function getServerSideProps({ query }) {
  const { detailid } = query;


  const res = await fetch(
    `https://api.spoonacular.com/recipes/${detailid}/information?apiKey=${process.env.API_KEY}`
  );
  const data = await res.json();

  return {
    props: {
      data,
    },
  };
}
