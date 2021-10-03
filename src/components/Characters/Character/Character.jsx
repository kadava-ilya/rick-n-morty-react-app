import React from 'react';

import styles from './Character.module.scss'


export const Character = ({ character, setModalActive }) => {

    const { image, name } = character;

    return (
        <article className={styles.character}
            onClick={() => setModalActive(true)}>
            <img className={styles.character_img} src={image} alt={name} />
            <h3 className={styles.character_name}>{name}</h3>
        </article>
    )
}