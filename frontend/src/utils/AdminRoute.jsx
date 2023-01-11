import { Navigate, Outlet, Route, useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import AuthContext from '../context/AuthContext'

const AdminRoute = () => {
    let {user} = useContext(AuthContext)

    return(
        !user.is_superuser?<Navigate to = '/restricted'/>: <Outlet/>
    )
    
}

export default AdminRoute;