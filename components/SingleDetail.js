import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

const SingleDetail = ({ id, image, title }) => {
  return (
    <motion.div
      whileInView={{
        scale: [0, 1],
        opacity: [0, 1],
        transition: {
          duration: 0.5,
          ease: "easeInOut",
        },
      }}
    >
      <Link href={`/details/${id}`}>
        <div key={id} className="scale-anim">
          <div className="relative rounded-lg">
            <img
              layout="responsive"
              width={400}
              height={200}
              src={image}
              alt=""
              objectFit="contain"
            />
            <p className="absolute font-semibold tracking-wide text-gray-50 top-[50%] left-[50%] z-10 translate-x-[-50%] translate-y-[-50%]">
              {title}
            </p>
            <div className="absolute top-0 w-full h-full bg-[rgba(0,0,0,0.2)]" />
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default SingleDetail;
