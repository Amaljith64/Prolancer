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


