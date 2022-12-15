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
} from '../constants/postConstants'


export const categoryReducer = (state = {category:[]}, action) =>{
    switch(action.type){
        case CATEGORY_REQUEST:
            return { loading : true , category : []}
        case CATEGORY_SUCCESS:
            return { loading : false , category : action.payload}
        case CATEGORY_FAIL:
            return { loading : false , error : action.payload }
        default :
        return state
        

    }
}

export const jobpostReducer = (state = { jobpost: [] }, action) =>{

    switch(action.type){
        case JOBPOST_REQUEST:
            return { loading : true , jobpost : []}
        case JOBPOST_SUCCESS:
            return { loading : false , jobpost : action.payload}
        case JOBPOST_FAIL:
            return { loading : false , jobposterror : action.payload }
        default :
        return state

    }

}

export const singlejobpostReducer = (state={}, action) =>{

    switch(action.type){
        case SINGLEJOBPOST_REQUEST:
            return { loading : true , singlejobpost : null}
        case SINGLEJOBPOST_SUCCESS:
            return { loading : false , singlejobpost : action.payload}
        case SINGLEJOBPOST_FAIL:
            return { loading : false , singlejobposterror : action.payload }
        default :
        return state

    }

}


export const servicepostReducer = (state = { servicepost: [] }, action) =>{

    switch(action.type){
        case SERVICEPOST_REQUEST:
            return { loading : true , servicepost : []}
        case SERVICEPOST_SUCCESS:
            return { loading : false , servicepost : action.payload}
        case SERVICEPOST_FAIL:
            return { loading : false , serviceposterror : action.payload }
        default :
        return state

    }

}

export const singleservicepostReducer = (state={}, action) =>{

    switch(action.type){
        case SINGLESERVICEPOST_REQUEST:
            return { loading : true , singleservicepost : null}
        case SINGLESERVICEPOST_SUCCESS:
            return { loading : false , singleservicepost : action.payload}
        case SINGLESERVICEPOST_FAIL:
            return { loading : false , singleserviceposterror : action.payload }
        default :
        return state

    }

}


export const profileReducer = (state = {userprofile:[]}, action) =>{
    switch(action.type){
        case USERPROFILE_REQUEST:
            return { loading : true , userprofile : []}
        case USERPROFILE_SUCCESS:
            return { loading : false , userprofile : action.payload}
        case USERPROFILE_FAIL:
            return { loading : false , userprofileerror : action.payload }
        default :
        return state
        

    }
}


export const allUsersReducer = (state = {allusers:[]}, action) =>{
    switch(action.type){
        case ALLUSERS_REQUEST:
            return { alluserloading : true , allusers : []}
        case ALLUSERS_SUCCESS:
            return { alluserloading : false , allusers : action.payload}
        case ALLUSERS_FAIL:
            return { alluserloading : false , alluserserror : action.payload }
        default :
        return state
        

    }
}

export const singleUsersReducer = (state = {singleusers:[]}, action) =>{
    switch(action.type){
        case SINGLEUSERS_REQUEST:
            return { singleuserloading : true , singleusers : [] }
        case SINGLEUSERS_SUCCESS:
            return { singleuserloading : false , singleusers : action.payload }
        case SINGLEUSERS_FAIL:
            return { singleuserloading : false , singleuserserror : action.payload }
        default :
        return state
        

    }
}