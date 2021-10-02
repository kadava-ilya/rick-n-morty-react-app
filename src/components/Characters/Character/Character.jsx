import React from 'react';

import styles from './Character.module.scss'


const Character = ({ character, setModalActive }) => {

    const { image, name } = character;

    return (
        <div className={styles.character}
            onClick={() => setModalActive(true)}>
            <img className={styles.character_img} src={image} alt={name} />
            <h3 className={styles.character_name}>{name}</h3>
        </div>
    )
}

export default Character;