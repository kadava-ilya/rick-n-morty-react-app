import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { selectLocations, loadLocations } from '../../store/slices/locationsSlice'

import styles from './Locations.module.scss'

const LocationsRedux = () => {

    const dispatch = useDispatch();
    const { loading, data } = useSelector(selectLocations);

    useEffect(() => {
        loadLocations(dispatch);
    }, [])

    if (loading) {
        return <div>Loading</div>
    }

    let tableTemplate;

    const makeColumns = (row) => {
        return (
            [
                <td className={styles.table_row_item}>{row.id} </td>,
                <td className={styles.table_row_item}>{row.name} </td>,
                <td className={styles.table_row_item}>{row.type} </td>
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

                <table>
                    <thead>
                        <tr>
                            <th>№</th>
                            <th>Name</th>
                            <th>Type</th>
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

export default LocationsRedux;