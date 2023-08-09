import React, { useState } from "react";
import SwiperSlideModal from "../ModalSlide/SwiperSlideModal";

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
      <button
        className="bg-gray-100 py-1 px-6 rounded"
        onClick={handleOpenModal}
      >
        Feature Details
      </button>

      <div>
        <SwiperSlideModal isOpen={isModalOpen} onClose={handleCloseModal} />
      </div>
    </div>
  );
};

export default App;
