import "@splidejs/splide/dist/css/splide.min.css";
import { useEffect, useState } from "react";
import SingleDetail from "./SingleDetail";

const Trending = () => {
  const [trendingData, settrendingData] = useState([]);

  const getTredings = async () => {
    const check = localStorage.getItem("trending");
    if (check) {
      settrendingData(JSON.parse(check));
    } else {
      const res = await fetch(
        `https://api.spoonacular.com/recipes/random?apiKey=${process.env.API_KEY}&number=10`
      );
      const data = await res.json();
      localStorage.setItem("trending", JSON.stringify(data.recipes));
      settrendingData(data.recipes);
    }
  };
  useEffect(() => {
    getTredings();
  }, []);

  return (
    <div className="m-10 font-pociFico">
      <h1 className="text-lg mb-5">Trending</h1>
      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-y-5 gap-x-5 scrollbar-hide place-items-center">
        {trendingData.map((item) => (
          <SingleDetail key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
};

export default Trending;
