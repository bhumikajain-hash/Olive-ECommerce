import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { asyncregisteruser } from '../store/actions/userAction'
import { useDispatch } from 'react-redux'
import { nanoid } from '@reduxjs/toolkit/react'
const Register = () => {
  const {register, handleSubmit, reset, formState: {errors}} = useForm({mode: "onChange"})
  const navigate = useNavigate()
  const dispatch = useDispatch()

const Registerhandler =  (user) => {
  user.id=nanoid()
  user.cart=[]
  user.isAdmin = user.AccountType === "Business" ? true : false
  // @ts-ignore
  dispatch(asyncregisteruser(user))
  reset()
  navigate("/Login")
}

const hiddenhandler=()=>{
  const form = document.querySelector(".form")
  const account = document.querySelector(".account")
  account.classList.replace("block", "hidden")
  form.classList.replace("hidden", "block")

}


  return (
     <div className="flex flex-col items-center justify-center min-h-[70%] w-[30%] text-[#ECDFCC] bg-[rgb(67,78,50)] rounded-lg shadow-[0_4px_6px_rgba(48,64,40,0.1)] mx-auto mt-10 p-5">

      <div className="account block">
      <h1 className="text-3xl font-bold mb-8">Welcome to our community!</h1>
      <p className="text-sm text-gray-300 mb-6">Join us today and start exploring our amazing products. We can't wait to have you on board!</p>
        <select
          {...register("AccountType")}
           className="border-2 text-gray-300 border-gray-300 rounded-md p-2 mb-3 mt-1 w-full" id="category">
            <option value="">Select Account Type</option>
            <option value="personal">Personal Account</option>
            <option value="Business">Business Account</option>
          </select>

          <button type="button" onClick={hiddenhandler} className="bg-[rgb(222,234,60)] text-[rgb(67,78,50)] font-bold py-2 px-4 rounded-lg hover:bg-[rgb(203,212,98)] active:scale-95 mt-3 w-2/3" >
            Continue
          </button>
      </div>

      <div className="form hidden">

      <h1 className="text-3xl font-bold mb-8">Register</h1>

      <form onSubmit={handleSubmit(Registerhandler)}>

         <input
        {...register("firstname", {required: " required"})}
        type="text" 
        placeholder="Firstname"
        autoComplete="given-name"
        className="border-2 border-gray-300 rounded-md p-2 mb-3 w-full" />

         {errors.firstname && 
            <span className="text-red-500 text-xs text-left">
              {String(errors.firstname.message)}
            </span>
        }
        
         <input
        {...register("middlename")}
        type="text" placeholder="Middlename"
        autoComplete="additional-name"
        className="border-2 border-gray-300 rounded-md p-2 mb-3 mt-2 w-full" />

      
         <input
        {...register("lastname", {required: "required"})}
        type="text" placeholder="Lastname"
        autoComplete="family-name"
        className="border-2 border-gray-300 rounded-md p-2 mb-3 mt-2 w-full" />

         {errors.lastname && 
            <span className="text-red-500 text-xs text-left">
              {String(errors.lastname.message)}
            </span>
        }

        
          <input
        {...register("username", {required: "Username is required"})}
        type="text" placeholder="Username"
        className="border-2 border-gray-300 rounded-md p-2 mb-3 mt-2 w-full" />

         {errors.username && 
            <span className="text-red-500 text-xs text-left">
              {String(errors.username.message)}
            </span>
        }

      
        {/* {errors.url && <small  className="text-red-400 block">{String(errors?.url?.message)}</small>}*/}

        <div className="h-0 w-0 overflow-hidden"></div>
        

        <input
        {...register("email", {required: "Email is required", pattern: {value: /^\S+@\S+$/i, message: "Invalid email address"}})}
        type="email" placeholder="Email"
        className="border-2 border-gray-300 rounded-md p-2 mt-2 mb-3 w-full" />

        {errors.email && 
            <span className="text-red-500 text-xs text-left w-full">
              {String(errors.email.message)}
            </span>
        }

           <input
        {...register("number", {required: "Phone number is required",
          minLength:{value: 10, message: "Phone number must be at least 10 digits"},
          maxLength:{value: 12, message: "Phone number cannot exceed 15 digits"},
        })}
        type="tel" placeholder="Phone Number"
        className="border-2 border-gray-300 rounded-md p-2 mb-3 mt-2 w-full" />

         {errors.number && 
            <span className="text-red-500 text-xs text-left">
              {String(errors.number.message)}
            </span>
        }

        <input
        {...register("password", {required: "Password is required", minLength: {value: 8, message: "Password must be at least 8 characters"},
        validate:{
          hasLetter: (value) => 
        /[a-zA-Z]/.test(value) || "Password must contain at least one letter"

        }})}
        type="password" placeholder="Password"
        autoComplete="new-password"
        className="border-2 border-gray-300 rounded-md mt-2 p-2 mb-3 w-full" />

        {errors.password && 
            <span className="text-red-500 text-xs text-left w-full">
              {String(errors.password.message)}
            </span>
        }

        <input
        {...register("url")}
        type="url" 
        placeholder="Profile Picture URL"
        className="border-2 border-gray-300 rounded-md p-2 mb-3 mt-2 w-full" />

        <button type="submit" className="bg-blue-500 text-white rounded-md  px-4 py-2 active:scale-105">Register</button>  

        <p className="text-sm text-gray-300 mt-4">
          Already have an account!  <small onClick={() => navigate("/Login")} className="text-blue-500 cursor-pointer text-sm">...Login</small> </p> 

      </form>
      </div>

    </div>
  )
}

export default Register