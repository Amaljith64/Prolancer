import{
    CATEGORY_REQUEST,
    CATEGORY_SUCCESS,
    CATEGORY_FAIL,
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