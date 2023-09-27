import React from "react";
import Modal from 'react-modal';

const CongratsModal = ({ isOpen, onClose, handleNewGame }) => {
    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onClose}
            contentLabel="Congratulations Modal"
        >
            <div className="congratulationsModal">
                <h2>Congratulations!</h2>
                <p>You guessed the dog correctly!</p>
                <button onClick={onClose}>
                    Close
                </button>
                <button onClick={handleNewGame}>
                    New Game
                </button>
            </div>
        </Modal>
    )
}

export default CongratsModal;