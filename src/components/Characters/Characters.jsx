import React, { useEffect, useState } from "react";
import axios from "axios";

//API from api.js
import { CHARACTERS_API } from "../../api/api";

//components
import styles from './Characters.module.scss';

import { Character } from './Character/Character';
import { Pagination } from '../Pagination/Pagination';
import { Modal } from '../Modal/Modal'


export const Characters = ({
    modalActive,
    setModalActive }) => {

    const [characters, setCharacters] = useState(null);
    const [charInfo, setCharInfo] = useState({});
    const [charPageCounter, setCharPageCounter] = useState(1);

    const [getPopupInfo, setGetPopupInfo] = useState([]);

    const getCharInfoModal = (id, img, name, gender, species, status) => {
        setGetPopupInfo([id, img, name, gender, species, status]);
    }

    //getting characters
    const fetchCharacters = (url) => {
        axios(url)
            .then((data) => {
                setCharacters(data.data.results);
                setCharInfo(data.data.info);
            })
            .catch((error) => console.log(error));
    };

    const onPrev = () => {
        if (charPageCounter > 1) {
            fetchCharacters(charInfo.prev);
            setCharPageCounter(charPageCounter - 1);
        }
    };
    const onNext = () => {
        if (charPageCounter < charInfo.pages) {
            fetchCharacters(charInfo.next);
            setCharPageCounter(charPageCounter + 1);
        }
    };

    useEffect(() => {
        fetchCharacters(CHARACTERS_API);
    }, []);

    return (
        <section className={styles.characters}>
            <div className="container">
                <h2 className={styles.characters_title}>Characters</h2>

                <div className={styles.characters_holder}>
                    {characters && characters.map(character =>
                        <Character
                            key={character.id}
                            character={character}
                            setModalActive={setModalActive}
                            getCharInfoModal={getCharInfoModal} />)}
                    <Modal
                        modalActive={modalActive}
                        setModalActive={setModalActive}
                        getPopupInfo={getPopupInfo} />
                    <Pagination
                        prev={charInfo.prev}
                        next={charInfo.next}
                        onPrev={onPrev}
                        onNext={onNext}
                        pages={charInfo.pages}
                        counter={charPageCounter} />
                </div>
            </div>
        </section>
    )
}
