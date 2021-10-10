import React, { useState, useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { selectEpisodes, loadEpisodes } from '../../store/slices/episodesSlice'
import { Pagination } from '../Pagination/Pagination';
import { Preloader } from '../Preloader/Preloader';

//styles
import styles from './Episodes.module.scss';
import { SearchFormEpisodes } from './SearchFormEpisodes';

export const Episodes = () => {

    const dispatch = useDispatch();

    const { loading, data } = useSelector(selectEpisodes);

    const [page, setPage] = useState(1);
    const [nameFilter, setNameFilter] = useState('');

    const onPrev = () => {
        setPage(page - 1)
    };
    const onNext = () => {
        setPage(page + 1)
    };

    const episodesFilter = `/?page=${page}&name=${nameFilter}`

    useEffect(() => {
        loadEpisodes(dispatch, episodesFilter);
    }, [episodesFilter])

    if (loading) {
        return <Preloader />
    }

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
                <SearchFormEpisodes
                    nameFilter={nameFilter}
                    setNameFilter={setNameFilter} />
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
                    onPrev={onPrev}
                    onNext={onNext}
                    pages={data && data.info.pages}
                    counter={page} />
            </div>
        </section>
    )
}