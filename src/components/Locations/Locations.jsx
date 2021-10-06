import React, { useEffect, useState } from 'react';
import axios from 'axios';

import { LOCATIONS_API } from '../../api/api'

import styles from './Locations.module.scss'
import { Pagination } from '../Pagination/Pagination'


export const Locations = () => {

    const [locations, setLocations] = useState(null);
    const [locationsInfo, setLocationsInfo] = useState({});
    const [locationsCounter, setLocationsCounter] = useState(1);

    const fetchLocations = (url) => {
        axios(url)
            .then(data => {
                setLocations(data.data.results);
                setLocationsInfo(data.data.info);
            })
            .catch((error) => console.log(error));
    };

    const onPrev = () => {
        if (locationsCounter > 1) {
            fetchLocations(locationsInfo.prev);
            setLocationsCounter(locationsCounter - 1);
        }
    };
    const onNext = () => {
        if (locationsCounter < locationsInfo.pages) {
            fetchLocations(locationsInfo.next);
            setLocationsCounter(locationsCounter + 1);
        }
    };

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


    tableTemplate = locations && locations.map((row, i) => {
        return <tr
            key={i}
            className={styles.table_row}>{makeColumns(row)}</tr>
    })

    useEffect(() => {
        fetchLocations(LOCATIONS_API);
    }, []);

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
            <Pagination
                prev={locationsInfo.prev}
                next={locationsInfo.next}
                onPrev={onPrev}
                onNext={onNext}
                pages={locationsInfo.pages}
                counter={locationsCounter} />
        </section>
    )
}