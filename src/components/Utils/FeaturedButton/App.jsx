import React, { useState } from "react";
import SwiperSlideModal from "../ModalSlide/SwiperSlideModal";
import { Link } from "react-router-dom";


const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="flex  justify-center items-center">
      <Link>
      <button
        className="bg-gray-100 py-1 px-6 rounded"
        onClick={handleOpenModal}
        
      >
        Feature Details
      </button>
      </Link>

      <div>
        <SwiperSlideModal isOpen={isModalOpen} onClose={handleCloseModal} />        
      </div>
    </div>
  );
};

export default App;
