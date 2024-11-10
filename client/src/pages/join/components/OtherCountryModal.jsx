import React from 'react';
import Modal from 'react-modal';

Modal.setAppElement('#root');

const CustomModal = ({ isOpen, onRequestClose }) => {
    const handleClose = () => {
        onRequestClose();
        window.location.reload();
    };

    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={handleClose}
            contentLabel="Information Modal"
        >
            <div className='modal'>
                <p>Thank you for your interest in joining Muslims in Tech!</p>
                <p>
                    We currently officially operate only in Australia, Canada, and New Zealand. If you are from a different country and still interested in joining our community,
                    please express your interest by reaching out to us at <strong style={{ textDecoration: 'underline' }}>info@muslimsintech.org</strong>
                </p>
                <a href="https://www.muslimsintech.org/">
                    <button className='btn' style={{ width: '200px' }}>Back to our Home</button>
                </a>
            </div>
        </Modal>
    );
};

export default CustomModal;