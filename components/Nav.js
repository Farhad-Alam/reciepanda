import { MdFastfood } from "react-icons/md";
import { FaSearchengin } from "react-icons/fa";
import { useRouter } from "next/router";
import { useState } from "react";

const Nav = () => {
  const router = useRouter();
  const [inputValue, setinputValue] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    router.push(`/search/${inputValue}`);
  };

  return (
    <div className="sticky top-0 bg-white z-30 shadow-lg">
      <div className="flex justify-between items-center max-w-6xl mx-auto  p-5">
        {/* Left */}
        <div
          onClick={() => router.push("/")}
          className="flex items-center space-x-2 scale-anim"
        >
          <MdFastfood size={24} className="hidden md:block text-[#FC575E]" />
          <span className="font-pociFico text-xl md:text-2xl">Recipenda</span>
        </div>
        {/* Right */}
        <form
          onSubmit={handleSubmit}
          className="flex items-center space-x-2 bg-orange-300 rounded-xl py-1 md:py-2 px-4 "
        >
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setinputValue(e.target.value)}
            placeholder="Search.."
            className="outline-none bg-orange-300 font-pociFico duration-300 text-sm text-gray-700 w-[3rem] focus:w-[5rem] md:w-[5rem] md:focus:w-[8rem]"
          />
          <button type="submit">
            <FaSearchengin className="scale-anim text-white" size={22} />
          </button>
        </form>
      </div>
    </div>
  );
};

export default Nav;
