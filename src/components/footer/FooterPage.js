import styles from './footer.module.css'
import facebookIcon from '../../assets/facebookIcon.png'
import shortid from 'shortid'

const FooterPage = () => {

    let socialMedia = [facebookIcon, facebookIcon, facebookIcon, facebookIcon]

    let aboutArr = ['History',
        'Our Team',
        'Brand Guidelines',
        'Terms & Condition',
        'Privacy Policy']

        let serivceArr=['How to Order',
            'Our Product',
            'Offers',
            'Promo',
            'Payment Method']

            let otherArr=['Contact Us',
                'Help']

    return (

        <div className={styles.footerMain}>

            <div className={styles.footerFirstContainer}>
                <h2 className={styles.MariachHeading}>Mariachi</h2>
                <p className={styles.footerDesc}>Lorem ipsum dolor sit amet, consectetur <br></br>
                    adipiscing elit. Aliquam at dignissim nunc, <br></br>
                    id maximus ex. Etiam nec dignissim elit <br></br>, at
                    dignissim enim.</p>


                <div className={styles.mediaContainer}>

                    {socialMedia.map((item, index) => (
                        <img className={styles.icon} ke={shortid.generate()} src={item}></img>
                    ))}
                </div>
            </div>

            <div className={styles.aboutContainer}>
                <h2 className={styles.MariachHeading}>About</h2>

                    {aboutArr.map((item, index) => (
                        <p className={styles.text}  key={shortid.generate()}>{item}</p>
                    ))}
            </div>

            <div className={styles.aboutContainer}>
                <h2 className={styles.MariachHeading}>Service</h2>

                    {serivceArr.map((item, index) => (
                        <p className={styles.text}  key={shortid.generate()}>{item}</p>
                    ))}
            </div>

            <div className={styles.aboutContainer}>
                <h2 className={styles.MariachHeading}>Other</h2>

                    {otherArr.map((item, index) => (
                        <p className={styles.text}  key={shortid.generate()}>{item}</p>
                    ))}
            </div>



        </div>
    )
}
export default FooterPage;