import React from 'react';
import './LeftSideBar.css';
import earthLogo from '../../assets/earthLogo.svg';
import { NavLink } from 'react-router-dom';
const LeftSideBar = () => {
  return (
    <div className="left-sidebar">
      <nav>
        <ol style={{marginTop:0}}>
          <li >
          <NavLink className="menu-item" activeClassName="active" to="/">
          Home
            </NavLink>
          
          </li>
          <li style={{ color: '#6A737C', fontSize: '11px', margin: '16px 0px 4px 8px' }}>PUBLIC</li>
          <li>
            <NavLink className="menu-item" activeClassName="active" to="/questions">
              <img src={earthLogo} activeClassName="globe-active" className="globe" alt="globe" width="16" height="16"/>
              Questions
            </NavLink>
          </li>
          <li className="">
          <NavLink className="menu-item sub-menu w-100" activeClassName="active" to="/tags">
              Tags
            </NavLink>

          </li>
          <li >

          <NavLink className="menu-item sub-menu w-100" activeClassName="active" to="/users">
              Users
            </NavLink>
          </li>
        </ol>
      </nav>
    </div>
  );
};

export default LeftSideBar;
