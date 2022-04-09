import { FaPizzaSlice } from "react-icons/fa";
import { GiChopsticks, GiHamburger } from "react-icons/gi";
import { SiChinaeasternairlines } from "react-icons/si";
import Link from "next/link";
const Categories = () => {
  return (
    <div className="mt-10 md:mt-20">
      <ul className="flex justify-center space-x-4 md:space-x-8">
        <div className="border-2 border-rose-400 rounded-full p-[2px]">
          <Link href="/variants/Indian">
            <li className="catButton scale-anim">
              <FaPizzaSlice size={20} className="" />
              <a>Indian</a>
            </li>
          </Link>
        </div>
        <div className="border-2 border-rose-400 rounded-full p-[2px]">
          <Link href={"/variants/American"}>
            <li className="catButton scale-anim">
              <GiHamburger size={20} className="" />
              <span>American</span>
            </li>
          </Link>
        </div>
        <div className="border-2 border-rose-400 rounded-full p-[2px]">
          <Link href={"/variants/Mexican"}>
            <li className="catButton scale-anim">
              <SiChinaeasternairlines size={20} className="" />
              <span>Mexican</span>
            </li>
          </Link>
        </div>
        <div className="border-2 border-rose-400 rounded-full p-[2px]">
          <Link href={"/variants/Chinese"}>
            <li className="catButton scale-anim">
              <GiChopsticks size={20} className="" />
              <span>Chinese</span>
            </li>
          </Link>
        </div>
      </ul>
    </div>
  );
};

export default Categories;
