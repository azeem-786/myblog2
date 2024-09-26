import React from 'react'
import Header from '../Components/Header'
import Search from '../Components/Search'
import Intropost from '../Components/Intropost'
import card from '../Components/card'
import Blogs from '../Components/Blogs'
import Footer from '../Components/Footer'

function Home() {
  return (
    <div>
        {/* Header */}
        <Header/>
        {/* Search */}
        <Search/>
        {/* Intropost */}
        <Intropost/>
        {/* Card */}
        <card/>
        {/* Blogs */}
        <Blogs/>
        {/* Footer */}
        <Footer/>
    </div>
  )
}

export default Home