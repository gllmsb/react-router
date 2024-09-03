import styles from './Footer.module.scss';
import facebookIcon from '../../assets/images/facebook.png';
import instagramIcon from '../../assets/images/instagram.png';
import twitterIcon from '../../assets/images/twitter.png';

export const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.links}>
                    <h3>Quick Links</h3>
                    <ul>
                        <li><a href={"/"}>Home</a></li>
                        <li><a href={"/about"}>About Us</a></li>
                        <li><a href={"/store"}>Store</a></li>
                        <li><a href={"/contact"}>Contact Us</a></li>
                    </ul>
                </div>
                <div className={styles.socialMedia}>
                    <h3>Follow Us</h3>
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                        <img src={facebookIcon} alt="Facebook" className={styles.socialIcon} />
                    </a>
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                        <img src={instagramIcon} alt="Instagram" className={styles.socialIcon} />
                    </a>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                        <img src={twitterIcon} alt="Twitter" className={styles.socialIcon} />
                    </a>
                </div>
            </div>
            <div className={styles.footerBottom}>
                <p>&copy; {new Date().getFullYear()} Your Company. All rights reserved.</p>
            </div>
        </footer>
    );
};