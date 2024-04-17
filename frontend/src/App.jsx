import { useState } from 'react'
import { DataContext } from "./Context/DataContext"
import { YoutubeDataContext } from "./Context/YoutubeDataContext"
import Fpage from './Pages/Fpage';
import Whatsapp from "./Analyzer's/Whatsapp"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
<<<<<<< HEAD
import Guide from './Components/Guide';
=======
import YoutubeAnalyzer from './youtube_analysis/YoutubeAnalyzer';
>>>>>>> 2193ae825c211012e5236dec0018d7aca369d4ed


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
  const [positiveComment, setPositiveComment] = useState([]);
  const [negetiveComment, setNegetiveComment] = useState([]);
  const [neutralComment, setNeutralComment] = useState([]);
  const [topComment, setTopComment] = useState([]);

  return (
    <Router>
      <>
<<<<<<< HEAD
        <DataContext.Provider value={{ userlist, setUserList, stats, setStats, monthlytimeline, setMonthlyTimeline, dailytimeline, setDailyTimeline, mostbusyday, setMostBusyDay, mostbusymonth, setMostBusyMonth, file, setFile, mostbusyuser, setMostBusyUser, listbusyuser, setListBusyUser }}>
          <Routes>
            <Route path='/' exact Component={Fpage} />
            <Route path='/whatsappAnalyzer' Component={Whatsapp} />
            <Route path='/Guide' Component={Guide} />
          </Routes>
        </DataContext.Provider>
=======
        <YoutubeDataContext.Provider value={{videoDetail, setVideoDetail, sa, setSA, positiveComment, setPositiveComment, negetiveComment, setNegetiveComment, neutralComment, setNeutralComment, topComment, setTopComment}}>
          <DataContext.Provider value={{ userlist, setUserList, stats, setStats, monthlytimeline, setMonthlyTimeline, dailytimeline, setDailyTimeline, mostbusyday, setMostBusyDay, mostbusymonth, setMostBusyMonth, file, setFile, mostbusyuser, setMostBusyUser, listbusyuser, setListBusyUser }}>
            <Routes>
              <Route path='/' exact Component={Fpage} />
              <Route path='/whatsappAnalyzer' Component={Whatsapp} />
              <Route path='/youtubeAnalyzer' Component={YoutubeAnalyzer} />
            </Routes>
          </DataContext.Provider>
        </YoutubeDataContext.Provider>
>>>>>>> 2193ae825c211012e5236dec0018d7aca369d4ed
      </>
    </Router>


  )
}

export default App

