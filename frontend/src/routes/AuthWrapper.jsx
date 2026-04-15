import { useSelector } from 'react-redux'
import { Navigate, useNavigate } from 'react-router-dom'

const AuthWrapper = (props) => {
    
  // @ts-ignore
  const {users:user, isLoading} = useSelector((state)=>state.users)
 
  if(isLoading) return <div>Loading...</div>
  if(!user) return <Navigate to="/Login"/> //it is not working

  const condition = !user.isAdmin && props.isadmin
  
  return condition? <Navigate to="/"/> : props.children
}

export default AuthWrapper