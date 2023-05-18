import './App.css';
import { BrowserRouter, NavLink, Navigate, Route, Routes } from "react-router-dom";
import Main from "./components/main";
import Home from "./components/main/Home";
import About from "./components/main/About";
import Signup from "./components/main/Signup";
import Navbar from "./components/main/Navbar";
import Login from "./components/main/Login";
import ARViewer from './components/main/ARViewer';
import ManageVideos from './components/user/ManageVideos';
import User from './components/user';
import UserAuth from './auth/UserAuth';
import UserProvider from './context/UserProvider';
import { useState } from 'react';
import GenerateMarker from './components/user/GenerateMarker';
import PlayAR from './components/user/PlayAR';
import ManageImage from './components/user/ManageMarker';
import ContactUs from './components/main/ContactUs';



function App() {
  const [currentUser, setCurrentUser] = useState(JSON.parse(sessionStorage.getItem('user')));
  return (
    <div>
      <BrowserRouter>
        <UserProvider currentUser={currentUser}>
          <Routes>
            <Route path='/' element={<Navigate to="/main/home" />} />
            <Route path='main' element={<Main />}>
              <Route path='home' element={<Home />} />
              <Route path='Signup' element={<Signup />} />
              <Route path='navbar' element={<Navbar />} />
              <Route path='Login' element={<Login />} />
              <Route path='About' element={<About />} />
              <Route path='ContactUs' element={<ContactUs />} />
              <Route path='arviewer' element={<ARViewer />} />
              <Route path='index' element={<index />} />
            </Route>
            <Route path='user' element={<UserAuth> <User /> </UserAuth>}>
            {/* <Route path='user' element={ <User /> }> */}
              <Route path='manageimages' element={<ManageImage />} />
              <Route path='managemarkers' element={<GenerateMarker />} />
              <Route path='managevideos' element={<ManageVideos />} />
              <Route path='generatemarker' element={<GenerateMarker/>}/>
              <Route path='arplayer' element={<PlayAR/>}/>
            </Route>

          </Routes>
        </UserProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
