import React from 'react'

//styles
import styles from './Locations.module.scss'

export const SearchFormLocations = ({ nameFilter, setNameFilter, typeFilter,
    setTypeFilter,
    dimensionFilter,
    setDimensionFilter }) => {
    return (
        <div className={styles.locations_search}>
            <h3 className={styles.locations_searchTitle}>Search by</h3>
            <div className={styles.locations_searchBlock}>
                <input
                    className={styles.locations_searchForm}
                    type="text"
                    placeholder="Name"
                    value={nameFilter}
                    onInput={(e) => setNameFilter(e.target.value)} />
                <input
                    className={styles.locations_searchForm}
                    type="text"
                    placeholder="Type"
                    value={typeFilter}
                    onInput={(e) => setTypeFilter(e.target.value)} />
                <input
                    className={styles.locations_searchForm}
                    type="text"
                    placeholder="Dimension"
                    value={dimensionFilter}
                    onInput={(e) => setDimensionFilter(e.target.value)} />
            </div>


        </div>)
}
