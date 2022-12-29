import React, { useDebugValue, useEffect, useState } from 'react';
import QuestionCards from '../QuestionCards/QuestionCards';
import './Content.css';
import { useNavigate } from "react-router-dom";
import { useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { fetchQuestion } from '../../actions/fetchQuestion';
import axios from 'axios';

const Content = ({questionList}) => {

  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();




  
  

 

  return <>
{questionList.length ?
    <div className="content-container">
      <div className="header">
       
       {
        location.pathname ==="/" ?  <h1>Top Questions</h1> : <h1>All Questions</h1>
       }
       
       
        <button className="btn" style={{ marginTop: 0, marginBottom: '12px' }} onClick={()=>navigate("/questions/ask")}>
          Ask Question
        </button>
      </div>

      <div className="content-item">
        <div className="questions-count">{questionList?.length} questions</div>

        {/* <div className="filter-container">
          <div className="filters">
            <button>Newest</button>
            <button>Active</button>
            <button>Bountied</button>
            <button>Unanswered</button>
            <button>More</button>
          </div>
          <button className="filter-btn">Filter</button>
        </div> */}
      </div>

      <div className="question-container">
                {
                  questionList?.map((question,id) => <QuestionCards key={`${id}_question`} question={question} /> )
                }  
      </div>
    </div>

    :
    <div className='default'>
    {questionList.length==0 &&  <div style={{display:"flex",justifyContent:"space-between"}}>
    No Questions Found
    <button className="btn" style={{ marginTop: 0, marginBottom: '12px' }} onClick={()=>navigate("/questions/ask")}>
          Ask Question
        </button>
        </div>
        
        }
    </div>
}
  </>;
};

export default Content;
