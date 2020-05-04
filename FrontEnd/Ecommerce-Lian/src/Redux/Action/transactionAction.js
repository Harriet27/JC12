import Axios from "axios"
import { API_URL } from "../../Support/API_URL"

export const fetchTRX = (id) => {
    return async (dispatch) => {
        try{
            dispatch({
                type: 'FETCH_TRX_START'
            })
            let res = await Axios.get(`${API_URL}/transactions?userId=${id}`)
            dispatch({
                type: 'FETCH_TRX_SUCCESS',
                payload : res.data
            })
        }
        catch(err){
            dispatch({
                type : 'FETCH_TRX_FAILED',
                payload : err
            })
        }
    }
}
