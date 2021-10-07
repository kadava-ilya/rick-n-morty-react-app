import React, { useEffect, useState } from "react";
import axios from "axios";

import { useDispatch, useSelector } from 'react-redux';
import { loadCharacters, selectCharacters } from '../../store/slices/charactersSlice'

//components
import styles from './Characters.module.scss';
import { Character } from './Character/Character';
import { Modal } from '../Modal/Modal'
import { Pagination } from '../Pagination/Pagination'
import { useStore } from "react-redux";
import { changeFilter } from "../../store/slices/filterSLice";

export const CharactersRedux = ({ modalActive, setModalActive }) => {

    const dispatch = useDispatch();
    const { loading, data } = useSelector(selectCharacters);

    const [gender, setGender] = useState('');
    const [status, setStatus] = useState('');
    const [species, setSpecies] = useState('');

    const [characters, setCharacters] = useState(null);
    const [charInfo, setCharInfo] = useState({});
    const [charPageCounter, setCharPageCounter] = useState(1);

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

    const [getPopupInfo, setGetPopupInfo] = useState([]);

    const getCharInfoModal = (id, img, name, gender, species, status) => {
        setGetPopupInfo([id, img, name, gender, species, status]);
    }

    const charactersFilter = `/?gender=${gender}&status=${status}&type=${species}`;

    useEffect(() => {
        loadCharacters(dispatch, charactersFilter);
    }, [charactersFilter]);

    if (loading) {
        return <div>Loading</div>
    }

    return (
        <section className={styles.characters}>
            <div className="container">
                <h2 className={styles.characters_title}>Characters</h2>

                <div className={styles.filter_section}>
                    <p className={styles.filter_title}>Filter By:</p>
                    <ul className={styles.filter_list}>
                        <li className={styles.filter_item}>Species
                            <select onChange={e => setSpecies(e.target.value)} id="species">
                                <option value={species}>{species ? species : 'All'}</option>
                                <option value="">All</option>
                                <option value="Human">Human</option>
                                <option value="Alien">Alien</option>
                            </select></li>
                        <li className={styles.filter_item}>Status
                            <select onChange={e => setStatus(e.target.value)} id="status">
                                <option value={status}>{status ? status : 'All'}</option>
                                <option value="">All</option>
                                <option value="Alive">Alive</option>
                                <option value="Dead">Dead</option>
                                <option value="Unknown">Unknown</option>
                            </select></li>
                        <li className={styles.filter_item}>Gender
                            <select onChange={e => setGender(e.target.value)} id="gender">
                                <option value={gender}>{gender ? gender : 'All'}</option>
                                <option value="">All</option>
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                            </select></li>
                    </ul>
                </div>
                <div className={styles.characters_holder}>
                    {data && data.results.map(character =>
                        <Character
                            key={character.id}
                            character={character}
                            setModalActive={setModalActive}
                            getCharInfoModal={getCharInfoModal}
                        />)
                    }
                </div>

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
        </section>
    )
}