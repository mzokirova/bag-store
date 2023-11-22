import styles from './Showcase.module.scss'
function ShowcaseImg() {
    return ( 
        <div className={styles['shw-img-box']}>
            <img className={styles['shw-img']} src="/src/assets/images/showcase.png" alt="girl in showcase" />
        </div>
     );
}

export default ShowcaseImg;