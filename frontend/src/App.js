import logo from './logo.svg';
import './App.css';
import { BrowserRouter, NavLink, Navigate, Route, Routes } from "react-router-dom";
import Main from "./components/main";
import Home from "./components/main/Home";
import About from "./components/main/About";
import Signup from "./components/main/Signup";
import Navbar from "./components/main/Navbar";
import Login from "./components/main/Login";
import ARViewer from './components/main/ARViewer';


function App() {
  return (
    <div>
      <BrowserRouter>

      <Routes>
        <Route path='/' element={<Navigate to="/main/home"/>}/>
        <Route path='main' element={<Main/>}>
          <Route path='home' element={<Home />}/>
          <Route path='Signup' element={<Signup/>}/>
          <Route path='navbar' element={<Navbar/>}/>
          <Route path='Login' element={<Login/>}/>
          <Route path='About' element={<About/>}/>
          <Route path='arviewer' element={<ARViewer/>}/>

        </Route>
        

          
          
          
          
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
