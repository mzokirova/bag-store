import { useParams, useNavigate } from "react-router-dom";
import { useState,useEffect } from "react";
import { Link } from "react-router-dom";

function SingleProduct() {
    const [data, setData] = useState([]);
    const navigate = useNavigate();
    const { productId } = useParams();

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then((res) => res.json())
            .then((data) => {
                setData(data);
            })
                
        setData(data);
    }, []);

    const singleProduct = data.find(product => product.id == parseInt(productId));
    const {  title, price, image, description } = singleProduct;
    return (
        <div className='single'>
            <h1 className="single-heading">
                {title}
            </h1>

            <div className="single-card">
                <img src={image} className='single-img' alt="single product image" />
                <h2>{title}</h2>
                <p className='description'>{description}</p>
                <h3 className='price'>Price: {price}</h3>
                <div className="flex-row">
                    <button className='btn' onClick={() => navigate(-1)}>Back</button>
                    <button className='btn' onClick={() => navigate('/category')}>Navigate To Products</button>
                    <Link className='btn' to='/category'>Products</Link>
                </div>
            </div>
        </div>);
}

export default SingleProduct;