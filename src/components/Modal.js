import React, { useState } from "react";

const Modal = ({ onClose, onSubmit }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onSubmit) {
      onSubmit({ title, content });
      setTitle("");
      setContent("");
      onClose();
    }
  };

  return (
    <>
      <div
        id="default-modal"
        tabIndex="-1"
        aria-hidden="true"
        className="fixed top-0 right-0 left-0 z-50 flex justify-center items-center w-full h-full bg-black bg-opacity-50"
      >
        <div className="relative p-4 w-full max-w-2xl max-h-full">
          <div className="relative bg-white rounded-lg shadow dark:bg-zinc-900">
            <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                Add a New Note
              </h3>
              <button
                type="button"
                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                onClick={onClose}
              >
                <svg
                  className="w-3 h-3"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 14"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                  />
                </svg>
                <span className="sr-only">Close modal</span>
              </button>
            </div>

            <form onSubmit={handleSubmit} className="p-4 md:p-5 space-y-4">
              <div>
                <label
                  htmlFor="note-title"
                  className="block text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Note Title
                </label>
                <input
                  type="text"
                  id="note-title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className="block w-full p-2.5 mt-1 border-none rounded-lg text-gray-900 bg-zinc-800 dark:placeholder-gray-400 dark:text-white focus:ring-blue-500 focus:border-none"
                  placeholder="Enter note title"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="note-content"
                  className="block text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Note Content
                </label>
                <textarea
                  id="note-content"
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                  rows="4"
                  className="block w-full p-2.5 mt-1 bg-gray-50 border-none rounded-lg text-gray-900 bg-zinc-800 dark:placeholder-gray-400 dark:text-white focus:ring-blue-500 focus:border-none"
                  placeholder="Enter note content"
                  required
                ></textarea>
              </div>

              <div className="flex justify-end space-x-4">
                <button
                  type="button"
                  className="py-2.5 px-5 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-zinc-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                  onClick={onClose}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="text-white bg-green-600 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:hover:bg-green-700 dark:focus:ring-blue-800"
                >
                  Add Note
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
