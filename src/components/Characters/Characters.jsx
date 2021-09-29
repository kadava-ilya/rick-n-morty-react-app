import React, { useEffect, useState } from 'react';
import axios from 'axios';

import { CHARACTERS_API } from '../../api/api';
import styles from './Characters.module.scss';
import Character from './Character/Character';
import Pagination from '../Pagination';
import Modal from '../Modal/Modal'


const Characters = ({
    prev,
    next,
    onPrev,
    onNext,
    characters,
    charPageCounter,
    pages,
    modalActive,
    setModalActive }) => {

    // const [characters, setCharacters] = useState(null);

    // useEffect(() => {
    //     try {
    //         axios(CHARACTERS_API)
    //             .then(result => {
    //                 console.log(result.data.results);
    //                 setCharacters(result.data.results);
    //             });
    //     }
    //     catch (error) {
    //         console.log(error);
    //     }
    // }, [])



    return (
        <div className="container">
            <div className={styles.characters_title}>Characters</div>

            <div className={styles.characters_holder}>
                {characters && characters.map(character =>
                    <Character
                        key={character.id}
                        character={character}
                        setModalActive={setModalActive} />)}
                <Modal
                    modalActive={modalActive}
                    setModalActive={setModalActive} />
                <Pagination
                    prev={prev}
                    next={next}
                    onPrev={onPrev}
                    onNext={onNext}
                    pages={pages}
                    counter={charPageCounter} />
            </div>
        </div>
    )
}

export default Characters;