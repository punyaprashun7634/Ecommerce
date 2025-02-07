import React from 'react'
import { Footer, Navbar, Store } from '../components'

const Homepage = () => {
  return (
    <div className="hompage w-full flex flex-col">
        <Navbar />
        <Store/>
        <Footer />
    </div>
  )
}

export default Homepage
