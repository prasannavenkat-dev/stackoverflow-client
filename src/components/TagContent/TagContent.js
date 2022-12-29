import React from 'react'
import TagCard from '../TagCard/TagCard'
import "./TagContent.css"

import { tagList } from './TagList'
const TagContent = () => {
   
   
  
    return (
    <div  className="tag-page-container">
    <div className='tag-header'>
    <h1>
        Tags
    </h1>

      
    </div>


    <div className='tag-description'>
    A tag is a keyword or label that categorizes your question with other, similar questions.
     Using the right tags makes it easier for others to find and answer your question.
    </div>

    <div className='grid-container'>
     

      {
        tagList.map( ({tagName,tagDescription},id) => <TagCard  tagName={tagName} tagDescription={tagDescription} key={id} />)
      }


    </div>
    </div>
  )
}

export default TagContent