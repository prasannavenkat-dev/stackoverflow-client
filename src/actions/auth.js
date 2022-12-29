import * as api from "../api/api";


export const signUp = (userData, navigate) => async (dispatch) => {
    try {
        const { data } = await api.signUp(userData);
        dispatch({ type: "AUTH-SUCCESS", data })
        navigate("/")
    } catch (error) {
        dispatch({ type: "AUTH-FAIL", error })

    }
}


export const signIn = (userData, navigate) => async (dispatch) => {
    try {
        const { data } = await api.signIn(userData);
        dispatch({ type: "AUTH-SUCCESS", data })
        navigate("/")

    } catch (error) {
        dispatch({ type: "AUTH-FAIL", error })

    }
}