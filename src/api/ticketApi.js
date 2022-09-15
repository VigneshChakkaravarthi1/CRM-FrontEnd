import axios from "axios"
export const getAllTickets=()=>{ 
    return new Promise(async(resolve,reject)=>{
        try{
            const result = await axios.get("http://localhost:3001/v1/ticket",{
                headers:{
                    Authorization:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InZpY2t5MjQxMDk3QGdtYWlsLmNvbSIsImlhdCI6MTY2MzE0OTc3MSwiZXhwIjoxNjYzMTc5NzcxfQ.uwhaPXn66bpEodaEjgdEKvqqah32pzEyHlJitQyCA-g"
                }
            })
            resolve(result)

        }
        catch(error)
        {
            console.log(error)
            reject(error)
        }
    })
  


        }