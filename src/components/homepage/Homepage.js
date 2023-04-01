import styles from './homepage.module.css'
import secondBanner from '../../assets/secondBanner.jpg'
import thirdImage from '../../assets/thirdImage.jpg'
import fourthImage from '../../assets/fourthImage.jpg'
import fifthImage from '../../assets/fifthImage.jpg'
import mariachiLogo from '../../assets/mariachiLogo.jpg'
import firstBanner from '../../assets/firstBanner.jpg'
import firstMariachi from '../../assets/firstMariachi.jpg'
import FooterPage from '../footer/FooterPage'

const HomePage = () => {

    return (

        <div className={styles.mainContainer}>

            <div className={styles.firstContainer}>
                <img className={styles.firstBannerImg} src={firstBanner} alt="firstbanner" />
            </div>

            <div className={styles.firstTextContainer}>
                <img className={styles.mariachiLogo} src={firstMariachi} alt="mariachilogo" />

                <h1 className={styles.mariachiHeading}>Mariachi</h1>
                <p className={styles.foodDesc}>Lorem ipsum dolor sit amet, consectetur adip- <br></br>
                    iscing elit. Vivamus lacinia odio vitae vestibu- <br></br>
                    lum vestibulum.</p>
                <h2 className={styles.orderButton}>ORDER NOW</h2>
            </div>

            <div className={styles.secondContainer}>
                <h2 className={styles.menuHeading}>Don't  Miss  our  Menu !</h2>
                <p className={styles.description}>Neque porro quisquam est qui dolorem ipsum  quia dolor sit amet,<br></br> consectetur, adipisci velit..</p>

                <p className={styles.seeMenu}>SEE MENU</p>
            </div>

            <div className={styles.thirdContainer}>
                <img className={styles.secondImage} src={secondBanner} alt="photo" />
            </div>

            <div className={styles.fourthContainer}>
                <img className={styles.foodImage} src={thirdImage} alt="foodimg" />
                <div className={styles.fourthSecondContainer}>
                    <h2 className={styles.headingAbout}>About Mariachi</h2>
                    <p className={styles.descriptionFourth}>Neque porro quisquam est qui dolorem ipsum <br></br> quia dolor sit amet, consectetur, adipisci velit..</p>
                    <p className={styles.seeMenu}>TELL ME MORE</p>
                </div>
            </div>

            <div className={styles.fifthContainer}>

                <div className={styles.fifthFirstContainer}>
                    <h2 className={styles.offerHeading}>See Our Offers</h2>
                    <p className={styles.offerDescrption}>Neque porro quisquam est qui dolorem ipsum <br></br> quia dolor sit amet, consectetur, adipisci velit..</p>
                    <p className={styles.seeOffers}>SEE OFFERS</p>
                </div>

                <img className={styles.fourthImage} src={fourthImage} alt="img" />
            </div>

            <div className={styles.sixthContainer}>
                <div className={styles.sixthFirstContainer}>
                    <img className={styles.fifthImage} src={fifthImage} />
                </div>

                <div className={styles.sixthSecondContainer}>
                    <img className={styles.mariachiLogo} src={mariachiLogo} alt="mariachilogo" />
                    <p className={styles.foodDesc}>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        <br></br> sed do eiusmod tempor incididunt ut labore et dolore <br></br>
                        magna aliqua.</p>
                    <h2 className={styles.headingName}>Pedro Rodriguez</h2>
                </div>
            </div>


            <div className={styles.sevenContainer}>
                <h2 className={styles.latestHeading}>Get Our Latest Offers!</h2>
                <p className={styles.latestDesc}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lac-
                    <br></br> inia odio vitae vestibulum vestibulum.</p>

                <div className={styles.inputContainer}>
                    <input className={styles.inputBox} type="email" id="email" name="email" placeholder='Your Email' />
                    <button className={styles.subscribeBtn}>SUBSCRIBE</button>
                </div>
            </div>

            <FooterPage />
        </div>
    )
}

export default HomePage;