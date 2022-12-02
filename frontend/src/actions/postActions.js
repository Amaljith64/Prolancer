import axios from 'axios'
import{
    CATEGORY_REQUEST,
    CATEGORY_SUCCESS,
    CATEGORY_FAIL,


    JOBPOST_REQUEST,
    JOBPOST_SUCCESS,
    JOBPOST_FAIL,

    SINGLEJOBPOST_REQUEST,
    SINGLEJOBPOST_SUCCESS,
    SINGLEJOBPOST_FAIL,
 
} from '../constants/postConstants'


export const listcategory = () => async (dispatch) => {
    try{
        dispatch({
            type: CATEGORY_REQUEST
        })
        const config = {
            headers: {
                'Content-type' : 'application/json'
            }
        }
        const { data } = await axios.get("client/",config)

        dispatch({
            type : CATEGORY_SUCCESS,
            payload : data
        })
        
    }
    catch(error){
        dispatch({
            type: CATEGORY_FAIL,
            payload : error.response && error.response.data.detail ? error.response.data.detail:error.message,
        })

    }
}


export const listjobpost = () => async (dispatch) => {
    try{
        dispatch({
            type : JOBPOST_REQUEST
        })
        const config = {
            headers : {
                'Content-type' : 'application/json'
            }
        }
        const { data } = await axios.get("client/postjob/",config)

        dispatch({
            type : JOBPOST_SUCCESS,
            payload : data
        })
    }
    catch(error){
        dispatch({
            type : JOBPOST_FAIL,
            payload : error.response && error.response.data.detail ? error.response.data.detail:error.message 
        })

    }
}


export const Singlejobpost = (id) => async (dispatch) => {
    try{
        dispatch({
            type : SINGLEJOBPOST_REQUEST
        })
        const config = {
            headers : {
                'Content-type' : 'application/json'
            }
        }
        const { data } = await axios.get(`/freelancer/viewservice/${id}`,config)

        dispatch({
            type : SINGLEJOBPOST_SUCCESS,
            payload : data
        })
    }
    catch(error){
        dispatch({
            type : SINGLEJOBPOST_FAIL,
            payload : error.response && error.response.data.detail ? error.response.data.detail:error.message 
        })

    }
}