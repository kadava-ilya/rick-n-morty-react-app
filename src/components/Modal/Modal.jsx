import React from 'react';

const Modal = ({ modalActive, setModalActive }) => {

    return (
        <div className={modalActive ? 'modal active' : 'modal'} onClick={() => setModalActive(false)}>
            <div className={modalActive ? 'modal_content active' : 'modal_content'}
                onClick={e => e.stopPropagation()}>
                <div
                    className="modal_close"
                    onClick={() => setModalActive(false)}>&#10006;</div>
            </div>
        </div>
    )
}

export default Modal
