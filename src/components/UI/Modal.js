import React from 'react'
import ReactDom from 'react-dom'
import styles from './Modal.module.css';

const BackDrop = (props)=>{
    return (
        <div className={styles.backdrop}></div>
    )
}

const ModalOverlay = (props)=>{
    return(
        <div className={styles.modal}>
            <div className={styles.content}>{props.children}</div>

        </div>
    )
}

const portalElement = document.getElementById('overlays')

const Modal = (props)=>{
    return(
        <>
        {ReactDom.createPortal(<BackDrop />, portalElement)}
        {ReactDom.createPortal(<ModalOverlay>{props.children}</ModalOverlay>, portalElement)}
        </>
    )
}

export default Modal;

