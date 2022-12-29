import React, { useEffect, useState } from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import logo from '../../assets/logo.png';
import logo2 from '../../assets/logo2.png';

import search from '../../assets/search.svg';
import Avatar from '../Avatar/Avatar';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MenuIcon from '@mui/icons-material/Menu';
import './Navbar.css';
import { IconButton } from '@mui/material';

const Navbar = ({user,setUser}) => {

  const [anchorEl, setAnchorEl] = useState(null);
  const [showSearchBar, setShowSearchBar] = useState(false)
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  let navigate = useNavigate();
useEffect(() => {
setUser(JSON.parse(window.sessionStorage.getItem("user")))
console.log(JSON.parse(window.sessionStorage.getItem("user")))
}, [])



function logOut(){
  window.sessionStorage.clear();
  navigate("/")
}



  return (
    <>
      <nav className="top-navbar">
        <div className="navbar">



          <IconButton sx={{

            ['@media (max-width:640px)']: { // eslint-disable-line no-useless-computed-key
              display: 'block'
            },
            display: "none"
          }} onClick={handleClick} aria-label="delete" size="medium">
            <MenuIcon fontSize="inherit" />
          </IconButton>

          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              'aria-labelledby': 'basic-button',
            }}
          >
            <MenuItem onClick={handleClose}>Home</MenuItem>
            <MenuItem onClick={handleClose}>Questions</MenuItem>
            <MenuItem onClick={handleClose}>Tags</MenuItem>
            <MenuItem onClick={handleClose}>Users</MenuItem>

          </Menu>


          <Link to="/" className='nav-logo-link'>

            <span className="nav-logo">
              <img className="logo1" src={logo} alt="logo" />
              <img className="logo2" src={logo2} alt="logo" />

            </span>
          </Link>
          {/* <Link to="/" className="nav-item nav-btn">
          About
        </Link> */}
          <Link to="/" className="nav-item nav-btn">
            Products
          </Link>
          {/* <Link to="/" className="nav-item nav-btn">
          For Teams
        </Link> */}
          <form className='nav-search-field'>
            <input type="search" placeholder="Search..." className="form-input" />
            <img className="search-icon" src={search} alt="search" width="18" height="18" />
          </form>

          <button className='nav-search-btn-small' onClick={()=>setShowSearchBar((prev) => !prev)}>
            <img src={search} alt="search" width="18" />

          </button>
          {!user ? (
            <Link className="nav-item nav-link" to="/Auth">
              Log in
            </Link>
          ) : (
            <>
            <Link to={`/users/${user?.data?.userId}/${user?.data?.name.split(" ").join("-")}`} style={{ textDecoration: 'none', color: 'white', margin: '',fontSize:"13px",margin:"auto" }}>

              <Avatar backgroundColor="#009dff" px="10" py="7" borderRadius="50%" color="white" width="28" height="28">


                 {user?.data?.name[0].toUpperCase()}
              </Avatar>
              </Link>

              <button className="nav-item nav-link" onClick={logOut}>Log out</button>{' '}
            </>
          )}
        </div>
      </nav>

      <div style={{ position: "absolute", top: "50px", background: "hsl(204deg 10% 90%)", width: "100%", padding: "8px 12px",
      
      display:showSearchBar?"block":"none"
       }} className="nav-search-field-bottom">
        <form style={{ width: "100%" }} >
          <input type="search" placeholder="Search..." className="form-input" style={{ padding: "7.8px 9.1px 7.8px 32px" }} />
          <img className="search-icon" style={{ left: "19.8px" }} src={search} alt="search" width="18" />
        </form>
      </div>
    </>
  );
};

export default Navbar;
