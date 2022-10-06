import ReactDOM from "react-dom";
import { useState, useEffect } from "react";
import { MdClose } from 'react-icons/md';

const Modal = ({ isOpen = false, onClose, title, children }) => {
  const [isBrowser, setIsBrowser] = useState(false);

  useEffect(() => {
    setIsBrowser(true);
  }, []);

  const modalWrapper = isOpen ? (
    <>
      <div className="fixed top-[50%] left-[50%] z-10 min-w-[34rem] rounded-lg bg-white p-12 -translate-x-[50%] -translate-y-[50%]">
        <div className="mb-12 flex items-center justify-between">
          <h2 className="font-bold text-5xl">{title}</h2>
          <button
            className="cursor-pointer border-none bg-transparent"
            onClick={onClose}
          >
            <MdClose size={30} className='hover:text-income'/>
          </button>
        </div>
        {children}
      </div>
      <div className="fixed inset-0 w-screen h-screen bg-black opacity-70" onClick={onClose}/>
    </>
  ) : null;

  if (isBrowser) {
    return ReactDOM.createPortal(
      modalWrapper,
      document.getElementById("modal-root")
    );
  } else {
    return null;
  }
};
export default Modal;
