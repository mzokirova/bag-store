import { Link } from 'react-router-dom';
import styles from './Products.module.scss';

function ProductCard(props) {
    return ( 
        <div style={{backgroundColor:`${props.bgColor}`}} className={styles['prod-card']}>
            <img src={require('../../assets/images/' + props.image + '.png')} alt="" />
        </div>
     );
}

export default ProductCard;