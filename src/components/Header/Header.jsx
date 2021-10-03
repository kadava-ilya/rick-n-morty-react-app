import React from 'react'
import { NavLink } from "react-router-dom";

import styles from './Header.module.scss'
import logo from '../../assets/img/logo.png'


export const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.container_header}>
                <NavLink to='/' >
                    <div className={styles.logo}>
                        <img className={styles.logo_img} src={logo} alt="Rick and Morty" />
                    </div>
                </NavLink>
                <nav className={styles.header_nav}>
                    <ul className={styles.header_list}>
                        <li className={styles.header_item}>
                            <NavLink to='characters' activeClassName={styles.active_link}>
                                Characters
                            </NavLink>
                        </li>
                        <li className={styles.header_item}>
                            <NavLink to='episodes' activeClassName={styles.active_link}>
                                Episodes
                            </NavLink>
                        </li>
                        <li className={styles.header_item}>
                            <NavLink to='locations' activeClassName={styles.active_link}>
                                Locations
                            </NavLink>
                        </li>
                        <li className={styles.header_item}>
                            <NavLink to='watchlist' activeClassName={styles.active_link}>
                                Watchlist
                            </NavLink>
                        </li>
                    </ul>
                </nav>
            </div>
        </header >
    )
}