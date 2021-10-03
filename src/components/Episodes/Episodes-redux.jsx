import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { selectEpisodes, loadEpisodes } from '../../store/slices/episodesSlice'

//styles
import styles from './Episodes.module.scss';

export const EpisodesRedux = () => {

    const dispatch = useDispatch();

    const { loading, data } = useSelector(selectEpisodes);

    useEffect(() => {
        loadEpisodes(dispatch);
    }, [])

    if (loading) {
        return <div>Loading</div>
    }

    //
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

    tableTemplate = data && data.results.map((row, i) => {
        return <tr
            key={i}
            className={styles.table_row}>
            {makeColumns(row)}
        </tr >
    })


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
            </div>
        </section>
    )
}