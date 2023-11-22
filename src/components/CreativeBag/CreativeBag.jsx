import Title from "../Title/Title";
import styles from '../CreativeBag/CreativeBag.module.scss';
function CreativeBag() {
    return (
        <section className={styles.creaBag} >
            <img className={styles['creaBag-img']} src="/src/assets/images/creative_bag.png" alt="bags image" />
            <div className={styles['creaBag-txt']}>
                <Title top="Creative bag only for you." main="Lorem ipsum dolor sit amet consectetur adipiscing 
            elit sed do eiusmod." mini="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
             incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam." text="See More" color="var(--main-text-color)" fSize='1.9rem' />
            </div>
        </section>
    );
}

export default CreativeBag;