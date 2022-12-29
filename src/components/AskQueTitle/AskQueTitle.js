import React from 'react'
import spotPencil from '../../assets/spotPencil.svg';
const AskQueTitle = ({  displayHandler,inputElement,questionInfo,questionHandler,queField}) => {

    return (
        <div id="container-suggestion">
            <div className="container">
                <div className="user-input">
                    <label className="label-suggestion">Title</label>
                    <label className="description">
                        Be specific and imagine you're asking a question to another person.
                    </label>

                    <input
                        type="text"
                        className="form-input"
                        style={{ marginTop: '6px' }}
                        name="questionTitle"
                        value={questionInfo.questionTitle}
                        onChange={questionHandler}
                        autoFocus
                        onFocus={displayHandler}
                        ref={inputElement}
                    />

                </div>
            </div>

            <div className="suggestion-container" style={{ display: queField[0].isDisplayNone && 'none' }}>
                <div className="suggestion-container-display">
                    <div id="suggestion-header">
                        <h2>

                            Writing a good title

                        </h2>
                    </div>
                    <div id="suggestion" style={{ padding: '16px' }}>
                        <div id="spot-pencil-container">
                            <img id="spot-pencil" src={spotPencil} alt="spot-pencil" />
                        </div>

                        <div id="suggestion-content">
                            <p key={`1_suggestion_title_content`}>
                                Your title should summarize the problem.
                            </p>
                            <p key={`2_suggestion_title_content`}>
                                You might find that you have a better idea of your title after writing out the rest of the question.
                            </p>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AskQueTitle