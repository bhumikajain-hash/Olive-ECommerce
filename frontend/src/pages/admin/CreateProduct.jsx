import { nanoid } from '@reduxjs/toolkit/react'
import React from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { asynccreateproduct } from '../../store/actions/productAction'

const CreateProduct = () => {
  const {register, handleSubmit, reset, formState: {errors}} = useForm({mode: "onChange"})
    const navigate = useNavigate()
    const dispatch = useDispatch()
  
  const Createhandler =  (product) => {
    product.id=nanoid()
    // @ts-ignore
    dispatch(asynccreateproduct(product))
    reset()
    navigate("/Product")
  }
  
  
    return (
       <div className="flex flex-col items-center justify-center min-h-[70%] w-[30%] text-[#ECDFCC] bg-[rgb(67,78,50)] rounded-lg shadow-[0_4px_6px_rgba(48,64,40,0.1)] mx-auto mt-10 p-5">
        <h1 className="text-3xl font-bold mb-8">Create your product</h1>
  
        <form onSubmit={handleSubmit(Createhandler)}>
  
           <input
          {...register("url", {required: " required"})}
          type="url" 
          placeholder="URL"
          className="border-2 border-gray-300 rounded-md p-2 mb-3 w-full" />
  
           {errors.url && 
              <span className="text-red-500 text-xs text-left">
                {String(errors.url.message)}
              </span>
          }
          
          
           <input
          {...register("title", {required: "required"})}
          type="text" placeholder="Title"
          className="border-2 border-gray-300 rounded-md p-2 mb-3 mt-2 w-full" />
  
           {errors.title && 
              <span className="text-red-500 text-xs text-left">
                {String(errors.title.message)}
              </span>
          }
  
          
            <input
          {...register("price", {required: "Price is required", pattern: {
      value: /^[0-9]*\.?[0-9]*$/,
      message: "Please enter a valid number"
    }})}
          type="text"
        //  inputMode="decimal"
          placeholder="Price"
          className="border-2 border-gray-300 rounded-md p-2 mb-3 mt-2 w-full" />
  
           {errors.price && 
              <span className="text-red-500 text-xs text-left">
                {String(errors.price.message)}
              </span>
          }
  
          {/* {errors.url && <small  className="text-red-400 block">{String(errors?.url?.message)}</small>}*/}
  
          <textarea 
            {...register("description", {required: "Description is required"})}
            placeholder="Description"
            className="border-2 border-gray-300 rounded-md p-2 mb-3 mt-2 w-full " />
          
          <select
          {...register("category")}
           className="border-2 text-gray-300 border-gray-300 rounded-md p-2 mb-3 mt-1 w-full" id="category">
            <option value="">Select a category</option>
            <option value="electronics">Electronics</option>
            <option value="clothing">Clothing</option>
            <option value="home">Home</option>
          </select>
  
          <button type="submit" className="bg-blue-500 text-white rounded-md mt-3 px-4 py-2 active:scale-105">Create Product</button>  
  
        </form>
  
      </div>
    )
  }

export default CreateProduct