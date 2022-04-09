import Image from "next/image";
import React from "react";
import { useRouter } from "next/router";

const Search = ({ results }) => {
  const router = useRouter();
  return (
    <div className="m-10 font-pociFico">
      <h1 className="text-lg mb-5">
        {results.length !== 0 && "Your Search Lists"}
      </h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-y-5 gap-x-5 scrollbar-hide">
        {results.map((item) => (
          <div key={item.id} className="scale-anim">
            <div className="relative rounded-lg overflow-hidden">
              <Image
                layout="responsive"
                width={100}
                height={80}
                src={item.image}
                objectFit="cover"
              />
              <p className="absolute font-semibold tracking-wide text-gray-50 top-[50%] left-[50%] z-10 translate-x-[-50%] translate-y-[-50%]">
                {item.title}
              </p>
              <div className="absolute top-0 w-full h-full bg-[rgba(0,0,0,0.2)]" />
            </div>
          </div>
        ))}
      </div>
      {results.length === 0 && (
        <div className="flex flex-col items-center space-x-4 justify-center mt-[10rem]">
          <h1 className="text-xl ">
            Sry,,But there is no food in here with this name :
          </h1>
          <span className="text-2xl capitalize tracking-wider text-orange-500 underline">
            {router.query.search}
          </span>
        </div>
      )}
    </div>
  );
};

export default Search;
