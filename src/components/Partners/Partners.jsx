import styles from './Partners.module.scss'
import partner1 from '../../assets/images/partner1.png'
import partner2 from '../../assets/images/partner2.png'
import partner3 from '../../assets/images/partner3.png'
import partner4 from '../../assets/images/partner4.png'
function Partners() {
    return (
        <div className={styles.partners}>
            <img src={partner1} alt="" />
            <img src={partner2} alt="" />
            <img src={ partner3} alt="" />
            <img src={partner4} alt="" />
        </div>
      );
}

export default Partners;