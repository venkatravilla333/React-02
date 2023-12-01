import React, { useState } from 'react';
import Modal from './Modal';
import './modal.css';

function Parent() {
  var [openModal, setModal] = useState(false);

  var toggleModal = () => {
    setModal(!openModal);
    console.log('hi');
  };

  return (
    <div className='parent'>
      <button onClick={toggleModal}>Open</button>
      {openModal && <Modal closeModal={toggleModal} />}
    </div>
  );
}

export default Parent;
