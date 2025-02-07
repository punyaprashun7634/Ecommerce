import React, { useState } from 'react'
import { Navbar, Footer } from '../components'
import { useDispatch, useSelector } from 'react-redux'
const Checkout = () => {
  const checkoutStore = useSelector((state)=>state.checkout);
  console.log(checkoutStore);
  const [orderDetail, setOrderDetails] = useState({
    items : [],
    address : {},
    paymentMethod : "",
    amountpaid : 0
  });
  return (
    <div className='checkout w-full flex flex-col'>
      <Navbar />
      <div className="heading py-4">
        <p className="heading-text text-center text-xl font-semibold">Checkout</p>
      </div>
      <div className="checkout-view w-full min-h-[73vh] px-8 md:px-14 mb-6">
        <form action="" className='flex flex-col px-4 gap-6 py-4 w-full md:flex-row md:justify-between'>
          <div className="delivery-address-box md:w-[55%] max-w-[520px] flex gap-5 flex-col w-full">
            <p className="heading-text font-medium">
              Delivery Address
            </p>
            <div className="input-box w-full">
              <input type="text" placeholder='Street No. / Flat No.' name="streetNo" id="" className='w-full px-4 py-3 rounded-md outline-none border' />
            </div>
            <div className="input-box w-full">
              <input type="text" placeholder='Area / Location' name="area" id="" className='w-full px-4 py-3 rounded-md outline-none border' />
            </div>
            <div className="input-box w-full">
              <input type="text" placeholder='City' name="city" id="" className='w-full px-4 py-3 rounded-md outline-none border' />
            </div>
            <div className="input-box w-full">
              <input type="text" placeholder='State' name="state" id="" className='w-full px-4 py-3 rounded-md outline-none border' />
            </div>
            <div className="input-box w-full">
              <input type="text" placeholder='Pincode' name="pincode" id="" className='w-full px-4 py-3 rounded-md outline-none border' />
            </div>
          </div>
          <div className="payment-method-box flex gap-2 flex-col w-full md:w-[55%] max-w-[600px]">
            <p className="heading-text font-medium">
              Payment Method
            </p>
            <div className="input-box w-full flex items-center gap-4">
              <input type="radio" name="paymentMethod" id="cod" value="cod"/>
              <label htmlFor="cod" className='text-md lg:text-lg'>Cash On Delivery</label>
            </div>
            <div className="input-box w-full flex items-center gap-4">
              <input type="radio" name="paymentMethod" id="netBanking" value="netBanking"/>
              <label htmlFor="netBanking" className='text-md lg:text-lg'>Net banking</label>
            </div>
            <div className="input-box w-full flex items-center gap-4">
              <input type="radio" name="paymentMethod" id="credit" value="creditCard"/>
              <label htmlFor="credit" className='text-md lg:text-lg'>Credit Card</label>
            </div>
            <div className="input-box w-full flex items-center gap-4">
              <input type="radio" name="paymentMethod" id="debit" value="debitCard"/>
              <label htmlFor="debit" className='text-md lg:text-lg'>Debit Card</label>
            </div>
            <div className="items-details w-full py-4 flex flex-col gap-4">
                <div className="heading-box w-full flex justify-between">
                  <p className="heading-text text-xl font-semibold">Items</p>
                  <p className="heading-text text-xl font-semibold">Amount</p>
                </div>
                <div className="product-details flex justify-between">
                  <p className="product">Product x <span className='quantity'>{checkoutStore[0].items.length}</span></p>
                  <p className="amount">${checkoutStore[0].totalSum}</p>
                </div>
                <div className="product-details flex justify-between">
                  <p className="product">Delivery Charges</p>
                  <p className="amount">${checkoutStore[0].deliveryCharges}</p>
                </div>
                <div className="product-details flex justify-between">
                  <p className="product">Convenient Fee</p>
                  <p className="amount">${checkoutStore[0].convenientFee}</p>
                </div>
                <div className="product-details flex justify-between">
                  <p className="product">Grand Total</p>
                  <p className="amount">${checkoutStore[0].totalSum+checkoutStore[0].deliveryCharges+checkoutStore[0].convenientFee}</p>
                </div>
                <button className='pay-now px-6 py-4 bg-[#EF4444] rounded-md border-none text-white text-2xl font-semibold mt-4'>Pay Now</button>
            </div>
          </div>
        </form>
      </div>
      <Footer />
    </div>
  )
}

export default Checkout
