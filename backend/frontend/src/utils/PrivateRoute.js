import { Navigate, Outlet, Route, useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import AuthContext from '../context/AuthContext'

const PrivateRoute = () => {
    let {user} = useContext(AuthContext)


    return(
        !user?<Navigate to = '/login'/>: <Outlet/>
    )
}

export default PrivateRoute;