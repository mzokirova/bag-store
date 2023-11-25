import ProductCard from './ProductCard';
import styles from './Products.module.scss';
import img1 from '../../assets/images/bag1.png';
const cardData = [
    {
        image: 'img1',
        bgColor:'#FFE1E8'
    },
    {
        image: '../../assets/images/bag2.png',
        bgColor: '#FFE1E8'
    },
    {
        image: '../../assets/images/bag3.png',
        bgColor: '#F9DCFF'
    },
    {
        image: '../../assets/images/bag4.png',
        bgColor: '#FFDEE7'
    },
    {
        image: '../../assets/images/bag5.png',
        bgColor: '#ECF1FF'
    },
    {
        image: '../../assets/images/bag6.png',
        bgColor: '#FADADE'
    },
    {
        image: '../../assets/images/bag7.png',
        bgColor: '#D9E6FE'
    },
    {
        image: '../../assets/images/bag8.png',
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