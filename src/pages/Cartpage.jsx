import React, { useEffect, useState } from 'react'
import { Footer, Navbar } from '../components'
import { useSelector, useDispatch } from 'react-redux'
import { removeFromCart } from '../store/cartSlice'
import { addToWishlist } from '../store/wishlistSlice'
import { useNavigate } from 'react-router-dom'
import { addToCheckout } from '../store/checkoutSlice'

const Cartpage = () => {
  const cartStorage = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const [totalSum, setTotalSum] = useState(0);
  const [deliveryCharges, setDeliveryCharges] = useState(5);
  const [convenientFee, setConvenientFee] = useState(2);
  const Navigate = useNavigate();
  
  useEffect(()=>{
    console.log(cartStorage)
  },[cartStorage])

  useEffect(()=>{
    let sum = 0;
    for(let i = 0; i<cartStorage.length; i++){
      sum+=cartStorage[i].price;
    }
    setTotalSum(sum);
  },[cartStorage])

  const HandleMoveToWishlist = (item)=>{
    dispatch(addToWishlist(item));
    dispatch(removeFromCart(item));
  }
  const HandleRemoveFromCart = (item)=>{
    dispatch(removeFromCart(item));
  }

  const HandleBuyNow = ()=>{
    dispatch(addToCheckout({items : cartStorage, deliveryCharges : deliveryCharges, convenientFee : convenientFee, totalSum : totalSum}));
    Navigate('/checkout');
  }

  return (
    <div className='w-full cartpage'>
      <Navbar />
      {
        cartStorage && cartStorage.length ?
        <div className="w-full min-h-[73vh] cartView px-6 py-8 flex gap-6 items-center flex-col md:flex-row md:items-start">
          <div className="itemView w-full md:w-[49%] max-w-[580px] flex flex-col gap-4">
            {
              cartStorage.map((cartItem) => {
                return <div className="item px-6 bg-white rounded-md shadow-md md:shadow-lg xl:shadow-xl py-4 flex flex-col gap-4" key={cartItem.id} id={cartItem.id}>
                  <div className="item-details flex gap-3 md:gap-8 justify-between flex-col md:flex-row md:justify-start items-center">
                    <div className="item-image object-contain w-40 md:32 aspect-[1/1.2] overflow-hidden flex justify-center items-center">
                      <img src={cartItem.thumbnail} alt="" className='object-cover' />
                    </div>
                    <div className="details flex flex-col gap-3">
                      <div className="item-title flex w-full text-lg font-medium gap-8 items-center">
                        <p className="rating">{cartItem.rating}⭐</p>
                        <p className="text">{cartItem.title}</p>
                      </div>
                      <div className="item-title w-full">
                        <p className="text">{cartItem.description}</p>
                      </div>
                      <div className="price-box flex justify-betweem items-center gap-5">
                        <div className="item-price font-semibold text-2xl">
                          <p className="text">${cartItem.price}</p>
                        </div>
                        <div className="item-discount text-sm">
                          <p className="text">{cartItem.discountPercentage}% discount</p>
                        </div>
                      </div>
                      <div className="buttons w-full flex justify-between flex-wrap gap-4">
                        <button className='shadow-md bg-black text-white px-4 py-2 rounded-md cursor-pointer'
                        onClick={()=>HandleMoveToWishlist(cartItem)}
                        >Move to Wishlist</button>
                        <button className='shadow-md bg-red-400 text-white px-4 py-2 rounded-md cursor-pointer'
                        onClick={()=>HandleRemoveFromCart(cartItem)}
                        >Remove from Cart</button>
                      </div>
                    </div>
                  </div>
                </div>
              })
            }
          </div>
          <div className="item-details w-full md:w-fit md:flex-auto flex flex-col shadow-md px-6 py-4 justify-between rounded-lg gap-3">
            <div className="heading w-full flex justify-between text-lg font-semibold">
              <p className="heading-text">Items</p>
              <p className="heading-text">Amount</p>
            </div>
            <div className="line w-full h-[1px] bg-[rgba(0,0,0,0.1)]"></div>
            <div className="items-prices-box w-full flex flex-col gap-2">
              {
                cartStorage.map((item)=>{
                  return <div className="item-price w-full flex justify-between font-normal text-base" key={item.id}>
                    <p className="item-title w-[75%] overflow-ellipsis">{item.title}</p>
                    <p className="item-price font-medium">${item.price}</p>
                  </div>
                })
              }
            </div>
            <div className="total-amount w-full flex justify-between">
              <p className="label text-lg font-medium">Total Sum</p>
              <p className="amount text-lg font-semibold">${totalSum}</p>
            </div>
            <div className="line w-full h-[1px] bg-[rgba(0,0,0,0.1)]"></div>
            <div className="total-amount-box">
              <div className="deliveryCharges w-full flex justify-between">
                <p className="label">Delivery Charges</p>
                <p className="amount">${deliveryCharges}</p>
              </div>
              <div className="convenient-fee w-full flex justify-between">
                <p className="label ">Convenient Fee</p>
                <p className="amount">${convenientFee}</p>
              </div>
            </div>
            <div className="grand-total w-full flex justify-between">
              <p className="label text-xl font-bold text-yellow-600">Grand Total</p>
              <p className="amount font-semibold text-xl">${totalSum+deliveryCharges+convenientFee}</p>
            </div>
            <div className="buy-now w-full flex items-center justify-center">
              <button className='bg-emerald-500 w-[50%] py-4 rounded-lg text-white text-xl'
              onClick={()=>HandleBuyNow()}
              >Buy Now</button>
            </div>
          </div>
        </div>
        : <div className="no-cart h-screen w-full text-center">
            <p className="text mt-8 text-2xl font-medium">No product added to the cart.</p>
        </div>
      }
      <Footer />
    </div>
  )
}

export default Cartpage
