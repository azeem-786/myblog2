import React from 'react'
import Header from '../Components/Header'
import Search from '../Components/Search'
import Intropost from '../Components/Intropost'
import Blogs from '../Components/Blogs'
import Footer from '../Components/Footer'
import Post from '../Components/Post'
import SixPosts from '../Components/SixPosts'
import WhatsAppChatButton from '../Components/WhatsAppChatButton'
import LiveChat from '../Components/LiveChat'


function Home() {
  return (
    <div>
        {/* Header */}
        <Header/>
        {/* Search */}
        <Search/>
        {/* Intropost */}
        <Intropost/>
        
        {/* Blogs */}
        <Blogs/>
        {/* Post */}
        <Post/>
        {/* SixPosts */}
        <SixPosts/>
        {/* LiveChat */}
        <LiveChat/>
        {/* WhatsAppChatButton */}
        <WhatsAppChatButton/>
        {/* Footer */}
        <Footer/>
    </div>
  )
}

export default Home