import {BrowserRouter, Routes, Route} from "react-router-dom";

import './App.css';



import Events from "./pages/events";
import Header from "./components/header";
import Announcement from "./pages/announcement";
import Requests from "./pages/requests";
import Home from "./pages/Home";
import UserSidebar from "./components/userSidebar";



function UserApp() {

  return (
   
    <div className="App">     
       {<UserSidebar/>}
      
      <div className="content">
        {<Header/>}
           
        <Routes>
          <Route path="/" element ={<Home/>}/>
          <Route path="/events" element ={<Events/>}/>         
          <Route path="/announcements" element ={<Announcement/>}/>  
          <Route path="/requests" element ={<Requests/>}/>      
        
        </Routes>    
                 
      </div>
    </div>    
  
  );
 
} 



 


export default UserApp;
