// import React from 'react';

// const Modal = ({ isOpen, onClose, children }) => {
//   if (!isOpen) return null;

//   return (
//     <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
//       <div className="bg-white border-2 h-auto rounded-xl shadow-xl p-4 w-auto max-w-2xl">
//         <button
//           onClick={onClose}
//           className="text-white bg-blue-600  rounded font-bold px-3 py-2 w-full text-center "
//         >
//           close
//         </button>
//         {children}
//       </div>
//     </div>
//   );
// };

// export default Modal;

import React from 'react';

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white border-2 h-auto rounded-xl shadow-xl p-4 w-auto max-w-2xl">
        <button
          onClick={onClose}
          className="text-white bg-blue-600  rounded font-bold px-3 py-2 w-full text-center "
        >
          Close
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
