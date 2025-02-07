import React from 'react'
import { CiHeart } from 'react-icons/ci';
import { FaHeart } from 'react-icons/fa';
import { HiOutlineShoppingBag } from 'react-icons/hi2';
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom';
import { addToWishlist, removeFromWishlist } from '../store/wishlistSlice';
import { addToCart } from '../store/cartSlice';

const SingleProduct = () => {
  const dispatch = useDispatch();
  // const Navigate = useNavigate();
  const wishlists = useSelector((state) => state.wishlist);
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
    if (isPresentInWishlist(item.id)) {
      alert("item already present in the wishlist!");
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

  const { id } = useParams();
  const products = useSelector((state) => state.product.product);

  const getSelectedProduct = (id) => {
    for (let i = 0; i < products.length; i++) {
      if (products[i].id == id) return products[i];
    }
  }
  const selectedProduct = getSelectedProduct(id);




  return (
    <div className='single-product min-h-screen w-full px-6 py-8 flex gap-10 flex-wrap' id={selectedProduct.sku}>
      <div className="product-img-view w-full flex items-center justify-center px-8 py-4 md:block md:w-fit">
        <div className="img-box w-96 h-96 flex items-center justify-center">
          <img className='w-full h-full object-contain' src={selectedProduct.thumbnail} alt="" />
        </div>

      </div>
      <div className="product-details-view px-8 py-8 flex flex-col items-center flex-grow min-w-[450px">
        <div className="product-details flex flex-col gap-6 w-full max-w-[400px]">
          <div className="heading">
            <h1 className='product-name-box text-2xl font-semibold flex items-center gap-4'> <span className='product-name'>{selectedProduct.title}</span> <span className='rating text-sm flex items-center'>{selectedProduct.rating} ⭐</span> </h1>
            <p className="category">{selectedProduct.category}</p>
          </div>
          <p className='description'>{selectedProduct.description}</p>
          <p className='stock'><span className="quantity">{selectedProduct.stock} items left in stock</span></p>
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
        <div id="personalization"></div>
      </div>
    </div>
  )
}

export default SingleProduct