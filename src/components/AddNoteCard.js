import React from "react";
import { FaPlus } from "react-icons/fa";
import { motion } from "framer-motion";

const AddNoteCard = ({ reference, onAddNote }) => {
  return (
    <motion.div 
      drag 
      dragConstraints={reference} 
      whileDrag={{ scale: 1.3 }} 
      dragElastic={0.2} 
      className="relative w-5.5/12 h-[300px] sm:w-60 sm:h-72 lg:w-60 lg:h-72 rounded-[20px] lg:rounded-[35px] bg-zinc-800/70 text-white px-5 py-10 overflow-hidden cursor-pointer flex flex-col items-center justify-center"
    >
        {/* relative w-full h-[300px] sm:w-60 sm:h-72 lg:w-60 lg:h-72  bg-zinc-800/70 text-white px-3 py-5 lg:px-5 lg:py-10 overflow-hidden cursor-pointer */}
      <div className="flex flex-col items-center" onClick={onAddNote}>
      
      <FaPlus size="2rem"/>
        <p className="text-sm leading-tight mt-5 font-semibold text-center">
          Add Note
        </p>
      </div>
    </motion.div>
  );
};

export default AddNoteCard;
