import { createContext, useState, useEffect } from 'react'
import jwt_decode from "jwt-decode";
import { useNavigate } from 'react-router-dom'
import axios from 'axios';
import { ToastContainer, toast } from "react-toastify";

const AuthContext = createContext()

export default AuthContext;


export const AuthProvider = ({children}) => {
    const Swal=require("sweetalert2")
    let [authTokens, setAuthTokens] = useState(()=> localStorage.getItem('authTokens') ? JSON.parse(localStorage.getItem('authTokens')) : null)
    let [user, setUser] = useState(()=> localStorage.getItem('authTokens') ? jwt_decode(localStorage.getItem('authTokens')) : null)
    let [loading, setLoading] = useState(true)
    const [ profileid,Setprofileid ] = useState(null)

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
            else if ((jwt_decode(data.access)).is_superuser)
                Navigate('/admin')
            else
                Navigate('/')

        }else{
            toast.error("Invalid Credentials")
        }
    }



    let logoutUser = () => {

        Swal.fire({
            title:"Are you sure",
   
             icon:"warning",
             showCancelButton:"true",
             confirmButtonColor:"#3085D6",
             cancelButtonColor:"#d33",
             confirmButtonText:"YES,Logout",
           }).then((result)=>{
            if(result.isConfirmed){
                console.log('logout completed........')
                setAuthTokens(null)
                setUser(null)
                localStorage.removeItem('authTokens')
                Navigate('/login')
            }
           })


        
    }

    let userSignup = async (e)=>{
        console.log('signup called..........')
    
        axios.post("/api/signup/",
        {'username':e.name, 'email':e.email, 'password':e.password}). then((response) => {
            toast.success('Register Successful Please Login')
            console.log(response,'signup response')
            if (response.status === 200){
                Navigate("/login"); 
                toast.success('Register Successful Please Login')
                console.log("register Successful");
                  }
              
              else{
                  console.log("SOmething problem in register");
              }
        }).catch((response) =>{
            toast.error(response.response.data.error)
        })
    
        
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

    let changePassword = async (e)=>{
        console.log('Changing password funccccc')
    
        axios.post("/api/changepassword/",
        {'userid':user.user_id, 'password1':e.password1, 'password2':e.password2}). then((response) => {

            if (response.status === 200){

                toast.success('Password changed')
                setAuthTokens(null)
                setUser(null)
                localStorage.removeItem('authTokens')
                Navigate('/login')

                  }
              
              else{
                  console.log("please recheck the password entered");
              }
        }).catch((response) =>{

            toast.error(response.response.data.data)
        })
    
        
    }



    let contextData = {
        user:user,
        authTokens:authTokens,
        setAuthTokens:setAuthTokens,
        setUser:setUser,
        loginUser:loginUser,
        logoutUser:logoutUser,
        userSignup:userSignup,
        googleSignin:googleSignin,
        profileid,
        Setprofileid,
        changePassword:changePassword
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