import React from 'react';
import './modal.css';

function Modal({ image, onClose, onNext, onPrev }) {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <span className="close-button" onClick={onClose}>&times;</span>
        <img src={image} alt="Enlarged view" className="enlarged-image" />
        <div className="modal-controls">
          <button onClick={onPrev} className="nav-button">❮</button>
          <button onClick={onNext} className="nav-button">❯</button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
