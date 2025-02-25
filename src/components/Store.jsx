import React from 'react'
import { useState, useEffect } from 'react';
import ProductView from './ProductView';
import ErrorImgae from '../assets/error.svg'
import { useDispatch } from 'react-redux';
import { addToProduct } from '../store/productSlice';

const Store = () => {
    const [loading, setLoading] = useState(true);
    const [products, setProducts] = useState([]);
    const [error, setError] = useState(null);
    const dispatch = useDispatch();
    useEffect(() => {
        const fetchProducts = async () => {
            try {
                setLoading(true);
                const res = await fetch('https://dummyjson.com/products?limit=100&skip=10');
                const data = await res.json();
                if (data && data.products && data.products.length) {
                    setProducts(data.products);
                    dispatch(addToProduct(data.products));
                    setLoading(false);
                }
            }
            catch (e) {
                setError(e.message);
                setLoading(false);
            }
        };
        fetchProducts();

    }, []);

    if (loading) {
        return <div className='loading-box w-full h-[73vh] flex items-center justify-center text-center text-2xl'>
            <div className="border-gray-300 h-20 w-20 animate-spin rounded-full border-8 border-t-[#EF4444]" />
        </div>;
    }
    if (error !== null) {
        return <div className='w-full h-[73vh] flex items-center justify-center'>
            <img src={ErrorImgae} alt="" className='h-72 w-72' />
        </div>
    }
    return (
        <ProductView products={products} />
    )
}

export default Store
