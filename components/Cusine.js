import React from "react";
import { useRouter } from "next/router";
import SingleDetail from "./SingleDetail";

const Cusine = ({ results }) => {
  const router = useRouter();

  return (
    <div className="m-10 font-pociFico">
      <h1 className="text-lg mb-5">{router.query.id}</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-y-5 gap-x-5 scrollbar-hide place-items-center">
        {results.map((item) => (
          <SingleDetail key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
};

export default Cusine;
