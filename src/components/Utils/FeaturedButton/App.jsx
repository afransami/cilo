import React, { useState } from 'react';
import SwiperSlideModal from '../ModalSlide/SwiperSlideModal';


const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <button className="bg-blue-500 text-white py-2 px-4 rounded" onClick={handleOpenModal}>
        Open Swiper Modal
      </button>

      <SwiperSlideModal isOpen={isModalOpen} onClose={handleCloseModal} />
    </div>
  );
};

export default App;
