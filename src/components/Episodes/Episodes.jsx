import React, { useEffect, useState } from 'react';
import axios from 'axios';

import { EPISODES_API } from '../../api/api';
import styles from './Episodes.module.scss';
import Pagination from "../Pagination";
import Modal from '../Modal/Modal'

const Episodes = ({ modalActive, setModalActive }) => {

    const [episodes, setEpisodes] = useState(null);
    const [episodesInfo, setEpisodesInfo] = useState({});
    const [episodeCounter, setEpisodeCounter] = useState(1);

    //getting episodes
    // useEffect(() => {
    //     try {
    //         axios(EPISODES_API)
    //             .then(result => {
    //                 console.log(result.data);
    //                 setEpisodes(result.data.results);
    //                 setEpisodesInfo(result.data.info);
    //             });
    //     }
    //     catch (error) {
    //         console.log(error);
    //     }
    // }, [])

    const fetchEpisodes = (url) => {
        axios(url)
            .then(data => {
                console.log(data)
                setEpisodes(data.data.results);
                setEpisodesInfo(data.data.info);
            })
            .catch((error) => console.log(error));
    };

    const onPrev = () => {
        if (episodeCounter > 1) {
            fetchEpisodes(episodesInfo.prev);
            setEpisodeCounter(episodeCounter - 1);
        }
    };
    const onNext = () => {
        if (episodeCounter < episodesInfo.pages) {
            fetchEpisodes(episodesInfo.next);
            setEpisodeCounter(episodeCounter + 1);
        }
    };

    let tableTemplate;

    const makeColumns = (row) => {
        return (
            [
                <td className='table_row_item'>{row.id} </td>,
                <td className='table_row_item'>{row.name} </td>,
                <td className='table_row_item'>{row.air_date} </td>
            ]
        )
    }


    tableTemplate = episodes && episodes.map((row, i) => {
        return <tr
            key={i}
            className='table_row'
            onClick={() => setModalActive(true)}> {makeColumns(row)}</tr >
    })

    useEffect(() => {
        fetchEpisodes(EPISODES_API);
    }, []);

    return (
        <div className={styles.episodes}>
            <div className="container">
                <div className="component_title">Episodes</div>
                <table>
                    <thead>
                        <tr>
                            <th>№</th>
                            <th>Name</th>
                            <th>Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {tableTemplate}
                    </tbody>
                </table>

                <Modal
                    modalActive={modalActive}
                    setModalActive={setModalActive} />

                <Pagination
                    className='pagination'
                    prev={episodesInfo.prev}
                    next={episodesInfo.next}
                    onPrev={onPrev}
                    onNext={onNext}
                    pages={episodesInfo.pages}
                    counter={episodeCounter} />

            </div>
        </div>
    )
}

export default Episodes;