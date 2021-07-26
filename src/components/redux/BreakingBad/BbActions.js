import axios from 'axios'
import {FETCH_REQUEST, FETCH_SUCCESS ,FETCH_FAILURE } from './BbTypes'

export const fetchRequest=()=>{
    return {
        type:FETCH_REQUEST
    }
}

export const fetchSuccess=(chars)=>{
    return {
        type:FETCH_SUCCESS,
        payload:chars
    }
}

export const fetchFailure=(error)=>{
    return {
        type:FETCH_FAILURE,
        payload:error
    }
}

export const fetchChars=()=>{
    return (dispatch)=>{
        dispatch(fetchRequest)
        axios.get('https://www.breakingbadapi.com/api/characters')
        .then(res=>{
            const chars=res.data
            dispatch(fetchSuccess(chars))
        })
        .catch(err=>{
            const errorMessage=err.message
            dispatch(fetchFailure(errorMessage))
        })
    }
}