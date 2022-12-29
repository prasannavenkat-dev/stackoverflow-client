export default function authReducer(state, action) {
    switch (action.type) {
        case "AUTH-SUCCESS":
            window.sessionStorage.setItem("user", JSON.stringify(action.data));
            alert(action.data.message)
            return { ...state, ...action?.data.data }
        case "AUTH-FAIL":
            alert(action.error.response.data.message)
            return { ...state }

        default:
            return { ...state };
    }
}