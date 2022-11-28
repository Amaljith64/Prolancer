import { createContext, useState, useEffect, useContext } from 'react'

import { useNavigate } from 'react-router-dom'
import axios from 'axios';
import AuthContext from './AuthContext';

const ClientContext = createContext()

export default ClientContext;


export const ClientProvider = ({children}) => {
    const {user} = useContext(AuthContext)

    const Navigate = useNavigate();


    let jobSubmit = async (e)=>{
           console.log(e.job_title,'yyyyyyy')
           console.log(e.category,'yyyyyyy')
           console.log(e.img[0])
           console.log(e.img,'oooooooo')
           console.log(e.img['0'],'iiiiiiiiiiiii')
           const config = {
            headers : {

                'Content-type' : 'multipart/form-data'
            }
           }
    
        let response = await axios.post("client/postjob/",
        {'user': user.user_id,
        'job_title':e.job_title,
        'category':e.category,
        'min_budget':e.min_budget,
        'max_budget':e.max_budget,
        'skill_required':e.skill_required,
        'job_description':e.job_description,
        'img':e.img[0],

        },config)
        
      
    
        if (response.status === 200){
            
          Navigate("/login");

            console.log("register Successful");
            }
            else{
              
            console.log("Something problem in register");

        }
    }





    let contextData = {
        jobSubmit:jobSubmit,
       
    }
    return(
        <ClientContext.Provider value={contextData} >
            {children}
        </ClientContext.Provider>
    )




}