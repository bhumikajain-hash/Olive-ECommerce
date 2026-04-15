import { nanoid } from '@reduxjs/toolkit/react'
import React from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { asyncdeleteproduct, asyncupdateproduct } from '../../store/actions/productAction'
import { useSelector } from 'react-redux'

const UpdateProduct = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const params = useParams()
  // @ts-ignore
  const products = useSelector((state)=>state.products.products)
  const product = products?.find((product)=>product.id == params.id)
  const {register, handleSubmit, reset, formState: {errors}} = useForm({defaultValues:{
    url : product?.url,
    title : product?.title,
    price : product?.price,
    description : product?.description,
    category : product?.category

  }})
  
  const Updatehandler =  (updatedproduct) => {
    // @ts-ignore
    dispatch(asyncupdateproduct(updatedproduct , product.id))
    navigate(`/productDetails/${product.id}`)    
  }

  const Deletehandler=()=>{
    // @ts-ignore
    dispatch(asyncdeleteproduct(product.id))
    navigate("/Product")

  }
  
    return (
       <div className="flex flex-col items-center justify-center min-h-[70%] w-[30%] text-[#ECDFCC] bg-[rgb(67,78,50)] rounded-lg shadow-[0_4px_6px_rgba(48,64,40,0.1)] mx-auto mt-10 p-5">
        <h1 className="text-3xl font-bold mb-8">Update your product</h1>
  
        <form onSubmit={handleSubmit(Updatehandler)}>  
          <input
          {...register("url", {required: " required"})}
          type="url" 
          placeholder="URL"
          className="border-2 border-gray-300 rounded-md p-2 mb-3 w-full" />
  
          
           <input
          {...register("title", {required: "required"})}
          type="text" placeholder="Title"
          className="border-2 border-gray-300 rounded-md p-2 mb-3 mt-2 w-full" />
  
           
          <input
          {...register("price", {required: "Price is required", pattern: {
          value: /^[0-9]*\.?[0-9]*$/,
          message: "Please enter a valid number"
          }})}

          type="text"
          //  inputMode="decimal"
          placeholder="Price"
          className="border-2 border-gray-300 rounded-md p-2 mb-3 mt-2 w-full" />
          
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

          <div className="flex gap-2 justify-between">
          <button type="submit" className="bg-yellow-800 text-white font-bold rounded-md mt-3 px-4 py-2 active:scale-95">Update Product</button>  
          <button type="button" className="bg-red-900 text-white font-bold rounded-md mt-3 px-4 py-2 active:scale-95" onClick={Deletehandler}>Delete Product</button>  
          </div>
  
        </form>
  
      </div>
    )
  }

export default UpdateProduct
