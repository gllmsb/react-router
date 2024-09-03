import styles from './Header.module.scss';
import logo from '../../assets/images/logo.png';
export const Header = () => {

    return(
        <header className={styles.header}>
            <img src={logo} alt="Urban Oasis Logo" className={styles.logo} />
            <h1>Urban Oasis</h1>
        </header>
    );
};