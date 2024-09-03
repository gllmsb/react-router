import { Button } from "../Button/Button";
import styles from './IntroMsg.module.scss';

export const IntroMsg = () => {

    return(
    <section className={styles.introMsg}>
      <div className={styles.container}>
            <h1>Welcome to Urban Oasis</h1>
                <p>
                    Discover a lush world of plants and greenery right at your fingertips. At Urban Oasis, we bring you a curated selection of high-quality plants, gardening tools, and unique botanical decor. Whether you're a seasoned gardener or a novice looking to add a touch of green to your home, we've got something for everyone.
                </p>
                <p>
                    Explore our extensive collection, get inspired by our gardening tips, and find everything you need to create your own urban oasis. Let us help you bring nature into your everyday life.
                </p>
            <Button text="Shop Now" />
      </div>
    </section>
    )
}