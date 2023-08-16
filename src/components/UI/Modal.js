import React from 'react'
import classes from './Modal.module.css'
import { Fragment } from 'react'
// import { ReactDOM } from 'react'
import { createPortal } from 'react-dom'

const Backdrop = (props) => {
  return <div className={classes.backdrop} onClick={props.onClose} />
}
const ModalOverlay = (props) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
    </div>
  )
}

const portalElement = document.getElementById('overlays')

function Modal(props) {
  return (
    <Fragment>
      {/* <Backdrop />
      <ModalOverlay>{props.children}</ModalOverlay> */}

      {createPortal(<Backdrop onClose={props.onClose} />, portalElement)}
      {createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        portalElement
      )}
    </Fragment>
  )
}

export default Modal
