import axios from 'axios'
import useAxios from '../utils/useAxios'
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

    SERVICEPOST_REQUEST,
    SERVICEPOST_SUCCESS,
    SERVICEPOST_FAIL,
    
    SINGLESERVICEPOST_REQUEST,
    SINGLESERVICEPOST_SUCCESS,
    SINGLESERVICEPOST_FAIL,

    USERPROFILE_REQUEST,
    USERPROFILE_SUCCESS,
    USERPROFILE_FAIL,

    ALLUSERS_REQUEST,
    ALLUSERS_SUCCESS,
    ALLUSERS_FAIL,
    SINGLEUSERS_REQUEST,
    SINGLEUSERS_SUCCESS,
    SINGLEUSERS_FAIL,
    JOB_PURCHASE_HISTORY_REQUEST,
    JOB_PURCHASE_HISTORY_SUCCESS,
    JOB_PURCHASE_HISTORY_FAIL,
    SERVICE_PURCHASE_HISTORY_REQUEST,
    SERVICE_PURCHASE_HISTORY_SUCCESS,
    SERVICE_PURCHASE_HISTORY_FAIL,
    FREELANCER_REQUEST_REQUEST,
    FREELANCER_REQUEST_SUCCESS,
    FREELANCER_REQUEST_FAIL,
 
} from '../constants/postConstants'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';




/* -------------------------------------------------------------------------- */
/*                                  CATEGORY                                  */
/* -------------------------------------------------------------------------- */


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


/* -------------------------------------------------------------------------- */
/*                                  JOB POST                                  */
/* -------------------------------------------------------------------------- */


export const listjobpost = (keyword = '') => async (dispatch) => {
    try{
        dispatch({
            type : JOBPOST_REQUEST
        })
        const config = {
            headers : {
                'Content-type' : 'application/json'
            }
        }
        const { data } = await axios.get(`client/postjob?${keyword}`)

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
        const { data } = await axios.get(`/freelancer/viewjob/${id}`,config)

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



/* -------------------------------------------------------------------------- */
/*                                SERVICE POST                                */
/* -------------------------------------------------------------------------- */


export const listservicepost = (keyword = '') => async (dispatch) => {
    try{
        dispatch({
            type : SERVICEPOST_REQUEST
        })
        const config = {
            headers : {
                'Content-type' : 'application/json'
            }
        }
        const { data } = await axios.get(`/freelancer/postservice?${keyword}`,config)

        dispatch({
            type : SERVICEPOST_SUCCESS,
            payload : data
        })
    }
    catch(error){
        dispatch({
            type : SERVICEPOST_FAIL,
            payload : error.response && error.response.data.detail ? error.response.data.detail:error.message 
        })

    }
}


export const Singleservicepost = (id) => async (dispatch) => {
    try{
        dispatch({
            type : SINGLESERVICEPOST_REQUEST
        })
        const config = {
            headers : {
                'Content-type' : 'application/json'
            }
        }
        const { data } = await axios.get(`/client/viewsingleservice/${id}/`,config)

        dispatch({
            type : SINGLESERVICEPOST_SUCCESS,
            payload : data
        })
    }
    catch(error){
        dispatch({
            type : SINGLESERVICEPOST_FAIL,
            payload : error.response && error.response.data.detail ? error.response.data.detail:error.message 
        })

    }
}


/* -------------------------------------------------------------------------- */
/*                                USER PROFILE                                */
/* -------------------------------------------------------------------------- */

export const UserProfile = (id) => async (dispatch) => {
    try{
        dispatch({
            type : USERPROFILE_REQUEST
        })
        const config = {
            headers : {
                'Content-type' : 'application/json'
            }
        }
        const { data } = await axios.get(`/api/userprofile/${id}/`,config)

        dispatch({
            type : USERPROFILE_SUCCESS,
            payload : data
        })
    }
    catch(error){
        dispatch({
            type : USERPROFILE_FAIL,
            payload : error.response && error.response.data.detail ? error.response.data.detail:error.message 
        })
    }
}

export const AllUsers = (id) => async (dispatch) => {
    try{
        dispatch({
            type : ALLUSERS_REQUEST
        })
        const config = {
            headers : {
                'Content-type' : 'application/json'
            }
        }
        const { data } = await axios.get(`api/allusers/`,config)

        dispatch({
            type : ALLUSERS_SUCCESS,
            payload : data
        })
    }
    catch(error){
        dispatch({
            type : ALLUSERS_FAIL,
            payload : error.response && error.response.data.detail ? error.response.data.detail:error.message 
        })
    }
}

export const SingleUsers = (id) => async (dispatch) => {
    try{
        dispatch({
            type : SINGLEUSERS_REQUEST
        })
        const config = {
            headers : {
                'Content-type' : 'application/json'
            }
        }
        const { data } = await axios.get(`/api/userprofile/${id}/`,config)

        dispatch({
            type : SINGLEUSERS_SUCCESS,
            payload : data
        })
    }
    catch(error){
        dispatch({
            type : SINGLEUSERS_FAIL,
            payload : error.response && error.response.data.detail ? error.response.data.detail:error.message 
        })
    }
}
export const JobPurchaseHistory = (id) => async (dispatch) => {
    try{
        dispatch({
            type : JOB_PURCHASE_HISTORY_REQUEST
        })
        const config = {
            headers : {
                'Content-type' : 'application/json'
            }
        }
        const { data } = await axios.get(`/client/viewjobpurchase/${id}/`,config)

        dispatch({
            type : JOB_PURCHASE_HISTORY_SUCCESS,
            payload : data
        })
    }
    catch(error){
        dispatch({
            type : JOB_PURCHASE_HISTORY_FAIL,
            payload : error.response && error.response.data.detail ? error.response.data.detail:error.message 
        })
    }
}

export const ServicePurchaseHistory = (id) => async (dispatch) => {
    try{
        dispatch({
            type : SERVICE_PURCHASE_HISTORY_REQUEST
        })
        const config = {
            headers : {
                'Content-type' : 'application/json'
            }
        }
        const { data } = await axios.get(`/client/viewservicepurchase/${id}/`,config)

        dispatch({
            type : SERVICE_PURCHASE_HISTORY_SUCCESS,
            payload : data
        })
    }
    catch(error){
        dispatch({
            type : SERVICE_PURCHASE_HISTORY_FAIL,
            payload : error.response && error.response.data.detail ? error.response.data.detail:error.message 
        })
    }
}

export const FreelancerRequest = () => async (dispatch) => {
    try{
        dispatch({
            type : FREELANCER_REQUEST_REQUEST
        })
        const config = {
            headers : {
                'Content-type' : 'application/json'
            }
        }
        const { data } = await axios.get(`/client/freelancerrequest/`,config)

        dispatch({
            type : FREELANCER_REQUEST_SUCCESS,
            payload : data
        })
    }
    catch(error){
        dispatch({
            type : FREELANCER_REQUEST_FAIL,
            payload : error.response && error.response.data.detail ? error.response.data.detail:error.message 
        })
    }
}

