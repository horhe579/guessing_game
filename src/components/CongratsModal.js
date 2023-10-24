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
                            className="px-4 py-2 bg-[#CE4257] text-white rounded-2xl hover:bg-[#DE5A6D] "
                            style={{boxShadow: '0 4px 6px rgba(0, 0, 0, 0.5), 0 1px 3px rgba(0, 0, 0, 0.3)'}}
                            onClick={onClose}
                        >
                            Close
                        </button>
                        <button
                            className="px-4 py-2 bg-[#2a3352] text-white rounded-2xl hover:bg-[#3D476B]"
                            style={{boxShadow: '0 4px 6px rgba(0, 0, 0, 0.5), 0 1px 3px rgba(0, 0, 0, 0.3)'}}
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