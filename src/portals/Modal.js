import React from 'react';
import './modal.css';
import ReactDOM from 'react-dom';

function Modal(props) {
  return (
    <div className='modal-layer'>
      <div className='modal-content'>
        <h3>Modal content</h3>
        <p>This is modal click here to close modal</p>
        <button onClick={props.closeModal}>close modal</button>
      </div>
    </div>
  );
}

export default Modal;
