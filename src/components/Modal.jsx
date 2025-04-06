import { createPortal } from 'react-dom';
import { motion } from 'framer-motion';

export default function Modal({ title, children, onClose }) {
  return createPortal(
    <>
      <div className="backdrop" onClick={onClose} />
      <motion.dialog 
      initial={{opacity: 0, y: 30}} //for stablishing initial state of the animation 
      animate={{
        opacity:1, y: 0
      }}
      exit={{
        //when the element is removed from the dom
        opacity: 0, y: 30
      }}
      open className="modal">
        <h2>{title}</h2>
        {children}
      </motion.dialog>
    </>,
    document.getElementById('modal')
  );
}
