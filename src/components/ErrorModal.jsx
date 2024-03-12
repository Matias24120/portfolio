import React, { useEffect } from 'react';
import { FaTimes } from 'react-icons/fa';
import { useLanguage } from '../context/Language'; 

const ErrorModal = ({ onClose }) => {
  const { isEnglish } = useLanguage();

  useEffect(() => {
    const handleEscape = (event) => {
      if (event.keyCode === 27) {
        onClose();
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [onClose]);

  return (
    <div className="fixed z-10 inset-0 overflow-y-auto bg-black bg-opacity-80 flex justify-center items-center">
      <div className="bg-white border-2 border-red-500 rounded-lg overflow-hidden p-8 max-w-lg w-full mx-4">
        <div className="flex justify-end">
          <button onClick={onClose} className="text-gray-400 hover:text-red-500 focus:outline-none">
            <FaTimes className="h-6 w-6 sm:h-8 sm:w-8 text-white bg-red-500 hover:bg-red-400 rounded-full p-1"/>
          </button>
        </div>
        <h2 className="text-lg sm:text-2xl font-bold mb-4 mt-4">{isEnglish ? 'Form submitted unsuccessfully' : 'Formulario enviado sin éxito'}</h2>
        <p className="text-md sm:text-lg text-gray-600">{isEnglish ? 'Oops, something went wrong. Please try again.' : 'Ups! Algo salió mal. Por favor inténtalo de nuevo.'}</p>
      </div>
    </div>
  );
};

export default ErrorModal;