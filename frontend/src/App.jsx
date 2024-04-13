import { useState } from 'react'
import { DataContext } from "./Context/DataContext"
import Fpage from './Pages/Fpage';
import Whatsapp from "./Analyzer's/Whatsapp"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


function App() {

  const [userlist, setUserList] = useState([]);
  const [stats, setStats] = useState([]);
  const [monthlytimeline, setMonthlyTimeline] = useState([]);
  const [dailytimeline, setDailyTimeline] = useState([]);
  const [mostbusyday, setMostBusyDay] = useState([]);
  const [mostbusymonth, setMostBusyMonth] = useState([]);
  const [mostbusyuser, setMostBusyUser] = useState([]);
  const [listbusyuser, setListBusyUser] = useState([]);
  const [file, setFile] = useState(null)

  return (
  // console.log("hi guys how are you")
    <Router>
      <>
        <DataContext.Provider value={{ userlist, setUserList, stats, setStats, monthlytimeline, setMonthlyTimeline, dailytimeline, setDailyTimeline, mostbusyday, setMostBusyDay, mostbusymonth, setMostBusyMonth, file, setFile, mostbusyuser, setMostBusyUser, listbusyuser, setListBusyUser }}>
          <Routes>
            <Route path='/' exact Component={Fpage} />
            <Route path='/whatsappAnalyzer' Component={Whatsapp} />
            </Routes>
        </DataContext.Provider>
      </>
    </Router>


  )
}

export default App

