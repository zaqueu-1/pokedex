import React from 'react'
import { AiFillCloseSquare } from 'react-icons/ai'
import './modal.css'

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
    <div className='bg_style'>
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
