import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Homepage, Cartpage, Checkout, Profile, WishListPage, ViewProduct } from './pages';

const App = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Homepage/>}></Route>
            <Route path='/wishlist' element={<WishListPage/>}></Route>
            <Route path='/cart' element={<Cartpage/>}></Route>
            <Route path='/checkout' element={<Checkout/>}></Route>
            <Route path='/profile' element={<Profile/>}></Route>
            <Route path='/product/:id' element={<ViewProduct />}></Route>
        </Routes>
    </BrowserRouter>
  )
}

export default App
