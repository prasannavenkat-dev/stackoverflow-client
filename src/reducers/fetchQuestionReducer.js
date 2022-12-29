

export default function fetchQuestionReducer(state,action){
    switch (action.type) {
        case "FETCH-QUESTION-SUCCESS":
                alert(action.data.data.message)
             console.log(action.data.data)
            return {...state,data:action.data.data}

            case "FETCH-QUESTION-ERROR":
                 alert(action.error.response.data.message)
              
             return {state}
     
    
        default:
            return {...state};
    }
}