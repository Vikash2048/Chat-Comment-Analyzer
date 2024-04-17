import React from 'react'
import Navbar from './Navbar'
import Header from './Header'
import UploadSection from './UploadSection'
import AnalysisSection from './AnalysisSection'

const Whatsapp = () => {
    return (

        <div className=" bg-gray-900 text-gray-50 min-h-screen">
            <Navbar />
            <div className="container mx-auto px-4">
                <Header />
                <UploadSection />
                <AnalysisSection />
            </div>

        </div>

    )
}

export default Whatsapp;


// {/* <Navbar />
// <div className="container mx-auto px-4">
// <Header />
// <UploadSection />
// /* You would pass the actual analysisData to the AnalysisSection as props */}
// <AnalysisSection analysisData={null} />

// </div> */}