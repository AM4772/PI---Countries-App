import styles from "./navbar.module.css";

let Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <ul>
        <li>
          <a href="./">Welcome</a>
        </li>
        <li>
          <a href="./home">Home</a>
        </li>
        <li>
          <a href="./activity">Activity</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
