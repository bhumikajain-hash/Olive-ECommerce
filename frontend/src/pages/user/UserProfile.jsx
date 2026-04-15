import { Phone } from 'lucide-react'
import { Mail } from 'lucide-react'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { asynclogoutuser, asyncupdateuser } from '../../store/actions/userAction'

const UserProfile = () => {
  // @ts-ignore
  const user = useSelector((state)=>state.users.users)
  const dispatch =useDispatch()
  const navigate = useNavigate()
   const {register, handleSubmit, reset} = useForm({defaultValues:{
    firstname : user?.firstname,
    middlename : user?.middlename,
    lastname : user?.lastname,
    username : user?.username,
    email : user?.email,
    number : user?.number,
    url : user?.url
   }})

   const logouthandler=()=>{
    // @ts-ignore
    dispatch(asynclogoutuser(user))
    navigate("/Product")
   }

   const onsubmit = (updatedUser)=>{
      // @ts-ignore
      dispatch(asyncupdateuser(updatedUser, user.id))
       const form = document.querySelector(".form")
        form.classList.replace("block", "hidden")
    }

    const hiddenhandler=()=>{
      const form = document.querySelector(".form")
      form.classList.replace("hidden", "block")
    }

  return (
    <div className="flex justify-between">
    <div className="flex flex-col space-y-2 h-fit items-center justify-center  w-[20%] text-[#ECDFCC] bg-[rgb(67,78,50)] rounded-lg shadow-[0_4px_6px_rgba(48,64,40,0.1)] mx-auto mt-10 p-4 ">
      {user?.url?<img className="w-[10rem] h-[10rem] rounded-full object-fit object-center" src={user.url} alt="" /> : <div className="w-[80px] h-[80px] rounded-full bg-gray-300 animate-pulse flex items-center justify-center text-5xl text-white">?</div>}
      {user?.isAdmin ? <small className=" text-[#ECDFCC] text-sm font-bold mt-2 mb-0 rounded">"Admin"</small> : <small className=" text-[#ECDFCC] text-sm font-bold mt-2 mb-0 rounded">"Customer"</small>}
      <h1 className="text-3xl font-bold text-center ">{user?.firstname} {user?.middlename} {user?.lastname}</h1>
      <h2 className="text-lg font-bold text-[rgba(203,212,98,0.8)]">"<u>{user?.username}</u>"</h2>
     <div className="flex flex-col items-start gap-3">
        {/* EMAIL SECTION */}
        <div className="flex items-center gap-3">
          <Mail size={18} className="text-[rgb(222,234,60)]" />
          <span className="text-sm truncate">{user?.email}</span>
        </div>

        {/* PHONE SECTION */}
        <div className="flex items-center gap-3">
          <Phone size={18} className="text-[rgb(222,234,60)]" />
          <span className="text-sm">{user?.number || "No number provided"}</span>
        </div>
      </div>

       <button type="button" onClick={logouthandler} className="bg-[rgb(122,51,35)] text-white font-bold py-2 px-4 rounded-lg hover:bg-[rgb(203,212,98)] active:scale-95 mt-3 w-2/3" >
        Logout
      </button>

      <button onClick={hiddenhandler} className="bg-[rgb(222,234,60)] text-[rgb(67,78,50)] font-bold py-2 px-4 rounded-lg hover:bg-[rgb(203,212,98)] active:scale-95 mt-3 w-2/3" >
        Edit Profile
      </button>
    </div>
 
     <div className="form flex flex-col hidden items-center justify-center min-h-[70%] w-[30%] text-[#ECDFCC] bg-[rgb(67,78,50)] rounded-lg shadow-[0_4px_6px_rgba(48,64,40,0.1)] mx-auto mt-10 p-5">
      <h1 className="text-3xl font-bold mb-8">Edit Your Profile</h1>

      <form onSubmit={handleSubmit(onsubmit)}>

         <input
        {...register("firstname")}
        type="text" 
        placeholder="Firstname"
        className="border-2 border-gray-300 rounded-md p-2 mb-3 w-full" />

         <input
        {...register("middlename")}
        type="text" placeholder="Middlename"
        className="border-2 border-gray-300 rounded-md p-2 mb-3 mt-2 w-full" />

      
         <input
        {...register("lastname")}
        type="text" placeholder="Lastname"
        className="border-2 border-gray-300 rounded-md p-2 mb-3 mt-2 w-full" />

        <input
        {...register("username")}
        type="text" placeholder="Username"
        className="border-2 border-gray-300 rounded-md p-2 mb-3 mt-2 w-full" />

        <input
        {...register("email", { pattern: {value: /^\S+@\S+$/i, message: "Invalid email address"}})}
        type="email" placeholder="Email"
        className="border-2 border-gray-300 rounded-md p-2 mt-2 mb-3 w-full" />

        <input
        {...register("number", {
          minLength:{value: 10, message: "Phone number must be at least 10 digits"},
          maxLength:{value: 12, message: "Phone number cannot exceed 15 digits"},
        })}
        type="tel" placeholder="Phone Number"
        className="border-2 border-gray-300 rounded-md p-2 mb-3 mt-2 w-full" />

        <input
        {...register("url")}
        type="url" 
        placeholder="Profile Picture URL"
        className="border-2 border-gray-300 rounded-md p-2 mb-3 mt-2 w-full" />

        <button type="submit" className="bg-green-800 text-white rounded-md mt-2 px-4 py-2 active:scale-105">Save Changes</button>  

      </form>

    </div> 

</div>
  
  )
}

export default UserProfile