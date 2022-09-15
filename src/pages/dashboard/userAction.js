import {getUserPending,getUserSuccess,getUserFailure} from "./userSlice"
import { fetchUser } from "../../api/userApi"

export const getUserProfile=()=>async dispatch=>{
    try{
        dispatch(getUserPending())
        //API call
        const result = await fetchUser()

        if(!result.user._id){dispatch(getUserFailure("User is not found"))}
        else
        {
            dispatch(getUserSuccess(result.user))
        }
       
        


    }
    catch(error)
    {
        dispatch(getUserFailure(error))
    }
}