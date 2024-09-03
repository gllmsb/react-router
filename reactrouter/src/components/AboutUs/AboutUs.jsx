import styles from './AboutUs.module.scss';

export const AboutUs = () => {
    return (
        <section className={styles.aboutUs}>
            <header className={styles.header}>
                <h1>About Us</h1>
                <p>Discover the story behind Urban Oasis and our commitment to bringing greenery into your life.</p>
            </header>
            <div className={styles.content}>
                <div className={styles.introduction}>
                    <h2>Welcome to Urban Oasis</h2>
                    <p>At Urban Oasis, we believe that every home and office can benefit from the beauty and tranquility of nature. Founded in 2020, our mission is to provide a diverse selection of high-quality indoor and outdoor plants, designed to bring a touch of green into your life.</p>
                </div>

                <div className={styles.mission}>
                    <h2>Our Mission</h2>
                    <p>We pride ourselves on exceptional customer service and a commitment to sustainability. Each plant is carefully sourced and nurtured to ensure that you receive not only a beautiful product but one that is healthy and thriving. Our knowledgeable team is always available to offer expert advice, helping you choose the perfect plants to fit your space and lifestyle.</p>
                </div>

                <div className={styles.story}>
                    <h2>Our Story</h2>
                    <p>Founded in 2020, Urban Oasis started as a small venture with a big vision. Our founder, [Founder’s Name], was passionate about bringing the joy of gardening into people's lives. Over the years, we have grown into a trusted name in the plant industry, offering a wide range of plants and gardening supplies.</p>
                </div>

                <div className={styles.whyChooseUs}>
                    <h2>Why Choose Us?</h2>
                    <p>Our curated collection caters to both novice plant enthusiasts and seasoned gardeners. We are committed to offering plants that are not only beautiful but also healthy and easy to care for. Our customer-centric approach ensures that every purchase is accompanied by expert advice and support.</p>
                </div>
            </div>
        </section>
    );
};
