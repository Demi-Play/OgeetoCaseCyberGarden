
import './App.css'

// import FetchUtils from './components/utils/FetchUtils.jsx'

// import FetchUtils from './components/fetchUtils/FetchUtils.jsx'

// import TableMeets from './components/fetchUtils/TableMeets.jsx'
import AddUsers from './Components/AddUsersPage/index.jsx'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./Components/HomePage/index.jsx";
import MeetPage from "./Components/MeetPage/index.jsx";
import MeetAuthPage from "./Components/MeetAuthPage/index.jsx";
import ProfilePage from './Components/profilePage/index.jsx';
import MeetAuthPageAdmin from './Components/MeetAuthPageAdmin/index.jsx'
import HomeAuthPageAdmin from './Components/HomePageAdmin/index.jsx'


function App() {

  return (
    <>
      {/* <FetchUtils /> */}
      
      <BrowserRouter>
        <Routes>
          <Route path="/addUser" element={<AddUsers />}/>
          <Route path="/" element={<HomePage />}/>
          <Route path="/firstMeet" element={<MeetPage />}/>
          <Route path="/firstMeetAuth" element={<MeetAuthPage />}/>
          <Route path='/profile' element={<ProfilePage />}/>
          <Route path='/adminMeets' element={<MeetAuthPageAdmin/>}/>
          <Route path='/admin' element={<HomeAuthPageAdmin/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
