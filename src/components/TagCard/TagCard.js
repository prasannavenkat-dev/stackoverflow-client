import React from 'react'
import "./TagCard.css"
const TagCard = ({tagName,tagDescription}) => {
  return (
    <div className='tag-card-container' >
    <div style={{display:"flex",justifyContent:"flex-start",alignItems:"center"}}>
    <div className='tag'>
         {tagName}
    </div>
    </div>
  
   
   <div className='tag-card-description'> 
   {tagDescription}
   </div>
    </div>
  )
}
export default TagCard