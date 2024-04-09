import { useState } from 'react'
import Header from './Components/Header'
import Navbar from './Components/Navbar'
import AnalysisSection from './Components/AnalysisSection'
import UploadSection from './Components/UploadSection'
import { DataContext } from "./Context/DataContext"

function App() {

  const [userlist, setUserList] = useState([]);
  const [stats, setStats] = useState([]);
  const [monthlytimeline, setMonthlyTimeline] = useState([]);
  const [dailytimeline, setDailyTimeline] = useState([]);
  const [mostbusyday, setMostBusyDay] = useState([]);
  const [mostbusymonth, setMostBusyMonth] = useState([]);
  const [mostbusyuser, setMostBusyUser] = useState([]);
  const [listbusyuser,setListBusyUser] = useState([]);
  const [file,setFile] = useState(null)

  return (

    <div className=" bg-gray-900 text-gray-50 min-h-screen">
      <DataContext.Provider value={{ userlist, setUserList, stats, setStats, monthlytimeline, setMonthlyTimeline, dailytimeline, setDailyTimeline,mostbusyday, setMostBusyDay,mostbusymonth, setMostBusyMonth, file,setFile, mostbusyuser, setMostBusyUser, listbusyuser, setListBusyUser  }}>
        <Navbar />
        <div className="container mx-auto px-4">
          <Header />
          <UploadSection />
          {/* You would pass the actual analysisData to the AnalysisSection as props */}
          <AnalysisSection analysisData={null} />

        </div>
      </DataContext.Provider>
    </div>

  )
}

export default App
