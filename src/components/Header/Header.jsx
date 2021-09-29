import React from 'react'
import { NavLink } from "react-router-dom";

import styles from './Header.module.scss'
import logo from '../../img/logo2.png'


const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.container_header}>
                <NavLink to='/' >
                    <div className={styles.logo}>
                        <img className={styles.logo_img} src={logo} alt="Rick and Morty" />
                    </div>
                </NavLink>
                <div className={styles.header_nav}>
                    <ul className={styles.header_items}>
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
                </div>
            </div>
        </header >
    )
}

export default Header;