import React, {useState} from 'react'
import styles from "./Navbar.module.css";
import {getImageUrl} from "../../utils"

export const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className={styles.navbar}>
        <a className={styles.header} href= "/">Portfolio</a>
        <div className={styles.row}>
            <img className= {styles.rowBtn} 
            src={
                menuOpen
                ? getImageUrl("closeIcon.png")
                : getImageUrl("menuIcon.png")
            }
            alt = "menu-button to open row"
            onClick={() => setMenuOpen(!menuOpen)}
            />
            <ul className={`${styles.rowItems} ${menuOpen && styles.menuOpen}` } 
            onClick={() => setMenuOpen(false)}
            >
                <li> <a href= "#Home">Home</a> </li>
                <li> <a href= "#about">About</a> </li>
                <li> <a href= "#experience">Resume</a> </li>
                <li> <a href= "#projects">Projects</a> </li>
            </ul>
        </div>
    </nav>
  );
};

