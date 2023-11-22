import { Link } from 'react-router-dom';
import styles from './Category.module.scss'
import Button from '../Button/Button';
function CategoryCard(props) {
    return ( 
        <div className={styles["category-card"]} key={props.id}>
            <img className={styles['ccard-img']} src={props.image} alt={props.title} />
            <Link  to={`/category/${props.productId}`}><Button text="details"/></Link>
        </div>
     );
}

export default CategoryCard;