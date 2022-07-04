import React from 'react';
import styles from './footer.module.css';
import LinkedIn from '../../assets/linkedin.png';
import GitHub from '../../assets/github-logo.png';
import Henry from '../../assets/Henry-logo.png';

export default function Footer() {
    return (
        <div className={styles.footerContainer}>
            <p>ALDO MORO</p>
            <hr className={styles.separator} />
            <div className={styles.iconsContainer}>
                <a 
                    target="_blank"
                    rel="noreferrer"
                    href="https://www.linkedin.com/in/aldo-moro/">
                    <img className={styles.footerIcon} src={LinkedIn} alt="linkedin"/>
                </a>
                <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://github.com/AM4772">
                    <img className={styles.footerIcon} src={GitHub} alt="git"/>
                </a>
                <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://www.soyhenry.com/">
                    <img id={styles.henry} src={Henry} alt="henry"/>
                </a>
            </div>
        </div>
    )
}