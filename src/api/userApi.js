
import axios from "axios"
const rootUrl = "http://localhost:3001/"
const loginUrl= rootUrl+"v1/user/login"
const userProfileUrl= rootUrl+"v1/user"
const userLogoutUrl=rootUrl+"v1/user/logout"
export const userLogin = formData=>{
    return new Promise(async(resolve,reject)=>{
        try{
const result = await axios.post(loginUrl,formData)

if(result.data.status=="success")
{
    
    sessionStorage.setItem('accessJWT',result.data.accessJWT)
    localStorage.setItem("crmSite",JSON.stringify({refreshJWT:result.data.refreshJWT}))
}
resolve(result.data)
        }
        catch(error)
        {
            console.log(error)
            reject(error)
        }
    })
}

export const fetchUser = ()=>{
    return new Promise(async(resolve,reject)=>{
        try{
let accessJWT= sessionStorage.getItem("accessJWT")
if(!accessJWT){reject("Token not found")}
const result = await axios.get(userProfileUrl,{
    headers:{
        Authorization:accessJWT
    }
})


resolve(result.data)
        }
        catch(error)
        {
            console.log(error)
            reject(error)
        }
    })
}

export const userLogout=async()=>{


    try{
        await axios.delete(userLogoutUrl,{
            headers:{
                Authorization:sessionStorage.getItem("accessJWT")
            }
        })

    }
    catch(error)
    {

    }

}