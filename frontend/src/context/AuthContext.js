import { createContext, useState, useEffect } from 'react'
import jwt_decode from "jwt-decode";
import { useNavigate } from 'react-router-dom'
import axios from 'axios';

const AuthContext = createContext()

export default AuthContext;


export const AuthProvider = ({children}) => {
    let [authTokens, setAuthTokens] = useState(()=> localStorage.getItem('authTokens') ? JSON.parse(localStorage.getItem('authTokens')) : null)
    let [user, setUser] = useState(()=> localStorage.getItem('authTokens') ? jwt_decode(localStorage.getItem('authTokens')) : null)
    let [loading, setLoading] = useState(true)

    const Navigate = useNavigate();

    let loginUser = async (e )=> {
        console.log('login called.......')
        e.preventDefault()
        let response = await fetch('/api/token/', {
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify({'email':e.target.email.value, 'password':e.target.password.value})
        })
        let data = await response.json()

        if(response.status === 200){
            setAuthTokens(data)
            setUser(jwt_decode(data.access))
            localStorage.setItem('authTokens', JSON.stringify(data))
            if ((jwt_decode(data.access)).is_freelancer)
                Navigate('/freelancer')
            else
                Navigate('/')
        }else{
            alert('Something went wrong!')
        }
    }



    let logoutUser = () => {
        console.log('logout completed........')
        setAuthTokens(null)
        setUser(null)
        localStorage.removeItem('authTokens')
        Navigate('/login')
    }

    let userSignup = async (e)=>{
        console.log('signup called..........')
    
        let response = await axios.post("/api/signup/",
        {'username':e.name, 'email':e.email, 'password':e.password})
    
        if (response.status === 200){
            
          Navigate("/login");
             
            console.log("register Successful");
            }
            else{
              
              
            console.log("SOmething problem in register");
        }
    }

    let googleSignin = async(e)=>{
        console.log('google signinn..........')
        console.log(e,'event')
        var userObject =jwt_decode(e.credential)
        console.log(userObject,'from googleeeee')

        let response = await axios.post("/api/googlesignin/",
        {'username':userObject.name, 'email':userObject.email, 'password':userObject.sub})
    
        if (response.status === 200){
            
            let response = await fetch('/api/token/', {
                method:'POST',
                headers:{
                    'Content-Type':'application/json'
                },
                body:JSON.stringify({'email':userObject.email, 'password':userObject.sub
            })
            })
            let data = await response.json()
            setAuthTokens(data)
            setUser(jwt_decode(data.access))
            localStorage.setItem('authTokens', JSON.stringify(data))
            if ((jwt_decode(data.access)).is_freelancer)
                Navigate('/freelancer')
            else
                Navigate('/')
             
            console.log("google login Successful");
            }
        
        else
            console.log("Something problem in google loginn");
        

    }


    // let updateToken = async ()=> {

    //     let response = await fetch('http://127.0.0.1:8000/api/token/refresh/', {
    //         method:'POST',
    //         headers:{
    //             'Content-Type':'application/json'
    //         },
    //         body:JSON.stringify({'refresh':authTokens?.refresh})
    //     })

    //     let data = await response.json()
        
    //     if (response.status === 200){
    //         setAuthTokens(data)
    //         setUser(jwt_decode(data.access))
    //         localStorage.setItem('authTokens', JSON.stringify(data))
    //     }else{
    //         logoutUser()
    //     }

    //     if(loading){
    //         setLoading(false)
    //     }
    // }

    let contextData = {
        user:user,
        authTokens:authTokens,
        setAuthTokens:setAuthTokens,
        setUser:setUser,
        loginUser:loginUser,
        logoutUser:logoutUser,
        userSignup:userSignup,
        googleSignin:googleSignin,
    }


    useEffect(()=> {

        if(authTokens){
            setUser(jwt_decode(authTokens.access))
        }
        setLoading(false)


    }, [authTokens, loading])

    return(
        <AuthContext.Provider value={contextData} >
            {loading ? null : children}
        </AuthContext.Provider>
    )
}
