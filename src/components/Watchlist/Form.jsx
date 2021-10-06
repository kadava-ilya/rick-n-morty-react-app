import React from 'react'

import styles from './Watchlist.module.scss'

const Form = ({ todo, change, submit, error }) => {
    return (
        <form onSubmit={submit}>
            <div className={styles.form_group}>
                <input
                    className={styles.form_input}
                    type="text"
                    value={todo}
                    maxlength="40"
                    onChange={change} />
                {error && <small className={styles.small}>{error}</small>}
                <button className={styles.form_btn} type='submit'>
                    Add Todo
                </button>
            </div>
        </form>
    )
}

export default Form;