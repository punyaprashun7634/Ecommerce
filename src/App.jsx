import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Homepage, Cartpage, Checkout, Profile, WishListPage, ViewProduct, OrderPage, Login, Signup, ForgetPassword } from './pages';
import { ToastContainer } from 'react-toastify';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Homepage />}></Route>
        <Route path='/wishlist' element={<WishListPage />}></Route>
        <Route path='/cart' element={<Cartpage />}></Route>
        <Route path='/checkout' element={<Checkout />}></Route>
        <Route path='/profile' element={<Profile />}></Route>
        <Route path='/product/:id' element={<ViewProduct />}></Route>
        <Route path='/order/:id' element={<OrderPage />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/signup' element={<Signup />}></Route>
        <Route path='/forget-password' element={<ForgetPassword />}></Route>

      </Routes>
      <ToastContainer />
    </BrowserRouter>
  )
}

export default App
