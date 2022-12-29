import React, { useEffect, useState } from 'react'
import spotPencil from '../../assets/spotPencil.svg';

const AskQueTags = ({  displayHandler,queField,setQuestionInfo,tagString,setTagString }) => {



    function tagHandler(event){
      

         setTagString(event.target.value)

      

    }


    useEffect(() => {
        let tagList = tagString.split(" ");
     
        setQuestionInfo(prev => {
            return {...prev,questionTags:tagList}
        })

    }, [tagString])
    

    return (
        <div id="container-suggestion">
            <div className="container">
                <div className="user-input">
                    <label className="label-suggestion">Tags</label>
                    <label className="description">
                        Add up to 5 tags to describe what your question is about. Separate tags using spaces.

                    </label>

                    <input
                        type="text"
                        className="form-input"
                        name="questionTags"
                        value={tagString}
                        onChange={tagHandler}
                        style={{ marginTop: '6px' }}
                        onFocus={displayHandler}
                    />

                </div>
            </div>

            <div className="suggestion-container" style={{ display: queField[2].isDisplayNone && 'none' }}>
                <div className="suggestion-container-display">
                    <div id="suggestion-header">
                        <h2>
                            Adding tags
                        </h2>
                    </div>
                    <div id="suggestion" style={{ padding: '16px' }}>
                        <div id="spot-pencil-container">
                            <img id="spot-pencil" src={spotPencil} alt="spot-pencil" />
                        </div>

                        <div id="suggestion-content">
                            <p key={`1_suggestion_tag_content`}>
                                Tags help ensure that your question will get attention from the right people.
                            </p>
                            <p key={`2_suggestion_tag_content`}>
                                Tag things in more than one way so people can find them more easily. Add tags for product lines, projects, teams, and the specific technologies or languages used.
                            </p>
                            <p key={`3_suggestion_tag_content`}>
                                Learn more about tagging
                            </p>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AskQueTags