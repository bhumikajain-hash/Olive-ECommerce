import { nanoid } from "nanoid"
import { useForm } from "react-hook-form"
import { useNavigate } from "react-router-dom"
import { asyncloginuser } from "../store/actions/userAction"
import { useDispatch } from "react-redux"

const Login = () => {
  const dispatch = useDispatch()
  const {register, handleSubmit, reset, formState: {errors}} = useForm()
  const navigate = useNavigate()

  const submithandler=(user) => {
    user.id=nanoid()
    // @ts-ignore
    dispatch(asyncloginuser(user))
    reset()
    navigate("/Product")
    
  }
  
  return (
    <div className="flex flex-col items-center justify-center min-h-[70%] w-[30%] text-[#ECDFCC] bg-[rgb(67,78,50)] rounded-lg shadow-[0_4px_6px_rgba(48,64,40,0.1)] mx-auto mt-20 p-5">
      <h1 className="text-3xl font-bold mb-8">Login</h1>

      <form onSubmit={handleSubmit(submithandler)}>

        <input
        {...register("username", {required: "Username is required"})}
        type="text" placeholder="Username" className="border-2 border-gray-300 rounded-md p-2 mb-3 w-full" />

         {errors.username && 
            <span className="text-red-500 text-xs text-left">
              {String(errors.username.message)}
            </span>
        }
        {/* {errors.url && <small  className="text-red-400 block">{String(errors?.url?.message)}</small>}*/}
      
        <input
        {...register("password", {required: "Password is required", minLength: {value: 8, message: "Password must be at least 6 characters"}})}
        type="password" placeholder="Password" className="border-2 border-gray-300 rounded-md mt-2 p-2 mb-3 w-full" />

        {errors.password && 
            <span className="text-red-500 text-xs text-left w-full">
              {String(errors.password.message)}
            </span>
        }

        <button type="submit" className="bg-blue-500 text-white rounded-md mt-3 px-4 py-2 active:scale-105">Login</button>  

        <p className="text-sm text-gray-300 mt-8">
          Don't have an account?  <small onClick={() => navigate("/Register")} className="text-blue-500 cursor-pointer text-sm">...Register</small> </p> 
      </form>

    </div>
  )
}

export default Login