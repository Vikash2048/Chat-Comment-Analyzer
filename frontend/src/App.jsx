import { useState } from 'react'
import { DataContext } from "./Context/DataContext"
import { YoutubeDataContext } from "./Context/YoutubeDataContext"
import Fpage from './Pages/Fpage';
import Whatsapp from "./Analyzer's/Whatsapp"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import YoutubeAnalyzer from './youtube_analysis/YoutubeAnalyzer';


function App() {
  //  Whatsapp states 
  const [userlist, setUserList] = useState([]);
  const [stats, setStats] = useState([]);
  const [monthlytimeline, setMonthlyTimeline] = useState([]);
  const [dailytimeline, setDailyTimeline] = useState([]);
  const [mostbusyday, setMostBusyDay] = useState([]);
  const [mostbusymonth, setMostBusyMonth] = useState([]);
  const [mostbusyuser, setMostBusyUser] = useState([]);
  const [listbusyuser, setListBusyUser] = useState([]);
  const [file, setFile] = useState(null)

  // YT states 
  const [videoDetail,setVideoDetail] = useState([]);
  const [sa,setSA] = useState([]);

  return (
    <Router>
      <>
        <YoutubeDataContext.Provider value={{videoDetail, setVideoDetail, sa, setSA}}>
          <DataContext.Provider value={{ userlist, setUserList, stats, setStats, monthlytimeline, setMonthlyTimeline, dailytimeline, setDailyTimeline, mostbusyday, setMostBusyDay, mostbusymonth, setMostBusyMonth, file, setFile, mostbusyuser, setMostBusyUser, listbusyuser, setListBusyUser }}>
            <Routes>
              <Route path='/' exact Component={Fpage} />
              <Route path='/whatsappAnalyzer' Component={Whatsapp} />
              <Route path='/youtubeAnalyzer' Component={YoutubeAnalyzer} />
            </Routes>
          </DataContext.Provider>
        </YoutubeDataContext.Provider>
      </>
    </Router>


  )
}

export default App

