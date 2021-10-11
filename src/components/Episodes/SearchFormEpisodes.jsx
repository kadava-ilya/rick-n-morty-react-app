import React from 'react'

//styles
import styles from './Episodes.module.scss';

export const SearchFormEpisodes = ({ nameFilter, setNameFilter }) => {
    return (
        <div className={styles.episodes_search}>
            <h3 className="episodes_searchTitle">Search by</h3>
            <input
                className={styles.episodes_searchForm}
                type="text"
                placeholder="Name"
                value={nameFilter}
                onInput={(e) => setNameFilter(e.target.value)}
            />
        </div>
    )
}
