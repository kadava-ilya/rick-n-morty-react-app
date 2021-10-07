import React from 'react';
import styles from './Modal.module.scss'

export const Modal = ({ modalActive, setModalActive, getPopupInfo }) => {

    return (
        <div className={modalActive ? styles.modal_active : styles.modal}
            onClick={() => setModalActive(false)}>
            <div className={modalActive ? styles.modal_content_active : styles.modal_content}
                onClick={e => e.stopPropagation()}>
                <div
                    className={styles.modal_close}
                    onClick={() => setModalActive(false)}>&#10006;
                </div>
                <img className={styles.modal_charImg} src={getPopupInfo[1]} alt="" />
                <h2 className={styles.modal_charName}>{getPopupInfo[2]}</h2>
                <h4 className={styles.modal_charGender}>Gender: {getPopupInfo[3]}</h4>
                <h4 className={styles.modal_charSpecies}>Species: {getPopupInfo[4]}</h4>
                <h4 className={styles.modal_charStatus}>Status: {getPopupInfo[5]}</h4>

            </div>
        </div>
    )
}
