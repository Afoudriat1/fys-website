import React, { useState } from 'react';
import './BarsModal.css';

function BarsModal() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <>
      <button 
        className={`bars-button ${isOpen ? 'open' : ''}`}
        onClick={toggleModal}
        aria-label="Bars Beyond Bars"
      >
        <span className="bars-text">BARS BEYOND BARS</span>
      </button>
      
      {isOpen && (
        <>
          <div className="modal-backdrop" onClick={closeModal}></div>
          <div className={`modal-container ${isOpen ? 'expanded' : ''}`}>
            <button className="modal-close" onClick={closeModal}>×</button>
            <div className="modal-content">
              <h2 className="modal-title">BARS BEYOND BARS</h2>
              <div className="modal-body">
                <div className="modal-text-box">
                  <p className="modal-text">
                    Content for bars beyond bars goes here. This is the text area on the left side of the modal.
                  </p>
                </div>
                <div className="modal-photo">
                  <div className="photo-placeholder">
                    Photo
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default BarsModal;

