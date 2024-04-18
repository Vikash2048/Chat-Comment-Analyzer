import React, { useContext } from 'react'
import { YoutubeDataContext } from '../Context/YoutubeDataContext'

import BarChart from './Charts/BarChart'
import PieChart from './Charts/PieChart'

const Analysis = () => {
    const { videoDetail, sa, positiveComment, negetiveComment, neutralComment, topComment } = useContext(YoutubeDataContext)
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
                        <p>Views        : {videoDetail.Views}</p>
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
                    <BarChart data={sa} />
                </div>


                <div className="bg-gray-800 p-4 rounded-lg ">
                    <h1 className="text-lg font-semibold">Pie Chart For Sentiment Distribution</h1>
                    <PieChart data={sa} />
                </div>

                {/* most like comment  */}
                <div className="bg-gray-800 p-4 rounded-lg ">
                    <h1 className="text-lg font-semibold">Most liked Comment</h1>
                    {
                        topComment.map((data, id) => (
                            <div key={id} className='border-2'>
                                <h1>Comment by {data.author} on {data.published_at} - Likes {data.like_count} </h1>
                                <p>{data.text_without_stopwords}</p>
                            </div>
                        ))
                    }
                </div>

                {/* top 10 positive comments  */}
                <div className="bg-gray-800 p-4 rounded-lg ">
                    <h1 className="text-lg font-semibold">Top 10 Positive Comments</h1>
                    {
                        positiveComment.map((data, id) => (
                            <div key={id} className='border-2'>
                                <h1>Comment by {data.author} on {data.published_at} - Likes {data.like_count} </h1>
                                <p>{data.text_without_stopwords}</p>
                            </div>
                        ))
                    }
                </div>

                {/* top 10 negative comments  */}

                <div className="bg-gray-800 p-4 rounded-lg ">
                    <h1 className="text-lg font-semibold">Top 10 negative Comments</h1>
                    {
                        negetiveComment.map((data, id) => (
                            <div key={id} className='border-2'>
                                <h1>Comment by {data.author} on {data.published_at} - Likes {data.like_count} </h1>
                                <p>{data.text_without_stopwords}</p>
                            </div>
                        ))
                    }
                </div>

                {/* top 10 neutral comments  */}
                <div className="bg-gray-800 p-4 rounded-lg ">
                    <h1 className="text-lg font-semibold">Top 10 neutral Comments</h1>
                    {
                        neutralComment.map((data, id) => (
                            <div key={id} className='border-2'>
                                <h1>Comment by {data.author} on {data.published_at} - Likes {data.like_count} </h1>
                                <p>{data.text_without_stopwords}</p>
                            </div>
                        ))
                    }
                </div>
            </div>

        </div>
    )
}

export default Analysis