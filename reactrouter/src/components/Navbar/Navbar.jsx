import {NavLink} from 'react-router-dom';
import styles from './Navbar.module.scss';
export const Navbar = () => {

    return(
        <>
         <nav className={styles.navbar}>
            <ul>
                <li>
                    <NavLink style={({isActive})=> isActive? {color: "red"}: {color: "black"}} to = {"/"}>HOME</NavLink>
                </li>
                <li>
                    <NavLink to = {"/about"}>ABOUT</NavLink>
                </li>
                <li>
                    <NavLink to = {"/concept"}>CONCEPT</NavLink>
                </li>
                <li>
                    <NavLink to = {"/contact"}>CONTACT</NavLink>
                </li>
            </ul>
         </nav>
        </>
    );
};