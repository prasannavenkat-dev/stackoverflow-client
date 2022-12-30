import React from 'react';
import LeftSideBar from '../../components/LeftSideBar/LeftSideBar';
import RightSideBar from '../../components/RightSideBar/RightSideBar';
import Content from '../../components/Content/Content';
import { Route, Routes } from 'react-router-dom';


const Home = ({questionList,fetchData}) => {





  return (
    <div className="home-container">

      <div className="left-sidebar-container">
        <LeftSideBar />
      </div>
      <div className="main-container">
        <Content questionList={questionList} fetchData={fetchData} />
        <RightSideBar />
      </div>

    </div>
  );
};

export default Home;
