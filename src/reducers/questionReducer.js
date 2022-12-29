export default function questionReducer(state,action){
    switch (action.type) {
        case "POST-QUESTION-SUCCESS":
                alert(action.data.data.message)
             
            return {...state}

            case "POST-QUESTION-ERROR":
                 alert(action.error.response.data.message)
              
             return {...state}
     
    
        default:
            return {...state};
    }
}