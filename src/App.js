import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import './App.css';
import AllRoutes from './components/AllRoutes/AllRoutes';
import Navbar from './components/Navbar/Navbar';

function App() {
  const [bgColor,setBgColor] = useState("hsl(0deg 0% 100%)")
  const [user,setUser] = useState(null)

  let location = useLocation();

useEffect(() => {
let userDetails = JSON.parse(window.sessionStorage.getItem("user"))
  setUser(userDetails)
}, [location])


  return (
    <div className="App" style={{backgroundColor:`${bgColor}`}} >
        <Navbar user={user} setUser={setUser} />
        <AllRoutes setBgColor={setBgColor} user={user} setUser={setUser} />
    </div>
  );
}

export default App;
