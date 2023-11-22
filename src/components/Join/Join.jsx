import Button from '../Button/Button';
import styles from './Join.module.scss';
function Join() {
    return ( 
        <section className='container'>
            <div className={styles.join}>
                <div className={styles['join-image']}>
                    <div className={styles.overlay}></div>
                </div>
                <div className={styles['join-form']}>
                    <h3 className={styles['join-title']}>
                        Lorem ipsum dolor sit amet  adipiscing elit.
                    </h3>
                    <form action="">
                        <div className={styles['input-row']}>
                            <input className={styles.input} type="text" placeholder='Name' />
                            <input className={styles.input} type="email" placeholder='Email' />
                        </div>
                        <input type="text" className={styles.input} placeholder='Address' />
                        <div className={styles['input-row']} >
                            <input type="checkbox" name="" id="agree" />
                            <label style={{ color: 'white', opacity: '0.5', paddingRight: '30px' }} htmlFor="agree">Lorem ipsum dolor sit amet.</label>
                            <Button text="Join Now" />
                        </div>
                    </form>
                </div>
            </div>
        </section>
     );
}

export default Join;