import styles from './Showcase.module.scss';
import Title from '../Title/Title';
import ShowcaseImg from './ShowcaseImg';
function Showcase() {

    return (
        <div className={styles.showcase} >
            <div className={styles['shw-wrap']}>
                <div className={styles.title}>  <Title top='Look Stylish Be Stylish.' main='Look Stylish Be Stylish' mini="Before starting this business you should have ideas about the market and products to Compete with the Existing Businesses." text="Join Now" /></div>
                <ShowcaseImg />
            </div>
        </div>
    );
}

export default Showcase;