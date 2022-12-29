import * as api from "../api/api";





export const postQuestion = (question) => async (dispatch) => {
    try {

        const data = await api.postQuestion(question);
        dispatch({ type: "POST-QUESTION-SUCCESS", data })
        
    } catch (error) {

        dispatch({ type: "POST-QUESTION-ERROR", error })

        console.log(error,"asdsaljhdkasd")
    }
}