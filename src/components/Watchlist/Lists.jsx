import React from 'react'
import ListItem from './ListItem'

import styles from './Watchlist.module.scss'

const Lists = ({ del, done, todos }) => {

    if (todos <= 0) {
        return <div className={styles.empty_watchlist}>
            <h2 className={styles.empty_watchlist_text}>Your watchlist is empty</h2>
            <h2 className={styles.empty_watchlist_text}>Add any episode you'd like to watch later</h2>
            <i class="fas fa-tv"></i>
        </div>
    }

    return (
        <div className={styles.watchlist}>
            <ul className={styles.watchlist_list}>
                {todos && todos.map((item) => <ListItem
                    key={item.id}
                    id={item.id}
                    title={item.title}
                    delHandler={del}
                    doneHandler={done}
                    done={item.done} />)}
            </ul>
        </div>
    )
}

export default Lists
