import React, { useState } from 'react'
import { RxCube, RxHamburgerMenu, RxCross1 } from "react-icons/rx";
import { CiHeart } from "react-icons/ci";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { RiUserSettingsLine } from "react-icons/ri";
import { Link } from 'react-router-dom';
const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const HandleMenu = () =>{
    setShowMenu(true);
  }
  const HandleCloseMenu = ()=>{
    setShowMenu(false);
  }
  return (
    <div className='navbar w-full sticky z-20 bg-white top-0 left-0 h-20 shadow-md flex items-center justify-between px-8'>
        <Link to='/'>
          <div className="logo flex gap-4">
              <RxCube size={50}/>
              <p className="company-text flex items-center text-xl font-semibold"><span className='text-red-500'>Cart</span>-On</p>
          </div>
        </Link>
        <div className="hamburger md:hidden">
          <RxHamburgerMenu size={32} onClick={HandleMenu}/>
        </div>
        <div className="button-box hidden items-center gap-10 text-xs font-bold md:flex">
          <Link to='/profile'>
            <div className="btn flex flex-col items-center cursor-pointer">
              <RiUserSettingsLine size={20}/>
              <p className="text">Profile</p>
            </div>
          </Link>
          <Link to='/wishlist'>
            <div className="btn flex flex-col items-center cursor-pointer">
              <CiHeart size={20}/>
              <p className="text">Wishlist</p>
            </div>
          </Link>
          <Link to='/cart'>
            <div className="btn flex flex-col items-center cursor-pointer">
              <HiOutlineShoppingBag size={20}/>
              <p className="text">Bag</p>
            </div>
          </Link>
          <Link to='/login'>
            <button className="bg-red-500 px-4 py-2 rounded-md text-white">
              Login
            </button>
          </Link>
        </div>
        <div className={`link-menu absolute flex-col gap-4 items-end px-12 py-8 z-10 top-0 left-0 w-full bg-white `+(showMenu ? 'flex' : 'hidden')}>
          <RxCross1 size={20} onClick={HandleCloseMenu}/>
          <Link to='/' className='flex w-full items-center justify-center gap-2 py-5 border-b-2'>
              <p className="text text-xl font-semibold">Home</p>
          </Link>
          <Link to='/' className='flex w-full items-center justify-center gap-2 py-5 border-b-2'>
              <p className="text text-xl font-semibold">Profile</p>
          </Link>
          <Link to='/wishlist' className='flex w-full items-center justify-center gap-2 py-5 border-b-2'>
              <p className="text text-xl font-semibold">Wishlist</p>
          </Link>
          <Link to='/cart' className='flex w-full items-center justify-center gap-2 py-5'>
              <p className="text text-xl font-semibold">Cart</p>
          </Link>
        </div>
    </div>
  )
}

export default Navbar
