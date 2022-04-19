import Image from "next/image";
import React, { useState } from "react";

const DetailSec = ({ results }) => {
  console.log(results);
  const [show, setShow] = useState(false);
  function truncate(str, n) {
    return str.length > n ? str.substr(0, n - 1) : str;
  }
  return (
    <div className="grid sm:grid-cols-2 space-y-10 p-5 sm:space-x-10 mt-20">
      {/* Left */}
      <div className="font-pociFico ">
        <h2 className="text-lg sm:text-xl" >{results.title}</h2>
        <div className="">
          <Image
            src={results.image}
            layout="responsive"
            width={200}
            height={200}
            objectFit="contain"
            className="rounded-xl"
          />
        </div>
      </div>
      {/* Right */}
      <div className="">
        <div className="flex space-x-4 mb-6 ">
          <button onClick={() => setShow(false)} className="InsButton">
            Instructions
          </button>
          <button onClick={() => setShow(true)} className="InsButton">
            Ingredients
          </button>
        </div>
        {!show ? (
          <div>
            <p className="text-sm font-pociFico leading-7">
              {truncate(results.instructions, 800)}
            </p>
            <ol className="list-[upper-noman] font-semibold mt-5 text-sm font-pociFico ml-4">
              {results.dishTypes.map((item, id) => (
                <li className="tracking-wider text-sm mb-2" key={id}>
                  {item}
                </li>
              ))}
            </ol>
          </div>
        ) : (
          <div className="">
            <ol className="list-[upper-noman] font-semibold mt-5 text-sm font-pociFico ml-4">
              {results.extendedIngredients.map((item, id) => (
                <li className="tracking-wider text-sm mb-2" key={id}>
                  {item.aisle}
                </li>
              ))}
            </ol>
          </div>
        )}
      </div>
    </div>
  );
};

export default DetailSec;
