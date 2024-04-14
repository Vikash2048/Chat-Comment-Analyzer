import React, { useContext } from 'react'
import { YoutubeDataContext } from '../Context/YoutubeDataContext'

import BarChart from './chart/BarChart'
import PieChart from './chart/PieChart'

const Analysis = () => {
    const { videoDetail, sa} = useContext(YoutubeDataContext)
    return (
        <div className="bg-gray-700 p-8 my-6 rounded-lg shadow-md overflow-hidden">
            <h2 className="text-2xl font-bold mb-4">Analysis Details</h2>
            <div className="flex flex-col  gap-4">
                <div className="bg-gray-800 p-4 rounded-lg">
                    <h1 className="text-lg font-semibold">Video Detail</h1>
                    <div className="text-sm flex flex-col px-10">
                        <p>Channel Name : {videoDetail.Channel}</p>
                        <p>Comments     : {videoDetail.Comments}</p>
                        <p>Duration     : {videoDetail.Duration}</p>
                        <p>Language     : {videoDetail.Language}</p>
                        <p>Likes        : {videoDetail.Likes}</p>
                        <p>Resolution   : {videoDetail.Resolution}</p>
                        <p>Title        : {videoDetail.Title}</p>
                        <p>Views        : {videoDetail.Views }</p>
                    </div>
                </div>


                <div className="bg-gray-800 p-4 rounded-lg">
                    <h1 className="text-lg font-semibold">Sentimant Analysis</h1>
                    <div className="text-sm flex flex-col px-10">
                        <p>Netural Comments  : {sa.neutral}</p>
                        <p>Positive Comments : {sa.positive}</p>
                        <p>Negative Comments : {sa.negative}</p>

                    </div>
                </div>

                <div className="bg-gray-800 p-4 rounded-lg">
                    <h1 className="text-lg font-semibold">Sentiment Distribution</h1>
                    <BarChart data={sa}/>
                </div>


                <div className="bg-gray-800 p-4 rounded-lg ">
                    <h1 className="text-lg font-semibold">Sentiment Distribution</h1>
                    <PieChart data={sa} />
                </div>
            </div>
        </div>
    )
}

export default Analysis