import React from 'react'

import styles from './Watchlist.module.scss'

const ListItem = ({ id, title, delHandler, doneHandler, done }) => {
    return (
        <li className={styles.list_item}>
            {done ? <del>{title}</del> : title}
            <div className={styles.list_buttons}>
                <button className={styles.list_btn_del} onClick={() => delHandler(id)}>
                    <i class="fas fa-trash-alt"></i>
                </button>
                <button className={styles.list_btn_check} onClick={() => doneHandler(id)}>
                    {done ? <i class="fas fa-redo"></i> : <i class="fas fa-check"></i>}
                </button>
            </div>
        </li>
    )
}

export default ListItem
