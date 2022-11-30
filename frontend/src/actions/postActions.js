import axios from 'axios'
import{
    CATEGORY_REQUEST,
    CATEGORY_SUCCESS,
    CATEGORY_FAIL,
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
            payload : error.response && error.response.data.detail ?error.response.data.detail:error.message,
        })

    }
}

