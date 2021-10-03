import React from 'react'

import styles from './Pagination.module.scss'

export const Pagination = ({ prev, next, onPrev, onNext, counter, pages }) => {

    const handlePrev = () => {
        onPrev();
    }

    const handleNext = () => {
        onNext();
    }

    return (
        <nav>
            <ul className={styles.pagination}>

                <li className={`${prev} ? ${styles.pagination_item} : ${styles.pagination_notActive}`}>
                    <button
                        className={styles.pagination_link}
                        onClick={handlePrev}>Prev</button>
                </li>

                {`${counter} / ${pages}`}

                <li className={`${next} ? ${styles.pagination_item} : ${styles.pagination_notActive}`}>
                    <button
                        className={styles.pagination_link}
                        onClick={handleNext}>Next</button>
                </li>

            </ul>
        </nav>
    )
}
