import Button from '../../Button/Button';
import styles from './Footer.module.scss';
import logo from '../../../assets/images/logo.png'
function Footer() {
    return ( 
        <div className={styles.footer}>
            <div className={styles['footer-wrap']}>
                <div className={styles['footer-col']}>
                    <a href="/"><img src={logo} alt="logo" /></a>
                    <p >Lorem ipsum dolor sit amet consectetur adipiscing
                        sed do eiusmod.</p>
                </div >
                <div className={styles['footer-col']}>
                    <h3 className={styles.heading}>special catagories</h3>
                    <ul className={styles['footer-list']}>
                        <li><a href="#">water resistant</a></li>
                        <li><a href="#">charging system</a></li>
                        <li><a href="#">artificial leather</a></li>

                    </ul>
                </div>
                <div className={styles['footer-col']}>
                    <h3 className={styles.heading}>contact us</h3>
                    <ul className={styles['footer-list']}>
                        <li><a href="tel:(808)555-0111">(808) 555-0111</a></li>
                        <li><a href="mailto:michelle.rivera@example.com">michelle.rivera@example.com</a></li>
                        <li><a href="#">http://www.codehow.com</a></li>
                    </ul>
                </div>
                <div className={styles['footer-col']}>
                    <h3 className={styles.heading}>News Letter</h3>
                    <input className='input' type="email" placeholder='enter your email' />
                    <div style={{ width: '60%' }}><Button text='Subscribe' /></div>
                </div>
            </div>
       </div>
     );
}

export default Footer;