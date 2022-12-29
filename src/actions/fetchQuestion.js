import * as api from "../api/api";

export const fetchQuestion = (question) => async (dispatch) => {
    try {

        const data = await api.fetchQuestion(question);
        dispatch({ type: "FETCH-QUESTION-SUCCESS", data })
        
    } catch (error) {

        dispatch({ type: "FETCH-QUESTION-ERROR", error })
    }
}