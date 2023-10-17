import React from "react";
import { Modal } from 'flowbite-react';

const CongratsModal = ({ isOpen, onClose, handleNewGame }) => {
    return (
        <Modal show={isOpen} size="md" popup onClose={onClose}>
            <Modal.Header className="bg-[#fff7f7] rounded-t-lg" />
            <Modal.Body className="bg-[#fff7f7] rounded-b-lg">
                <div className="text-center ">
                    <h2 className="text-2xl font-souls font-semibold">Congratulations!</h2>
                    <p className="text-xl font-souls font-medium mb-4">You guessed the dog correctly!</p>
                    <div className="flex justify-center space-x-4">
                        <button
                            className="px-4 py-2 bg-[#1e243b] text-white rounded hover:bg-[#865f5f]"
                            onClick={onClose}
                        >
                            Close
                        </button>
                        <button
                            className="px-4 py-2 bg-[#1e243b] text-white rounded hover:bg-[#865f5f]"
                            onClick={handleNewGame}
                        >
                            New Game
                        </button>
                    </div>
                </div>
            </Modal.Body>
        </Modal>
    );
}





export default CongratsModal;