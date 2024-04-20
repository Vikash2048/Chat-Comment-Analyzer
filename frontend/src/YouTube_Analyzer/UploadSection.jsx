import React, { useState, useEffect, useContext } from 'react'
import { YoutubeDataContext } from '../Context/YoutubeDataContext'
import axios from "axios"
import { useAsyncError } from 'react-router-dom';

const Uploader = () => {

    const { setVideoDetail, setSA, setPositiveComment, setNegetiveComment, setNeutralComment, setTopComment } = useContext(YoutubeDataContext);
    const [url, setUrl] = useState([]);
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        const URL = e.target.value;
        setUrl(URL);

    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!url) {
            alert("URL is not Provided!");
            return;
        }

        const formData = new FormData();
        formData.append("url", url);

        setLoading(true);
        try {
            const response = await axios.post("http://localhost:5000/youtubeAnalyzer",
                formData, {
                header: {
                    "Content-Type": "multipart/form-data"
                }
            })

            console.log(response.data[5]);
            setVideoDetail(response.data[0]);
            setSA(response.data[1]);
            setPositiveComment(response.data[2]);
            setNegetiveComment(response.data[3]);
            setNeutralComment(response.data[4]);
            setTopComment(response.data[5]);
        } catch (error) {
            console.log("error while sending url in uploader", error.message);
        } finally {
            setLoading(false);
        }
    }
    return (
        <div className="bg-gray-700 p-8 my-6 rounded-lg shadow-md text-center">
            <div className=''>
                <h2 className=" font-averia text-2xl font-bold mb-4">Enter Youtube Video Link</h2>
                <form onSubmit={handleSubmit} >
                    {/* <input type="text" className='text-black w-[600px]' onChange={handleChange} /> */}
                    <input type="text" placeholder="Enter Url here..." className="font-bree input input-bordered w-full max-w-lg text-black" onChange={handleChange} />
                    <button
                        type="submit"
                        className=" font-bree mt-4 ml-4 bg-green-600 hover:bg-green-700
                     text-white font-bold py-2 px-4 rounded"
                    >
                        Analyze
                    </button>
                </form>
            </div>
            {loading && (<div className='flex items-center text-2xl mt-4 gap-4'> <p>Loading Data... </p> <span className="loading loading-infinity loading-lg"></span> </div>)}
        </div>
    )
}

export default Uploader