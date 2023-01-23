import React from 'react'
import { AiFillCloseSquare } from 'react-icons/ai'

const BG_STYLE = {
    position: 'fixed',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    zIndex: '1000',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backdropFilter: 'blur(6px)',
    transition: 'all 0.5s',

}

const BTN_PLACER = {
    display: 'flex',
    width: "100%",
    justifyContent: 'flex-end',
    cursor: 'pointer',
}

const BTN_STYLE = {
    padding: ".5rem",
    color: 'rgba(255,255,255,0.5)',
    transition: 'all 0.7s',
    margin: '10px 15px',
    cursor: 'pointer',
    background: 'none',
    border: 'none',
    fontSize: '2rem',
    fontWieght: 'bold',
    borderRadius: '8px',
    zIndex: '1500',
}

export default function Modal({isOpen, children, setOpenModal}) {
  if (isOpen) {
    return (
    <div style={BG_STYLE}>
        <div className="modal">
            <div style={BTN_PLACER}>
                <button style={BTN_STYLE} onClick={() => setOpenModal(false)}><AiFillCloseSquare/></button>
            </div>
            
            <div>{children}</div>
            
        </div>
    </div>
  )}

  return null
}
