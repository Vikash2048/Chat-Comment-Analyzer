import React, { useContext } from 'react'
import { YoutubeDataContext } from '../Context/YoutubeDataContext'

import BarChart from './Charts/BarChart'
import PieChart from './Charts/PieChart'

const Analysis = () => {
    const { videoDetail, sa, positiveComment, negetiveComment, neutralComment, topComment } = useContext(YoutubeDataContext)
    console.log(videoDetail)
    return (
        <>
            {
                sa.neutral && (
                    <div className="bg-gray-700 p-8 my-6 rounded-lg shadow-md overflow-hidden">
                        <h2 className="font-averia text-2xl font-bold mb-4">Analysis Details</h2>
                        <div className="flex flex-col  gap-4">
                            <div className="bg-gray-800 p-2 rounded-lg relative">
                                <h1 className="font-averia text-2xl font-semibold mb-4">Video Detail</h1>
                                <div className="font-bree overflow-x-auto border w-inherit ">
                                    <table className="table ">
                                        {/* head */}
                                        <tbody>
                                            {/* row 1 */}
                                            <tr>
                                                <td>Title : </td>
                                                <td>{videoDetail.Title}</td>
                                            </tr>
                                            <tr>
                                                <td>Channel Name : </td>
                                                <td>{videoDetail.Channel}</td>
                                            </tr>
                                            <tr>
                                                <td  className='pr-1'>Comments : </td>
                                                <td>{videoDetail.Comments}</td>
                                            </tr>
                                            <tr>
                                                <td>Duration : </td>
                                                <td>{videoDetail.Duration}</td>
                                            </tr>
                                            <tr>
                                                <td>Likes : </td>
                                                <td>{videoDetail.Likes}</td>
                                            </tr>
                                            <tr>
                                                <td  className='pr-1'>Resolution : </td>
                                                <td>{videoDetail.Resolution}</td>
                                            </tr>
                                            
                                            <tr>
                                                <td>Views : </td>
                                                <td>{videoDetail.Views}</td>
                                            </tr>

                                        </tbody>
                                    </table>
                                </div>
                            </div>

                            {/* table  */}



                            <div className="bg-gray-800 p-4 rounded-lg">
                                <h1 className="font-averia text-2xl font-semibold mb-4">Sentimant Analysis</h1>
                                <div className="font-bree text-md flex md:flex-row flex-col justify-between px-10" >
                                    <p>Netural Comments  : {sa.neutral}</p>
                                    <p>Positive Comments : {sa.positive}</p>
                                    <p>Negative Comments : {sa.negative}</p>

                                </div>
                            </div>

                            <div className="bg-gray-800 p-4 rounded-lg flex flex-col justify-center items-center">
                                <h1 className="font-averia text-2xl font-semibold mb-4">Sentiment Distribution</h1>
                                <BarChart data={sa} />
                            </div>


                            <div className="bg-gray-800 p-4 rounded-lg flex flex-col items-center">
                                <h1 className="font-averia text-2xl font-semibold mb-4">Pie Chart For Sentiment Distribution</h1>
                                <PieChart data={sa} />
                            </div>

                            {/* most like comment  */}
                            <div className="bg-gray-800 p-4 rounded-lg ">
                                <h1 className="font-averia text-2xl font-semibold mb-4">Most liked Comment</h1>
                                {
                                    topComment.map((data, id) => (
                                        <div key={id} className="font-bree collapse collapse-arrow bg-gray-600 mb-4">
                                            <input type="radio" name="my-accordion-2" defaultChecked />
                                            <div className="collapse-title text-xl font-medium">
                                                <h1>Comment by {data.author} on {data.published_at} - Likes {data.like_count} </h1>
                                            </div>
                                            <div className="collapse-content">
                                                <p>{data.text_without_stopwords}</p>
                                            </div>
                                        </div>
                                    ))
                                }
                            </div>




                            {/* top 10 positive comments  */}
                            <div className="bg-gray-800 p-4 rounded-lg ">
                                <h1 className="font-averia text-2xl font-semibold mb-4">Top 10 Positive Comments</h1>
                                {
                                    positiveComment.map((data, id) => (
                                        <div key={id} className="font-bree collapse collapse-arrow bg-gray-600 mb-4">
                                            <input type="radio" name="my-accordion-2" defaultChecked />
                                            <div className="collapse-title text-xl font-medium">
                                                <h1>Comment by {data.author} on {data.published_at} - Likes {data.like_count} </h1>
                                            </div>
                                            <div className="collapse-content">
                                                <p>{data.text_without_stopwords}</p>
                                            </div>
                                        </div>
                                    ))
                                }
                            </div>


                            {/* top 10 negative comments  */}

                            <div className="bg-gray-800 p-4 rounded-lg ">
                                <h1 className="font-averia text-2xl font-semibold mb-4">Top 10 negative Comments</h1>
                                {
                                    negetiveComment.map((data, id) => (
                                        <div key={id} className="font-bree collapse collapse-arrow bg-gray-600 mb-4">
                                            <input type="radio" name="my-accordion-2" defaultChecked />
                                            <div className="collapse-title text-xl font-medium">
                                                <h1>Comment by {data.author} on {data.published_at} - Likes {data.like_count} </h1>
                                            </div>
                                            <div className="collapse-content">
                                                <p>{data.text_without_stopwords}</p>
                                            </div>
                                        </div>
                                    ))
                                }
                            </div>



                            {/* top 10 neutral comments  */}
                            <div className="bg-gray-800 p-4 rounded-lg ">
                                <h1 className="font-averia text-2xl font-semibold mb-4">Top 10 neutral Comments</h1>
                                {
                                    neutralComment.map((data, id) => (
                                        <div key={id} className="font-bree collapse collapse-arrow bg-gray-600 mb-4">
                                            <input type="radio" name="my-accordion-2" defaultChecked />
                                            <div className="collapse-title text-xl font-medium">
                                                <h1>Comment by {data.author} on {data.published_at} - Likes {data.like_count} </h1>
                                            </div>
                                            <div className="collapse-content">
                                                <p>{data.text_without_stopwords}</p>
                                            </div>
                                        </div>
                                    ))
                                }
                            </div>


                        </div>

                    </div>
                )
            }


        </>
    )
}

export default Analysis