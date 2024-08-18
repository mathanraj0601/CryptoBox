import "./Modal.css";

interface Modal {
  children: any;
  //   closeModal: any;
  isOpen: boolean;
}

function Modal({ children, isOpen }: Modal) {
  return (
    isOpen && (
      <div className="modal">
        <div className="modal-children">{children}</div>
      </div>
    )
  );
}

export default Modal;
