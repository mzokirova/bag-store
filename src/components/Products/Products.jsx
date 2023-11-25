import ProductCard from './ProductCard';
import styles from './Products.module.scss';
import bag1 from '../../assets/images/bag1.png';
import bag2 from '../../assets/images/bag2.png';
import bag3 from '../../assets/images/bag3.png';
import bag4 from '../../assets/images/bag4.png';
import bag5 from '../../assets/images/bag5.png';
import bag6 from '../../assets/images/bag6.png';
import bag7 from '../../assets/images/bag7.png';
import bag8 from '../../assets/images/bag8.png';
const cardData = [
    {
        image: bag1,
        bgColor:'#FFE1E8'
    },
    {
        image: bag2,
        bgColor: '#FFE1E8'
    },
    {
        image: bag3,
        bgColor: '#F9DCFF'
    },
    {
        image: bag4,
        bgColor: '#FFDEE7'
    },
    {
        image: bag5,
        bgColor: '#ECF1FF'
    },
    {
        image: bag6,
        bgColor: '#FADADE'
    },
    {
        image: bag7,
        bgColor: '#D9E6FE'
    },
    {
        image: bag8,
        bgColor: '#EBF4BF'
    },
]
function Products() {
    return (
        <section className='container' style={{textAlign:'center'}}>
            <h3 className={styles['product-heading']} style={{fontSize:'1.9rem'}}>our available product</h3>
            <p style={{width:"60%"}} className={styles['product-heading']}>Lorem ipsum dolor sit amet, consectetur
                adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
            <div className={styles['product-box']}>
                {cardData.map((product,index) => {
                    return (
                        <ProductCard key={index} image={product.image} bgColor={ product.bgColor} />
                    )
                })}
            </div>

            <button className={styles['product-link']}>See More...</button>
        </section>
    );
}

export default Products;