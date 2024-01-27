import Modal from 'react-modal';

export const ImageModal = ({ isOpen, onRequestClose, imageUrl }) => {
  return (
    <Modal
      ariaHideApp={false}
      contentLabel="Image Modal"
      onRequestClose={onRequestClose}
      isOpen={isOpen}
      shouldCloseOnOverlayClick={true}
      shouldCloseOnEsc={true}
      style={{
        overlay: {
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgb(0 0 0 / 75%)',
        },
        content: {
          inset: '100px',
          background: 'rgb(0)',
          overflow: 'hidden',
          border: '0',
          padding: '0',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: '10px',
          maxWidth: '1080px',
          margin: 'auto',
        },
      }}
    >
      <img src={imageUrl} alt="Enlarged" />
    </Modal>
  );
};
