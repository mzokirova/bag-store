import styles from './Button.module.scss'
function Button(props) {
    return (
        <button className={styles.button} style={{width:props.width}}>
        {props.text}
        </button>
     );
}

export default Button;