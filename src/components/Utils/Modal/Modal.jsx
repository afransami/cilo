// Modal.js
import React, { useState } from 'react';

const Modal = ({ isOpen, onClose, onConfirm }) => {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleModalClose = () => {
    setInputValue('');
    onClose();
  };

  const handleConfirm = () => {
    onConfirm(inputValue);
    setInputValue('');
    onClose();
  };

  return (
    <div
    className={`fixed inset-0 flex items-center justify-center z-50 transition-all duration-300 ${
      isOpen ? 'opacity-100 backdrop-blur-sm rounded-2xl shadow-2xl' : 'opacity-0 pointer-events-none'
    }`}
  >   
   <div className="absolute inset-0 backdrop-filter backdrop-blur-sm"></div>
      <div className="bg-white rounded-lg p-6 max-w-5xl w-full transform transition-all duration-300 space-y-10 ">
        <button
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-800"
          onClick={handleModalClose}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
        <h2 className="text-2xl font-semibold mb-4">Delivery ZIP Code</h2>
        <input
          type="text"
          className="border  rounded p-4 w-full mb-4"
          placeholder="Enter your zip code"
          value={inputValue}
          onChange={handleInputChange}
        />
        <div className="flex justify-start">
          <button
            className="px-20 py-4 text-xl font-bold bg-blue-500 text-white rounded"
            onClick={handleConfirm}
          >
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
