import React, { useEffect, useState } from 'react';
import axios from 'axios';

import { EPISODES_API } from '../../api/api';

//components
import styles from './Episodes.module.scss';
import { Pagination } from "../Pagination/Pagination";

export const Episodes = () => {

    const [episodes, setEpisodes] = useState(null);
    const [episodesInfo, setEpisodesInfo] = useState({});
    const [episodeCounter, setEpisodeCounter] = useState(1);

    //getting episodes
    const fetchEpisodes = (url) => {
        axios(url)
            .then(data => {
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
                <td className={styles.table_row_item}>{row.id} </td>,
                <td className={styles.table_row_item}>{row.name} </td>,
                <td className={styles.table_row_item}>{row.air_date} </td>
            ]
        )
    }

    tableTemplate = episodes && episodes.map((row, i) => {
        return <tr
            key={i}
            className={styles.table_row}> {makeColumns(row)}
        </tr >
    })

    useEffect(() => {
        fetchEpisodes(EPISODES_API);
    }, []);

    return (
        <section className={styles.episodes}>
            <div className="container">
                <div className={styles.episodes_title}>Episodes</div>
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

                <Pagination
                    prev={episodesInfo.prev}
                    next={episodesInfo.next}
                    onPrev={onPrev}
                    onNext={onNext}
                    pages={episodesInfo.pages}
                    counter={episodeCounter} />

            </div>
        </section>
    )
}