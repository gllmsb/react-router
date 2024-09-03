import styles from './Introduction.module.scss';
import intro1 from '../../assets/images/intro.png';
import intro2 from '../../assets/images/intro2.png';
import intro3 from '../../assets/images/intro3.png';
import { useEffect, useState } from 'react';


const images = [intro1, intro2, intro3];

export const Introduction = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
   
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 3000);  
    
    return () => clearInterval(interval);

}, []);

    return(
        <section className={styles.introduction}>
            <img src={images[currentIndex]} alt="Introduction" className={styles.slideshow} />
        </section>
    )
}