import React, { useState } from 'react';

const ToggleSwitch = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleToggle = () => {
    setIsChecked((prevIsChecked) => !prevIsChecked);
  };

  return (
    <div className="flex items-center justify-center bg-slate-100 h-10 mx-auto w-5/6 rounded-sm">
      <button
        className={` py-1 px-8 ${
          isChecked ? 'bg-white transition-all duration-500' : 'bg-gray-100 text-gray-500'
        }`}
        onClick={handleToggle}
      >
        Purchase Price
      </button>
      <button
        className={`py-1 px-8 ${
          isChecked ? 'bg-gray-100 text-gray-500' : 'bg-white transition-all duration-500 '
        }`}
        onClick={handleToggle}
      >
       Potential saving*
      </button>
      {/* <div
        className={`h-8 w-16 rounded-full bg-white shadow-inner ${
          isChecked ? 'bg-blue-500' : 'bg-gray-200'
        }`}
        onClick={handleToggle}
      >
        <div
          className={`h-6 w-6 rounded-full bg-white transform transition-transform ${
            isChecked ? 'translate-x-8' : 'translate-x-0'
          }`}
        />
      </div> */}
    </div>
  );
};

export default ToggleSwitch;
