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
      className="relative w-60 h-72 rounded-[35px] bg-zinc-800/70 text-white px-5 py-10 overflow-hidden cursor-pointer flex flex-col items-center justify-center"
    >
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
