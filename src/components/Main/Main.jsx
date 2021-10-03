import React from 'react'
import styles from './Main.module.scss'


export const Main = () => {
    return (
        <main className={styles.main}>
            <div className="container">
                <h1 className={styles.main_title}>Rick and Morty</h1>
                <h3 className={styles.main_subtitle}>Test App by Kadava Ilya</h3>
            </div>

        </main>
    )
}