import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import { useEffect, useState } from "react";
import { convert } from "html-to-text";
import axios from "axios";

const Random = () => {
  const [randomsData, setrandomsData] = useState([]);

  const getRandoms = async () => {
    const check = localStorage.getItem("randoms");
    if (check) {
      setrandomsData(JSON.parse(check));
    } else {
      const res = await fetch(
        `https://api.spoonacular.com/recipes/random?apiKey=${process.env.API_KEY}&number=6`
      );
      const data = await res.json();
      localStorage.setItem("randoms", JSON.stringify(data.recipes));
      setrandomsData(data.recipes);
    }
  };
  function truncate(str, n) {
    return str.length > n ? str.substr(0, n - 1) : str;
  }

  useEffect(() => {
    getRandoms();
  }, []);

  return (
    <div className="m-4 sm:m-10 font-pociFico">
      <h1 className="text-lg mb-5">Randoms</h1>
      <Splide
        options={{
          type: "loop",
          autoplay: true,
          gap: "5rem",
          arrows: false,
          pagination: true,
          drag: "free",
        }}
      >
        {randomsData.map((item) => (
          <SplideSlide key={item.id}>
            <div className="relative sm:aspect-[16/7] border-none rounded-lg overflow-hidden">
              <img
                className="w-full h-full object-cover"
                src={
                  item
                    ? item.image
                    : "https://spoonacular.com/recipeImages/715594-312x231.jpg"
                }
                alt=""
              />
              <h2 className="text-base tracking-wider sm:text-xl sm:whitespace-nowrap absolute font-semibold text-gray-50 top-[50%] sm:top-[30%] left-[50%] z-10 translate-x-[-50%] translate-y-[-50%]">
                {item.title}
              </h2>
              <p className="hidden sm:block absolute text-sm text-center text-gray-300 z-20 top-[40%] left-[50%]  translate-x-[-50%] w-[70%]">
                {truncate(convert(item.summary), 200)}....
              </p>
              <div className=" absolute top-0 w-full h-full bg-[rgba(0,0,0,0.4)]" />
            </div>
          </SplideSlide>
        ))}
      </Splide>
    </div>
  );
};

export default Random;
