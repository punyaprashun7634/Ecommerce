import React from 'react'
import { Navbar, Footer } from '../components'
import { useSelector, useDispatch } from 'react-redux';
import { addToWishlist, removeFromWishlist } from '../store/wishlistSlice';
import { addToCart, removeFromCart } from '../store/cartSlice';
import { CiHeart } from "react-icons/ci";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { FaHeart } from "react-icons/fa";
const WishListPage = () => {
    const dispatch = useDispatch();
    const wishlists = useSelector((state) => state.wishlist);
    const HandleWishlist = (item) => {
        dispatch(removeFromWishlist(item));
    }

    const HandleAddtoCart = (item) => {
        dispatch(removeFromWishlist(item));
        dispatch(addToCart(item));
    }
    return (
        <div className='wishlist-page'>
            <Navbar />
            {
                wishlists && wishlists.length
                    ? (<div className='store w-full px-6 py-8 grid  lg:grid-cols-3 xl:grid-cols-4 sm:grid-cols-2 gap-y-10 gap-x-3 '>
                        {
                            wishlists.map((itemData) => {
                                return <div className="data-container flex flex-col justify-center items-center px-4 py-4 w-80 sm:w-72 gap-2 border shadow-md rounded-lg border-none justify-self-center max-h-96" key={itemData.id}>
                                    <div className="img-box object-contain w-[90%] aspect-[1/1.2] overflow-hidden flex justify-center">
                                        <img src={itemData.thumbnail} alt="" className='object-cover' />
                                    </div>
                                    <p className="title text-sm text-center font-medium">{itemData.title}</p>
                                    <p className="price text-lg text-center font-semibold">${itemData.price}</p>
                                    <div className="btn-box w-full flex justify-center items-center gap-6">
                                        <div className="wishlist" onClick={() => HandleWishlist(itemData)}>
                                            {
                                                <FaHeart size={32} color={'red'} className='cursor-pointer' />
                                            }
                                        </div>
                                        <div className="addCart flex gap-2 text-white color-white bg-[#FF3E6C] px-4 py-2 rounded-md cursor-pointer"
                                            onClick={() => HandleAddtoCart(itemData)}>
                                            <HiOutlineShoppingBag size={24} />
                                            <p className="buy">Add to Cart</p>
                                        </div>
                                    </div>
                                </div>
                            })
                        }
                    </div>)
                    : <div className='h-screen w-full items-center mt-8 text-center text-3xl justify-center'>
                        Nothing to display here!
                    </div>
            }
            <Footer />
        </div>
    )
}

export default WishListPage
