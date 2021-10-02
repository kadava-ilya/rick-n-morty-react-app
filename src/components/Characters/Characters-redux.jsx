import React, { useEffect } from "react";

import { useDispatch, useSelector } from 'react-redux';
import { loadCharacters, selectCharacters } from '../../store/slices/charactersSlice'

//components
import styles from './Characters.module.scss';
import Character from './Character/Character';

const CharactersRedux = () => {

    const dispatch = useDispatch();
    const { loading, data } = useSelector(selectCharacters);

    useEffect(() => {
        loadCharacters(dispatch);
    }, []);

    if (loading) {
        return <div>Loading</div>
    }

    return (
        <section className={styles.characters}>
            <div className="container">
                <h2 className={styles.characters_title}>Characters</h2>

                <div className={styles.characters_holder}>
                    {data && data.results.map(character =>
                        <Character
                            key={character.id}
                            character={character}
                        />)}
                </div>
            </div>
        </section>
    )
}

export default CharactersRedux;