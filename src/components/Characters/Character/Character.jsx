import React from 'react';

import styles from './Character.module.scss'


export const Character = ({ character, setModalActive, getCharInfoModal }) => {

    const { id, image, name, gender, species, status } = character;


    return (
        <article className={styles.character}
            onClick={() => setModalActive(true) +
                getCharInfoModal(id, image, name, gender, species, status)}>
            <img className={styles.character_img} src={image} alt={name} />
            <h3 className={styles.character_name}>{name}</h3>
        </article>
    )
}