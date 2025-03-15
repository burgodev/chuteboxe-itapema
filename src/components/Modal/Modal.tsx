import React, { useRef, useEffect, useState, memo } from "react";
import ReactDOM from "react-dom";

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children?: React.ReactNode;
};

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, title, children }) => {
  const modalRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(isOpen);

  useEffect(() => {
    if (isOpen) {
      setVisible(true);
    } else {
      const timer = setTimeout(() => {
        setVisible(false);
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  const handleClickOutside = (event: React.MouseEvent) => {
    if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
      onClose();
    }
  };

  if (!visible) return null;

  return ReactDOM.createPortal(
    <div
      className="fixed inset-0 z-50 flex items-center justify-center transition-opacity duration-300 bg-black bg-opacity-75"
      onClick={handleClickOutside}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div
        ref={modalRef}
        className="relative py-12 px-14 text-white transition-opacity bg-dark rounded-lg shadow-lg max-h-[90vh] overflow-auto"
      >
        <button
          data-testid="modal-close-button"
          className="absolute text-3xl text-gray-400 top-3 right-5 hover:text-white"
          onClick={onClose}
          aria-label="Close"
        >
          &times;
        </button>

        <h2 id="modal-title" className="mb-6 text-3xl font-bold">
          {title}
        </h2>
        <div id="modal-content" className="mt-2">
          {children}
        </div>
      </div>
    </div>,
    document.body
  );
};

export default memo(Modal);
