import React, { useState } from 'react';
import './Gallery.css';
import Modal from './modal'; 

const events = [
  {
    title: "Prodigy 23' — Photos",
    images: ['events/prodigy-1.jpg', 'events/prodigy-2.png', 'events/prodigy-3.jpg','events/prodigy-1.jpg', 'events/prodigy-2.png', 'events/prodigy-3.jpg', 'events/prodigy-1.jpg', 'events/prodigy-2.png', 'events/prodigy-3.jpg',]
  },
  {
    title: "'Hour Of Code' — Photos",
    images: ['events/prodigy-1.jpg', 'events/prodigy-2.png', 'events/prodigy-3.jpg','events/prodigy-1.jpg', 'events/prodigy-2.png', 'events/prodigy-3.jpg', 'events/prodigy-1.jpg', 'events/prodigy-2.png', 'events/prodigy-3.jpg',]
  },
  {
    title: "'Code Anytime and Spy-C' — Photos",
    images: ['events/prodigy-1.jpg', 'events/prodigy-2.png', 'events/prodigy-3.jpg','events/prodigy-1.jpg', 'events/prodigy-2.png', 'events/prodigy-3.jpg', 'events/prodigy-1.jpg', 'events/prodigy-2.png', 'events/prodigy-3.jpg',]
  },
  {
    title: "'Technical Event: Flash Forward' — Photos",
    images: ['events/prodigy-1.jpg', 'events/prodigy-2.png', 'events/prodigy-3.jpg','events/prodigy-1.jpg', 'events/prodigy-2.png', 'events/prodigy-3.jpg', 'events/prodigy-1.jpg', 'events/prodigy-2.png', 'events/prodigy-3.jpg',]
  },
];

function Gallery() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openModal = (image, index) => {
    setCurrentImage(image);
    setCurrentIndex(index);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const goToNextImage = () => {
    const newIndex = (currentIndex + 1) % events.find(event => event.images.includes(currentImage)).images.length;
    setCurrentIndex(newIndex);
    setCurrentImage(events.find(event => event.images.includes(currentImage)).images[newIndex]);
  };

  const goToPrevImage = () => {
    const newIndex = (currentIndex - 1 + events.find(event => event.images.includes(currentImage)).images.length) % events.find(event => event.images.includes(currentImage)).images.length;
    setCurrentIndex(newIndex);
    setCurrentImage(events.find(event => event.images.includes(currentImage)).images[newIndex]);
  };

  return (
    <div className="gallery">
      {events.map((event, i) => (
        <div key={i} className="gallery-section">
          <div className="section-title">{event.title}</div>
          <div className="images-container">
            {event.images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={event.title}
                onClick={() => openModal(image, index)}
                className="thumbnail"
              />
            ))}
          </div>
        </div>
      ))}
      {isModalOpen && (
        <Modal
          image={currentImage}
          onClose={closeModal}
          onNext={goToNextImage}
          onPrev={goToPrevImage}
        />
      )}
    </div>
  );
}

export default Gallery;
