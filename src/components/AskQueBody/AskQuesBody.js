import React from 'react'
import spotPencil from '../../assets/spotPencil.svg';


const AskQuesBody = ({  displayHandler,questionInfo,questionHandler,queField }) => {
  return (
    <div id="container-suggestion">
      <div className="container">
        <div className="user-input">
          <label className="label-suggestion">What are the details of your problem?</label>
          <label className="description">
          Introduce the problem and expand on what you put in the title. Minimum 20 characters.
          </label>
    <textarea className="text-area-container" name="questionBody"  type="textarea" spellCheck={false} value={questionInfo.questionBody} onChange={questionHandler} onFocus={displayHandler} /> 

            {/* <TextArea id={1} displayHandler={displayHandler} askQueHandler={askQueHandler} askQueField={askQueField} /> */}
        </div>
      </div>

      <div className="suggestion-container" style={{ display: queField[1].isDisplayNone && 'none' }}>
        <div className="suggestion-container-display">
          <div id="suggestion-header">
            <h2>Introduce the problem</h2>
          </div>
          <div id="suggestion" style={{ padding: '16px' }}>
            <div id="spot-pencil-container">
              <img id="spot-pencil" src={spotPencil} alt="spot-pencil" />
            </div>

            <div id="suggestion-content">
           
                <p key={`1_suggestion_body_content`}>
                Explain how you encountered the problem you're trying to solve, and any difficulties that have prevented you from solving it yourself.
                </p>
  
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AskQuesBody