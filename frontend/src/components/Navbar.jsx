import { useSelector } from "react-redux"
import { NavLink, useNavigate } from "react-router-dom"
import { asynclogoutuser } from "../store/actions/userAction"
import { useDispatch } from "react-redux"


const Navbar = () => {
  const dispatch = useDispatch()
  const navigate= useNavigate()
  // @ts-ignore
  const user = useSelector((state)=>state.users.users)
  //first .users is the name of the reducer in the store and second .users is the name of the state in that reducer

  return (
    <nav className="flex justify-center items-center gap-7 text-[#ECDFCC] text-[20px] font-bold bg-[#697565] w-auto px-10 py-2 rounded  top-5 absolute left-1/2 -translate-x-1/2 z-50 shadow-[1px_2px_5px]" >
       
        <NavLink
        className={(e)=>e.isActive ? "text-[#3C3D37]" : "text-[#ECDFCC]"} 
        to="/" >Home</NavLink>

        <NavLink
        className={(e)=>e.isActive ? "text-[#3C3D37]" : "text-[#ECDFCC]"} 
        to="/Cart">Cart</NavLink>

        <NavLink
        className={(e)=>e.isActive ? "text-[#3C3D37]" : "text-[#ECDFCC]"} 
        to="/Product">Products</NavLink>

        {user?.isAdmin &&           <NavLink
          className={(e)=>e.isActive ? "text-[#3C3D37]" : "text-[#ECDFCC]"} 
          to="/admin/CreateProduct">Create-Products</NavLink>}

        {
          user?(
          <NavLink
          className={(e)=>e.isActive ? "text-[#3C3D37]" : "text-[#ECDFCC]"} 
          to="/user/UserProfile"><div className="flex flex-col items-center"><span  className="text-2xl h-7">👤</span><h2 className="text-[14px]">Profile</h2></div></NavLink>

          ):(<>
            <NavLink
            className={(e)=>e.isActive ? "text-[#3C3D37]" : "text-[#ECDFCC]"} 
            to="/Login">Login</NavLink>
          </>)
        }

   
     
    </nav>
  )

}

export default Navbar
