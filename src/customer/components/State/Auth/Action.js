import axios from 'axios'
import { BASE_URL } from '../../config/apiConfig'
import { 
    REGISTER_FAILURE, REGISTER_REQUEST, REGISTER_SUCCESS,
    LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS,
    GET_USER_FAILURE, GET_USER_REQUEST, GET_USER_SUCCESS
} from './ActionTypes'

//Register Action Creators
const registerRequest = () => ({ type: REGISTER_REQUEST })
const registerFailure = (error) => ({ type: REGISTER_FAILURE, payload: error })

const registerSuccess = (jwt) => ({

    type: REGISTER_SUCCESS, payload: jwt
    
 })

export const register = (userData) => async (dispatch) => {
    dispatch(registerRequest())
    try {
        const response = await axios.post(`${BASE_URL}/auth/signup`, userData)
        const data = response.data
        if (data.jwt) {
            localStorage.setItem("jwt", data.jwt)
            dispatch(registerSuccess(data.jwt))
        } else {
            dispatch(registerFailure("JWT token not received from server"))
        }
    } catch (error) {
        const errorMessage = error.response?.data?.error || error.response?.data?.message || error.message || "Registration failed"
        dispatch(registerFailure(errorMessage))
    }
}



