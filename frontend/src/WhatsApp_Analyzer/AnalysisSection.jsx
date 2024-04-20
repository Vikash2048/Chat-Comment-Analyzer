import { useState, useEffect, useContext } from "react";
import { DataContext } from "../Context/DataContext";
import CustomLineChart from "../WhatsApp_Analyzer/Charts/CustomLineChart";
import CustomDailyChart from "../WhatsApp_Analyzer/Charts/CostumDailyChart";
import BusyDayChart from "../WhatsApp_Analyzer/Charts/BusyDayChart";
import BusyMonthChart from "../WhatsApp_Analyzer/Charts/BusyMonthChart";
import BusyUserChart from "../WhatsApp_Analyzer/Charts/BusyUserChat";
import axios from "axios"
import UserDataTable from "../WhatsApp_Analyzer/Charts/UserDataTable";


const AnalysisSection = () => {
  const { userlist, stats, monthlytimeline, dailytimeline, mostbusyday, mostbusymonth, file, setStats, setMonthlyTimeline, setDailyTimeline, setMostBusyDay, setMostBusyMonth, mostbusyuser, listbusyuser } = useContext(DataContext);
  const [selectedUser, setSelectedUser] = useState('');

  // console.log("analyse",mostbusyuser)
  const handleUserChange = (event) => {
    setSelectedUser(event.target.value);

  };


  useEffect(() => {
    // Call function to fetch analysis results whenever selected user changes
    if (selectedUser) {
      fetchAnalysisResults(selectedUser);
    }

  }, [selectedUser]);

  // sending selected user to the backend 
  const fetchAnalysisResults = async (user) => {

    const formData = new FormData();
    formData.append("user", user);
    formData.append("file", file)

    try {
      const response = await axios.post("http://localhost:5000/user", formData, {
        header: {
          "Content-Type": "multipart/form-data"
        },
      })
      setStats(response.data[0]);
      setMonthlyTimeline(response.data[1])
      setDailyTimeline(response.data[2])
      setMostBusyDay(response.data[3])
      setMostBusyMonth(response.data[4])
    } catch (error) {
      console.log("error while user select", error.msg);
    }

  };

  return (
    <>
      {stats[0] && (
        <div className="bg-gray-700 p-8 my-6 rounded-lg shadow-md overflow-hidden">
          <h2 className="font-averia text-2xl font-bold mb-4">Analysis Results</h2>
          <div className="flex flex-col  gap-4">

            {/* stats  */}
            {
              stats[0] && (
                <div className="bg-gray-800 p-4 rounded-lg">
                  <h1 className="font-averia text-lg font-semibold">Top Statistics</h1>
                  <div className="font-bree text-sm flex  justify-between text-center px-10">
                    <div >
                      <h3>Total Messages </h3>
                      <p>{stats[0]}</p>
                    </div>
                    <div>
                      <h3>Total Words</h3>
                      <p>{stats[1]}</p>
                    </div>
                    <div>
                      <h3>Media Shared </h3>
                      <p>{stats[2]}</p>
                    </div>
                    <div>
                      <h3>Links Shared </h3>
                      <p>{stats[3]}</p>
                    </div>
                  </div>
                </div>
              )
            }

            {
              stats[0] && (
                <div className="bg-gray-800 p-4 rounded-lg">
                  <label htmlFor="userSelect" className="font-averia block text-lg font-semibold mb-2">Select a User:</label>
                  <select id="userSelect" value={selectedUser} onChange={handleUserChange} className="font-bree block w-full bg-gray-900 border border-gray-700 text-white py-3 px-4 rounded">
                    <option value="">Select User</option>
                    {userlist.map((user, index) => (
                      <option key={index} value={user}>
                        {user}
                      </option>
                    ))}
                  </select>
                </div>
              )
            }

          </div>

          {selectedUser && (
            <div className="bg-gray-800 p-4 rounded-lg mt-4">
              <span className="font-averia text-lg font-semibold">Selected User:</span>
              <div className="font-bree text-xl">{selectedUser}</div>
            </div>
          )}

          {/* monthly timeline graph  */}

          {
            monthlytimeline && (
              <div className="bg-gray-800 p-4 rounded-lg mt-4 text-center flex flex-col relative">
                <h1 className="font-averia mb-5">Monthly Timeline</h1>
                <div className="font-bree m-auto border-2 border-red-400 ">
                  <CustomLineChart data={monthlytimeline} />
                </div>
              </div>
            )
          }


          {/* daily timeline graph  */}

          {
            dailytimeline && (
              <div className="bg-gray-800 p-4 rounded-lg mt-4 text-center flex flex-col">
                <h1 className="font-averia mb-5">Daily Timeline</h1>
                <div className="font-bree m-auto border-2 border-red-400">
                  <CustomDailyChart data={dailytimeline} />
                </div>
              </div>
            )
          }


          {/* most busy day  */}
          <div className="bg-gray-800 p-4 rounded-lg mt-4 text-center flex flex-col">
            <h1 className="font-averia mb-5">Most Busy Day</h1>
            <div className="font-bree m-auto">
              <BusyDayChart data={mostbusyday} />
            </div>
          </div>


          {/* most busy month  */}
          <div className="bg-gray-800 p-4 rounded-lg mt-4 text-center flex flex-col">
            <h1 className="font-averia mb-5">Most Busy Month</h1>
            <div className="font-bree m-auto">
              <BusyMonthChart data={mostbusymonth} />
            </div>
          </div>

          {/* busy user  */}
          {
            (!selectedUser || selectedUser === "Overall") && (
              <div className="bg-gray-800 p-4 rounded-lg mt-4 text-center flex flex-col">
                <h1 className="font-averia mb-5">Most Busy User</h1>
                <div className="font-bree m-auto">
                  <BusyUserChart data={mostbusyuser} />
                </div>
              </div>
            )
          }

          {
            (!selectedUser || selectedUser === "Overall") && (<div className="bg-gray-800 p-4 rounded-lg mt-4 text-center flex flex-col">
              <div className="font-bree text-center mx-auto">
                <UserDataTable data={listbusyuser} />
              </div>
            </div>)
          }


        </div>
      )}

    </>
  );
};

export default AnalysisSection;
