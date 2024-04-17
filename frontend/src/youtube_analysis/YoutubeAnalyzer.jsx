import React from 'react'
import Header from './Header'
import Navbar from './Navbar'
import Uploader from './Uploader'
import Analysis from './Analysis'

const YoutubeAnalyzer = () => {
  return (
    <>
    <div className=" bg-gray-900 text-gray-50 min-h-screen ">
        <Navbar/>
        <Header/>
        <Uploader/>
        <Analysis/>
    </div>
    </>
  )
}

export default YoutubeAnalyzer