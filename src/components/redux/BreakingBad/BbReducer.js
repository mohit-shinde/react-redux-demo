import { FETCH_REQUEST, FETCH_SUCCESS, FETCH_FAILURE } from "./BbTypes"

const initialState={
    loading:false,
    chars:[],
    error:''
}

export const BbReducer=(state=initialState,action)=>{
    switch(action.type){
        case FETCH_REQUEST:
            return{
                ...state,
                loading:true
            }
        case FETCH_SUCCESS:
            return{
                ...state,
                loading:false,
                chars:action.payload,
                error:''
            }
        case FETCH_FAILURE:
            return{
                ...state,
                loading:false,
                chars:[],
                error:action.payload
            }
        default: return state
    }
}