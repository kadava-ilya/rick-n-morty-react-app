import React, { useEffect, useState } from "react";

import { useDispatch, useSelector } from 'react-redux';
import { loadCharacters, selectCharacters } from '../../store/slices/charactersSlice'

//components
import styles from './Characters.module.scss';
import { Character } from './Character/Character';
import { Modal } from '../Modal/Modal'
import { Pagination } from '../Pagination/Pagination'
import { Preloader } from '../Preloader/Preloader';


export const Characters = ({ modalActive, setModalActive }) => {

    const dispatch = useDispatch();
    const { loading, data } = useSelector(selectCharacters);

    const [gender, setGender] = useState('');
    const [status, setStatus] = useState('');
    const [species, setSpecies] = useState('');
    const [page, setPage] = useState(1)

    const onPrev = () => {
        setPage(page - 1)
    };
    const onNext = () => {
        setPage(page + 1)
    };

    const [getPopupInfo, setGetPopupInfo] = useState([]);

    const getCharInfoModal = (id, img, name, gender, species, status) => {
        setGetPopupInfo([id, img, name, gender, species, status]);
    }

    const charactersFilter = `/?gender=${gender}&status=${status}&type=${species}&page=${page}`;

    useEffect(() => {
        loadCharacters(dispatch, charactersFilter);
    }, [charactersFilter, page]);

    if (loading) {
        return <Preloader />
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
                    onPrev={onPrev}
                    onNext={onNext}
                    pages={data && data.info.pages}
                    counter={page} />
            </div>
        </section>
    )
}