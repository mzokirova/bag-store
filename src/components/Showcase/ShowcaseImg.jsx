import styles from './Showcase.module.scss'
import showcase from '../../assets/images/showcase.png'
function ShowcaseImg() {
    return ( 
        <div className={styles['shw-img-box']}>
            <img className={styles['shw-img']} src={showcase} alt="girl in showcase" />
        </div>
     );
}

export default ShowcaseImg;