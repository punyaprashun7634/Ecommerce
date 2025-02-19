import React, { useEffect, useState } from 'react'
import { CiHeart } from 'react-icons/ci';
import { FaHeart } from 'react-icons/fa';
import { HiOutlineShoppingBag } from 'react-icons/hi2';
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom';
import { addToWishlist, removeFromWishlist } from '../store/wishlistSlice';
import { addToCart } from '../store/cartSlice';

const SingleProduct = () => {
  const dispatch = useDispatch();
  const wishlists = useSelector((state) => state.wishlist);
  const cart = useSelector((state) => state.cart);
  const HandleWishlist = (e, item) => {
    e.stopPropagation();
    if (isPresentInWishlist(item.id)) {
      dispatch(removeFromWishlist(item));
    }
    else
      dispatch(addToWishlist(item));
  }

  const HandleAddtoCart = (e, item) => {
    e.stopPropagation();
    if (isPresentInCart(item.id)) {
      alert("item already present in the cart!");
    }
    else
      dispatch(addToCart(item));
  }
  const isPresentInWishlist = (id) => {
    for (let i = 0; i < wishlists.length; i++) {
      if (wishlists[i].id === id)
        return true;
    }
    return false;
  }
  const isPresentInCart = (id) => {
    for (let i = 0; i < cart.length; i++) {
      if (cart[i].id === id)
        return true;
    }
    return false;
  }

  const { id } = useParams();
  const [selectedProduct, setSelectedProduct] = useState({});

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await fetch(`https://dummyjson.com/products/${id}`);
        const data = await res.json();
        if (data) {
          setSelectedProduct(data);
          console.log(data);

        }
      }
      catch (e) {
        console.log(e.message);
      }
    };
    fetchProduct();
  }, []);


  return (
    <div className="wrapper w-full min-h-screen px-6 md:pl-16 lg:pl-24 pr-8 py-8 flex flex-col gap-4">
      <div className='single-product w-full flex gap-10 flex-wrap' id={selectedProduct.sku} data-brand={selectedProduct?.brand}>
        <div className="product-img-view flex items-center justify-center px-8 py-4 flex-1">
          <div className="img-box w-96 h-96 flex items-center justify-center">
            <img className='w-full h-full object-contain' src={selectedProduct.thumbnail} alt="" />
          </div>

        </div>
        <div className="product-details-view px-8 py-8 flex flex-col items-center flex-grow min-w-[450px]">
          <div className="product-details flex flex-col gap-6 w-full max-w-[400px]">
            <div className="heading flex flex-col gap-2">
              <h1 className='product-name-box text-2xl font-semibold flex items-center gap-4'> <span className='product-name'>{selectedProduct.title}</span> <span className='rating-box text-sm flex items-center'><span className="rating">{selectedProduct.rating}</span> ⭐</span> </h1>
              <div className="category-box flex gap-4 text-xs">
                {
                  selectedProduct && selectedProduct.tags
                  ? (selectedProduct.tags.map((category) => {
                    return <p className="category">{category.toUpperCase()}</p>
                  }))
                  : <p className="category">{selectedProduct.category}</p>
                }
              </div>
            </div>
            <p className='description'>{selectedProduct.description}</p>
            <p className='stock'><span className="quantity">{selectedProduct.stock}</span> items left in stock</p>
            <h2 className="price-box text-xl font-bold"><span className='unit'>$</span><span className="price">{selectedProduct.price}</span></h2>
            {/* button box */}
            <div className="btn-box w-full flex items-center gap-6">
              <div className="wishlist" onClick={(e) => HandleWishlist(e, selectedProduct)}>
                {
                  (isPresentInWishlist(selectedProduct.id))
                    ? <FaHeart size={32} color={'red'} className='cursor-pointer' />
                    : <CiHeart size={32} color={'red'} className='cursor-pointer' />
                }
              </div>
              <div className="addCart flex gap-2 text-white color-white bg-[#FF3E6C] px-4 py-2 rounded-md cursor-pointer"
                onClick={(e) => HandleAddtoCart(e, selectedProduct)}>
                <HiOutlineShoppingBag size={24} />
                <p className="buy">Add to Cart</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="personalization"></div>
      <div id="survey"></div>
    </div>
  )
}

export default SingleProduct