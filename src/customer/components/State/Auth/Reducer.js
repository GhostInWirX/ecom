import {REGISTER_REQUEST, REGISTER_SUCCESS, REGISTER_FAILURE,
        LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE,
        GET_USER_REQUEST, GET_USER_SUCCESS, GET_USER_FAILURE} from '../Action/Auth/ActionTypes';


const initialState={
    user:null,
    isloading:false,
    error:null,
    jwt:null
}

export const authReducer=(state=initialState,action)=>
{
    switch(action.type)
    {
        case REGISTER_REQUEST:
            return({...state, isloading: true,error:null})
        case REGISTER_SUCCESS:
            return({...state, isloading: false,error:null ,jwt:action.payload})
       case REGISTER_FAILURE:
            return({...state, isloading: false,error:action.payload})
      
        

    }

}