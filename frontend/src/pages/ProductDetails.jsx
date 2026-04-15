import React from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { asyncupdateuser } from '../store/actions/userAction'
import { toast } from 'react-toastify'


const ProductDetails = () => {
    // @ts-ignore
    const products = useSelector((state)=>state.products.products)
    // @ts-ignore
    const user = useSelector((state)=>state.users.users)
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const params = useParams()
    const product = products?.find((product)=>product.id == params.id)

    const isInCart = user?.cart?.some((item) => item.product.id == product?.id);

    const AddCartHandler=(product)=>{
      if(!user){
        toast.error("Please login to add items to cart")
      }
      const copyuser = {...user, cart: [...user.cart]}
      const x = copyuser.cart.findIndex((c)=>c.product.id == product.id) 
      if(x==-1){
        copyuser.cart.push({product, quantity:1})
        toast.success("Item added to cart")
      }
      else{
        copyuser.cart[x]={product, quantity: copyuser.cart[x].quantity + 1}
         toast.success("Item added to cart")
       

      }
      // @ts-ignore
      dispatch(asyncupdateuser(copyuser, user.id))
      console.log(copyuser)
    }

    const Buyhandler=(product)=>{
      if(!user){
        toast.error("Please login to buy items")
        navigate("/Login")
      }

      navigate(`/user/CheckOut/${product.id}`)
  
    }

    if(!product) return <div>Loading...</div>
  return (
       user?.isAdmin?
            <div className="min-h-[70%] overflow-hidden w-[30%] bg-[rgb(67,78,50)] rounded-lg shadow-[1_4px_8px_black] mx-auto mt-5 ">
                <img className="w-full h-[20rem] hover:scale-102 object-cover shadow-lg" src={product.url} alt="" />
                <h1  className="text-2xl p-2 font-bold mt-2 text-[rgb(215,233,155)] w-full ">{product.title}</h1>
                <p className="mb-1 px-2 leading-tight text-[16px] text-[rgb(185,204,116)]">{product.description}</p>
                <p className=" text-[rgb(222,234,60)] p-2 font-bold">MRP : <small className="line-through">${Number(product.price) + 2000}</small> <br /> <span className="text-xl text-bold text-shadow-lg">${product.price}</span> <small>/only</small></p>
              <div className="flex flex-col gap-2 items-center justify-center m-5 mt-1">
                 <button className="bg-yellow-200 text-black w-full font-bold rounded-2xl px-4 py-1 active:scale-95" onClick={()=>{navigate(`/admin/UpdateProduct/${product.id}`)}}>Edit Details</button>
               {isInCart ? (
                    <button 
                        className="bg-yellow-400 text-black w-full font-bold rounded-2xl px-4 py-1 active:scale-95"
                        onClick={() => navigate("/Cart")}
                    >
                        Go to Cart
                    </button>
                ) : (
                    <button 
                        className="bg-yellow-400 text-black w-full font-bold rounded-2xl px-4 py-1 active:scale-95"
                        onClick={() => AddCartHandler(product)}
                    >
                        Add to Cart
                    </button>
                )}
                <button className="bg-yellow-600 text-black w-full font-bold rounded-2xl px-4 py-1 active:scale-95" 
                onClick={()=>{Buyhandler(product)}}>Buy Now</button>
                
              </div>
           </div> :<div className="min-h-[70%] overflow-hidden w-[30%] bg-[rgb(67,78,50)] rounded-lg shadow-[1_4px_8px_black] mt-5 mx-auto">
                <img className="w-full h-[20rem] hover:scale-102 object-cover shadow-lg" src={product.url} alt="" />
                <h1  className="text-2xl p-2 font-bold mt-2 text-[rgb(215,233,155)] w-full ">{product.title}</h1>
                <p className="mb-1 px-2 leading-tight text-[16px] text-[rgb(185,204,116)]">{product.description}</p>
                <p className=" text-[rgb(222,234,60)] p-2 font-bold">MRP : <small className="line-through">${Number(product.price) + 2000}</small> <br /> <span className="text-xl text-bold text-shadow-lg">${product.price}</span> <small>/only</small></p>
              <div className="flex flex-col gap-2 items-center justify-center m-5 mt-1">
              {isInCart ? (
                    <button 
                        className="bg-yellow-400 text-black w-full font-bold rounded-2xl px-4 py-1 active:scale-95"
                        onClick={() => navigate("/Cart")}
                    >
                        Go to Cart
                    </button>
                ) : (
                    <button 
                        className="bg-yellow-400 text-black w-full font-bold rounded-2xl px-4 py-1 active:scale-95"
                        onClick={() => AddCartHandler(product)}
                    >
                        Add to Cart
                    </button>
                )}
                <button className="bg-yellow-600 text-black w-full font-bold rounded-2xl px-4 py-1 active:scale-95"
                 onClick={()=>{Buyhandler(product)}}>Buy Now</button>
              </div>
              </div>

    
  )
}

export default ProductDetails