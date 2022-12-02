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