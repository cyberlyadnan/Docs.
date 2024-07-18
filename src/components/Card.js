// import React from "react";
// import { FaEdit, FaRegFileAlt } from "react-icons/fa";
// import { motion } from "framer-motion";
// import { MdDelete } from "react-icons/md";

// const Card = ({ reference,note }) => {



//   return (
//     <motion.div
//       drag
//       dragConstraints={reference}
//       whileDrag={{ scale: 1.2 }}
//       dragElastic={0.2}
//       className="relative w-5.5/12 h-[300px] sm:w-60 sm:h-72 lg:w-60 lg:h-72 rounded-[20px] lg:rounded-[35px] bg-zinc-800/70 text-white px-3 py-5 lg:px-5 lg:py-10 overflow-hidden cursor-pointer"
//     >
//       <FaRegFileAlt />
//       <p className="text-sm lg:text-xl leading-tight mt-3 lg:mt-5 font-semibold">
//         {note.content.slice(1,60)}
//       </p>
//       <div className="footer absolute bottom-0 left-0 w-full">
//         <div className="flex items-center justify-between mb-5 px-8">
//           <h5>{note.title.slice(1,20)}</h5>
//           <span className="flex space-x-1">
//           <span className="w-6 h-6 bg-zinc-600 rounded-full flex items-center justify-center">
//             <FaEdit  size={".9rem"}/>
//           </span>
//           <span className="w-6 h-6 bg-zinc-600 rounded-full flex items-center justify-center">
//             <MdDelete   size={"1rem"}/>
//           </span>
//           </span>
//         </div>
//         <div className="tag w-full py-3 bg-green-600 flex items-center justify-center px-8">
//           <h3 className="text-md">Download Now</h3>
//         </div>
//       </div>
//     </motion.div>
//   );
// };

// export default Card;



import React from "react";
import { FaEdit, FaRegFileAlt } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { motion } from "framer-motion";

const Card = ({ reference, note, onEdit, onDelete , color}) => {
  return (
    <motion.div
      drag
      dragConstraints={reference}
      whileDrag={{ scale: 1.2 }}
      dragElastic={0.2}
      className="relative w-5.5/12 h-[300px] sm:w-60 sm:h-72 lg:w-60 lg:h-72 rounded-[20px] lg:rounded-[35px] bg-zinc-800/70 text-white px-3 py-8 lg:px-5 lg:py-10 overflow-hidden cursor-pointer"
    >
      <div className="flex items-center justify-between"><FaRegFileAlt /> <span className="lg:text-[10px] text-[10px]">{note.time.slice(0,5)} | {note.date}</span></div>
      <p className="text-sm lg:text-xm leading-tight mt-3 lg:mt-5 font-semibold">
        {note.content.slice(0, 70)}
      </p>
      <p className="text-sm lg:text-xm leading-tight mt-2 text-green-600" onClick={onEdit}>
      {note.content.length > 70 && "Read more..."}
      </p>
      <div className="footer absolute bottom-0 left-0 w-full">
        <div className="flex items-center justify-between mb-5 px-8">
          <h5 className="lg:text-base text-[14px] mr-1">{note.title.slice(0, 9)}</h5>
          <span className="flex space-x-1">
            <span
              className="w-6 h-6 bg-zinc-600 rounded-full flex items-center justify-center cursor-pointer"
              onClick={onEdit}
            >
              <FaEdit size={".9rem"} />
            </span>
            <span
              className="w-6 h-6 bg-zinc-600 rounded-full flex items-center justify-center cursor-pointer"
              onClick={onDelete}
            >
              <MdDelete size={"1rem"} />
            </span>
          </span>
        </div>
        <div className={`tag w-full py-2 lg:py-3 ${color} flex items-center justify-center px-8`}>
          <h3 className="text-md">Download Now</h3>
        </div>
      </div>
    </motion.div>
  );
};

export default Card;
