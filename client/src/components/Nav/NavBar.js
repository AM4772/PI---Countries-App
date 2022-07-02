import styles from './navbar.module.css';
import logovideo from '../../assets/ww-animated.mp4';

let Navbar = () => {
    return (
        <nav id = { styles.navbar }>
            <div className = { styles.container }>
                <video src = { logovideo } autoPlay loop muted />
                <ul>
                    <li><a href = './'>Welcome</a></li>
                    <li><a href = './home'>Home</a></li>
                    <li><a href = './activity'>Activity</a></li>
                </ul>
            </div> 
        </nav>
    )
};

export default Navbar;