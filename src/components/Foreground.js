// import React, { useRef, useState } from "react";
// import Card from "./Card";
// import AddNoteCard from "./AddNoteCard";
// import Modal from "./Modal";

// const Foreground = () => {
//   const ref = useRef(null);
//   const [isModalVisible, setIsModalVisible] = useState(false);

//   const handleAddNote = () => {
//     setIsModalVisible(true);
//   };

//   const handleCloseModal = () => {
//     setIsModalVisible(false);
//   };

//   return (
//     <div
//       ref={ref}
//       className="fixed top-0 left-0 z-[3] w-full h-screen flex space-x-3 p-5"
//     >
//       <AddNoteCard reference={ref} onAddNote={handleAddNote} />
//       {isModalVisible && <Modal onClose={handleCloseModal} />}
//       <Card reference={ref} />
//       <Card reference={ref} />
//       <Card reference={ref} />
     
//     </div>
//   );
// };

// export default Foreground;



import React, { useRef, useState } from "react";
import Card from "./Card";
import AddNoteCard from "./AddNoteCard";
import Modal from "./Modal";

const Foreground = () => {
  const ref = useRef(null);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleAddNote = () => {
    setIsModalVisible(true);
  };

  const handleCloseModal = () => {
    setIsModalVisible(false);
  };

  return (
    <div
      ref={ref}
      className="fixed top-0 left-0 z-[3] w-full h-screen overflow-auto"
    >
      <div className="flex flex-wrap gap-3 p-5">
        <AddNoteCard reference={ref} onAddNote={handleAddNote} />
        {isModalVisible && <Modal onClose={handleCloseModal} />}
        <Card reference={ref} />
        <Card reference={ref} />
        <Card reference={ref} />
        <Card reference={ref} />
        <Card reference={ref} />

        <Card reference={ref} /> 
      </div>
    </div>
  );
};

export default Foreground;
