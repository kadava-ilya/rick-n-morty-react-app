import React from 'react';

export const Modal = ({ modalActive, setModalActive, getPopupInfo }) => {

    return (
        <div className={modalActive ? 'modal active' : 'modal'} onClick={() => setModalActive(false)}>
            <div className={modalActive ? 'modal_content active' : 'modal_content'}
                onClick={e => e.stopPropagation()}>
                <div
                    className="modal_close"
                    onClick={() => setModalActive(false)}>&#10006;
                </div>
                {/* <img src={getPopupInfo[1]} alt="" />
                <h2>{getPopupInfo[2]}</h2>
                <h4>Gender: {getPopupInfo[3]}</h4>
                <h4>Species: {getPopupInfo[4]}</h4>
                <h4>Status: {getPopupInfo[5]}</h4> */}

            </div>
        </div>
    )
}
