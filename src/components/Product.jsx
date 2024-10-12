import axios from 'axios';
import { useDispatch } from 'react-redux';
import { addCart } from '../redux/actions';
import React, { useState, useEffect } from 'react';
import Skeleton from 'react-loading-skeleton';
import { NavLink, useParams } from 'react-router-dom';

const Product = () => {
    const { id } = useParams();
    const [product, setProduct] = useState({});
    const [loading, setLoading] = useState(true); // Set initial loading to true
    const [isAdded, setIsAdded] = useState(false); // Track if the product has been added
    const [error, setError] = useState(null); // Track if there's an error
    const dispatch = useDispatch();

    const addProduct = (product) => {
        dispatch(addCart(product));
        setIsAdded(true); // Set to true when added to cart
    }

    useEffect(() => {
        const getProduct = async () => {
            setLoading(true);
            setError(null); // Reset error state before fetching
            try {
                const response = await axios.get(`/api/data/products/${id}`);
                console.log('Product data:', response.data); // Log the response
                setProduct(response.data.product);
            } catch (error) {
                console.error("Error fetching the product:", error);
                setError("Error fetching the product. Please try again later.");
            } finally {
                setLoading(false);
            }
        };
        getProduct();
    }, [id]); // Added 'id' to the dependency array

    const Loading = () => {
        return (
            <>
                <div className="col-md-6">
                    <Skeleton height={400} />
                </div>
                <div className="col-md-6" style={{ lineHeight: 2 }}>
                    <Skeleton height={50} width={300} />
                    <Skeleton height={75} />
                    <Skeleton height={25} width={150} />
                    <Skeleton height={50} />
                    <Skeleton height={150} />
                    <Skeleton height={50} width={100} style={{ marginLeft: 6 }} />
                </div>
            </>
        );
    };

    const ShowProduct = () => {
        return (
            <>
                <div className="col-md-6">
                    <img src={product.image} alt={product.name} height='400px' width='400px' />
                </div>
                <div className="col-md-6">
                    <h4 className="text-uppercase text-black-50">
                        {product.category}
                    </h4>
                    <h1 className='display-5'>{product.name}</h1>
                    <p className="lead fw-bolder">
                        Rating {product.rating && product.rating.rate}
                        <i className="fa fa-star"></i>
                    </p>
                    <h3 className="display-6 fw-bold my-4">
                        $ {product.price}
                    </h3>
                    <p className="lead">{product.description}</p>
                    <button
                        className="btn btn-outline-dark px-4 py-2"
                        onClick={() => addProduct(product)}
                        disabled={isAdded} // Disable button if already added
                    >
                        {isAdded ? "Added to Cart" : "Add to Cart"}
                    </button>
                    <NavLink to='/cart' className="btn btn-dark ms-2 px-3 py-2">
                        Go to Cart
                    </NavLink>
                </div>
            </>
        );
    };

    return (
        <div>
            <div className="container py-5">
                <div className="row py-4">
                    {loading ? <Loading /> : error ? <div>{error}</div> : <ShowProduct />}
                </div>
            </div>
        </div>
    );
};

export default Product;
