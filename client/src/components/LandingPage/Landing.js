import React from 'react';
import { Link } from 'react-router-dom';
import worldvideo from '../../assets/worldvideo.mp4';
import styles from './landing.module.css';

export default function LandingPage(){
    return(
        <div className = { styles.main }>
            <div className = { styles.overlay }></div>
            <video src = { worldvideo } autoPlay loop muted />
            <div className = { styles.content }>
                <h1>Welcome to my first page</h1>
                <Link to = '/home'>
                    <button className = { styles.button }>Home</button>
                </Link>        
            </div>
        </div>
    );
};