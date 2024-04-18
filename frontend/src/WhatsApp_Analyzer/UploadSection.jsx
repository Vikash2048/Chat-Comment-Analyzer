import { useEffect, useContext, useState } from "react";
import { DataContext } from "../Context/DataContext";
import axios from "axios";

const UploadSection = () => {

  // #using context api 
  const { setUserList, setStats, setMonthlyTimeline, setDailyTimeline, setMostBusyDay,setMostBusyMonth,file,setFile, setMostBusyUser,setListBusyUser} = useContext(DataContext);
  const [loading, setLoading] = useState(false);


  // # taking file 
  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  // handle analysis button 
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!file) {
      alert("File is not selected!");
      return;
    }

    // sending file in appropiate formate 
    const formData = new FormData();
    formData.append("file", file);

    setLoading(true);
    try {
      const response = await axios.post("http://localhost:5000/analyze", formData, {
        headers: {
          "Content-Type": "multipart/form-data"
        }
      });
      // console.log(response.data[6].percentages)
      setUserList(response.data[1]);
      setStats(response.data[0])
      setMonthlyTimeline(response.data[2])
      setDailyTimeline(response.data[3])
      setMostBusyDay(response.data[4])
      setMostBusyMonth(response.data[5])
      setMostBusyUser(response.data[6].top_users)
      setListBusyUser(response.data[6].percentages)
      
    } catch (error) {
      console.error("Error uploading file:", error.message);
      if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        console.error("Server responded with status code:", error.response.status);
        console.error("Response data:", error.response.data);
      } else if (error.request) {
        // The request was made but no response was received
        console.error("No response received:", error.request);
      } else {
        // Something else happened while setting up the request
        console.error("Error setting up request:", error.message);
      }
      alert("Error in file uploading. See console for details.");
    } finally {
      setLoading(false);
    }

  };

  useEffect(() => {
    if (file) {
      const faceEvent = { preventDefault: () => { } };
      handleSubmit(faceEvent);// Call handleSubmit when file changes
    }
  }, [file]);

  return (
    <div className="text-center bg-gray-700 p-8 my-6 rounded-lg shadow-md">
      <h2 className="font-averia text-2xl font-bold mb-4">Upload WhatsApp Chat File</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="file"
          onChange={handleFileChange}
          className="font-bree text-sm text-gray-50
                     py-2 px-3 rounded-lg border border-gray-200
                     file:bg-gray-800 file:border-none
                     file:px-4 file:py-2 file:rounded file:text-sm
                     file:text-gray-50
                     hover:file:bg-gray-700"
        />
        <button
          type="submit"
          className="font-bree mt-4 ml-4 bg-green-600 hover:bg-green-700
                     text-white py-2 px-4 rounded"
        >
          Analyze
        </button>
      </form>
      {loading && (<div className='flex items-center text-2xl mt-4 gap-4'> <p>Loading Data... </p> <span className="loading loading-infinity loading-lg"></span> </div>)}
    </div>
  );
};

export default UploadSection;
