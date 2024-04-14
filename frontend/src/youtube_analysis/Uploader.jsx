import React, { useState, useEffect, useContext } from 'react'
import { YoutubeDataContext } from '../Context/YoutubeDataContext'
import axios from "axios"

const Uploader = () => {

    const {setVideoDetail, setSA } = useContext(YoutubeDataContext);
    const [url, setUrl] = useState([]);

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


        try {
            const response = await axios.post("http://localhost:5000/youtubeAnalyzer",
                formData, {
                header: {
                    "Content-Type": "multipart/form-data"
                }
            })

            console.log(response.data);
            setVideoDetail(response.data[0]);
            setSA(response.data[1]);
        } catch (error) {
            console.log("error while sending url in uploader", error.message);
        }
    }
    return (
        <div className="bg-gray-700 p-8 my-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-4">Enter Youtube Video Link</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" className='text-black w-[600px]' onChange={handleChange} />
                <button
                    type="submit"
                    className="mt-4 ml-4 bg-green-600 hover:bg-green-700
                     text-white font-bold py-2 px-4 rounded"
                >
                    Analyze
                </button>
            </form>
        </div>
    )
}

export default Uploader