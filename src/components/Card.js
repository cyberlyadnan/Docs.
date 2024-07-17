import React from "react";
import { FaRegFileAlt } from "react-icons/fa";
import { LuDownload } from "react-icons/lu";
import { motion } from "framer-motion";

const Card = ({ reference }) => {
  return (
    <motion.div
      drag
      dragConstraints={reference}
      whileDrag={{ scale: 1.2 }}
      dragElastic={0.2}
      className="relative w-5.5/12 h-[300px] sm:w-60 sm:h-72 lg:w-60 lg:h-72 rounded-[20px] lg:rounded-[35px] bg-zinc-800/70 text-white px-3 py-5 lg:px-5 lg:py-10 overflow-hidden cursor-pointer"
    >
      <FaRegFileAlt />
      <p className="text-sm lg:text-xl leading-tight mt-3 lg:mt-5 font-semibold">
        lorem ispum desup is sainasd duhd saduh
      </p>
      <div className="footer absolute bottom-0 left-0 w-full">
        <div className="flex items-center justify-between mb-5 px-8">
          <h5>.4mb</h5>
          <span className="w-6 h-6 bg-zinc-600 rounded-full flex items-center justify-center">
            <LuDownload size={".7rem"} />
          </span>
        </div>
        <div className="tag w-full py-3 bg-green-600 flex items-center justify-center px-8">
          <h3 className="text-md">Download Now</h3>
        </div>
      </div>
    </motion.div>
  );
};

export default Card;
