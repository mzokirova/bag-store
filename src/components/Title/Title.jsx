import Button from "../Button/Button";
import styles from './Title.module.scss'
function Title(props) {
    return (
        <div className={styles.title}>
            <h3 className={styles.top}>{props.top}</h3>
            <h1 className={styles.main}
                style={{ color: `${props.color}`, fontSize:`${props.fSize}`}}>
                {props.main}
            </h1>
            <p >
                {props.mini}
            </p>
            <Button width="40%" text={props.text} />
        </div>
    );
}

export default Title;