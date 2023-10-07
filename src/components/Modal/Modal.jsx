import React, { useState } from 'react';
import { Modal } from 'react-responsive-modal';
import 'components/Modal/styles.css';

export const ModalWindow = ({ largeImage, largeImageStateReset }) => {
  const [open, setOpen] = useState(true);

  const onCloseModal = () => {
    if (largeImage) {
      largeImageStateReset();
    }

    setOpen(false);
  };

  return (
    <div>
      {/* <button onClick={onOpenModal}>Open modal</button> */}
      <Modal
        open={open}
        onClose={onCloseModal}
        center
        showCloseIcon={false}
        animationDuration={200}
      >
        <img src={largeImage} alt="" />
      </Modal>
    </div>
  );
};
