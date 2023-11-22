import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import styles from './Category.module.scss'
import CategoryCard from './CategoryCard';
function Category(props) {

    const [data, setData] = useState([]);
    const [searchParams, setSearchParams] = useSearchParams();

    const category = searchParams.get('category');

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then((res) => res.json())
            .then((data) => {
                if (!category) {
                    setData(data)
                }
                else {
                    const filteredData = data.filter((item) => {
                        return item.category == category
                    })
                    setData(filteredData);
                }
            })
    }, [category]);

  
    return ( 

        <section className='container'>
            <div className={styles.categories}>
                <button className={styles['category-btn']} onClick={() => { setSearchParams({ category: "men's clothing" })}} >men's clothing</button>
                <button className={styles['category-btn']} onClick={() => { setSearchParams({ category: 'jewelery' }) }}>jewelery</button>
                <button className={styles['category-btn']} onClick={() => { setSearchParams({ category: 'electronics' }) }}>electronics</button>
                <button className={styles['category-btn']} onClick={() => { setSearchParams({ category: "women's clothing" }) }}>women's clothing</button>
            </div>
            <main className={styles['categories-cards']}>
                    {
                        data.map((product) => {
                            return (
                                <CategoryCard image={product.image} title={product.title } key={product.id} productId={product.id} />
                            )
                        })
                    }
             
            </main>
        </section>
     );
}

export default Category;