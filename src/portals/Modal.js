import React from 'react';
import './modal.css';
import ReactDOM from 'react-dom';

function Modal(props) {
  return ReactDOM.createPortal(
    <div className='modal-layer'>
      <div className='modal-content'>
        <h3>Modal content</h3>
        <p>This is modal click here to close modal</p>
        <button onClick={props.closeModal}>close modal</button>
      </div>
    </div>,
    document.getElementById('portal-div')
  );
}

export default Modal;
