import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { selectLocations, loadLocations } from '../../store/slices/locationsSlice'

import styles from './Locations.module.scss'
import { Preloader } from '../Preloader/Preloader';
import { Pagination } from '../Pagination/Pagination';
import { SearchFormLocations } from './SearchFormLocations';

export const Locations = () => {

    const dispatch = useDispatch();
    const { loading, data } = useSelector(selectLocations);

    const [page, setPage] = useState(1)
    const [nameFilter, setNameFilter] = useState('');
    const [typeFilter, setTypeFilter] = useState('');
    const [dimensionFilter, setDimensionFilter] = useState('');

    const onPrev = () => {
        setPage(page - 1)
    };
    const onNext = () => {
        setPage(page + 1)
    };

    const locationsFilter = `/?page=${page}&name=${nameFilter}&type=${typeFilter}&dimension=${dimensionFilter}`

    useEffect(() => {
        loadLocations(dispatch, locationsFilter);
    }, [locationsFilter]);

    if (loading) {
        return <Preloader />
    }

    let tableTemplate;

    const makeColumns = (row) => {
        return (
            [
                <td className={styles.table_row_item}>{row.id} </td>,
                <td className={styles.table_row_item}>{row.name} </td>,
                <td className={styles.table_row_item}>{row.type} </td>,
                <td className={styles.table_row_item}>{row.dimension} </td>
            ]
        )
    }

    tableTemplate = data && data.results.map((row, i) => {
        return <tr
            key={i}
            className={styles.table_row}>
            {makeColumns(row)}</tr>
    })

    return (
        <section className={styles.locations}>
            <div className="container">
                <h2 className={styles.locations_title}>Locations</h2>
                <SearchFormLocations
                    nameFilter={nameFilter}
                    setNameFilter={setNameFilter}
                    typeFilter={typeFilter}
                    setTypeFilter={setTypeFilter}
                    dimensionFilter={dimensionFilter}
                    setDimensionFilter={setDimensionFilter} />
                <table>
                    <thead>
                        <tr>
                            <th>№</th>
                            <th>Name</th>
                            <th>Type</th>
                            <th>Dimension</th>
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