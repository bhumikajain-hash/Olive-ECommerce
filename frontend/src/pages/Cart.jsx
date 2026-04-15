import { useSelector } from 'react-redux'
import { asyncupdateuser } from '../store/actions/userAction'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

const Cart = () => {

  const dispatch = useDispatch()
  const navigate = useNavigate()
  // @ts-ignore
  const user = useSelector((state)=>state.users.users)

  const Buyhandler=(product)=>{
        if(!user){
          toast.error("Please login to buy items")
          navigate("/Login")
        }
  
        navigate(`/user/CheckOut/${product.id}`)
    
      }
   
  const AddQuantityHandler=(Id)=>{
    const copyuser= {...user, cart:[...user.cart]}
    const x = copyuser.cart.findIndex((c)=>c.product.id ==Id)
    if(x!==-1){
      const newQuantity = copyuser.cart[x].quantity + 1
      copyuser.cart[x]= {...copyuser.cart[x], quantity: newQuantity}
      // @ts-ignore
      dispatch(asyncupdateuser(copyuser, user.id))
    }

  }

  const SubstractQuantityHandler=(Id)=>{
      const copyuser= {...user, cart:[...user.cart]}
    const x = copyuser.cart.findIndex((c)=>c.product.id ==Id)
    if(x!==-1 && copyuser.cart[x].quantity > 1){
      const newQuantity = copyuser.cart[x].quantity - 1
      copyuser.cart[x]= {...copyuser.cart[x], quantity: newQuantity}
      // @ts-ignore
      dispatch(asyncupdateuser(copyuser, user.id))
    }
    else{
      copyuser.cart = copyuser.cart.filter((c)=>c.product.id !== Id)
      // @ts-ignore
      dispatch(asyncupdateuser(copyuser, user.id))
    }
  }

  const productdetailopen=(Id)=>{
    navigate(`/ProductDetails/${Id}`)
  }

  const RemoveHandler=(Id)=>{
      const copyuser= {...user, cart:[...user.cart]}
      copyuser.cart = copyuser.cart.filter((c)=>c.product.id !== Id)
      // @ts-ignore
      dispatch(asyncupdateuser(copyuser, user.id))
      toast.error("Item removed from cart")
  }
     

  const renderCart = user?.cart?.map((c)=>{
    return (
      <li 
      key={c.product.id} 
      className="list-none bg-gradient-to-r from-[rgb(63,73,50)] to-[rgb(40,48,30)]  mx-auto w-[70%] h-[13rem] my-5 flex items-stretch justify-start gap-8 rounded-lg overflow-hidden"
    >
      <div className="px-2 py-3">
      <img src={c.product.url} alt={c.product.title} className="w-50 h-[10rem] hover:scale-105 shadow-lg shadow-black/50 rounded object-cover" />
     
      <div className="flex items-center gap-3 mt-2">
  <button className="w-6 h-6 flex items-center justify-center bg-[rgb(199,230,90)] text-[rgb(67,78,50)] font-bold rounded-sm hover:opacity-80 transition-opacity"
  onClick={()=>{AddQuantityHandler(c.product.id)}}>
    +
  </button>
  <span className="text-white font-bold">{c.quantity}</span>

  <button className="w-6 h-6 flex items-center justify-center bg-[rgb(199,230,90)] text-[rgb(67,78,50)] font-bold rounded-sm hover:opacity-80 transition-opacity"
  onClick={()=>{SubstractQuantityHandler(c.product.id)}}>
    -
  </button>
</div>
     </div>

      <div className="mt-4 mr-2">
        <h1 className="text-2xl font-bold text-shadow-sm text-shadow-black text-[rgb(238,242,181)] ">{c.product.title}</h1>
        <p className="text-[rgb(238,242,181)] cursor-pointer hover:underline" onClick={()=>{productdetailopen(c.product.id)}}>{c.product.description?.slice(0, 90)}.....</p>
        <p className=" text-[rgb(222,234,60)] font-bold">MRP : <small className="line-through">${(Number(c.product.price) + 2000) * Number(c.quantity)}</small> <br /> <span className="text-xl text-bold text-shadow-lg">${(Number(c.product.price) * Number(c.quantity))}</span> <small>/only</small></p>

        <div className="flex items-center gap-6 mt-5">
          <button className="bg-[rgb(199,230,90)] text-[rgb(67,78,50)] font-bold px-3 py-2 rounded-sm hover:opacity-80 transition-opacity"
          onClick={()=>{Buyhandler(c.product)}}>
            Buy Now
          </button>
          <button className="bg-[rgb(199,230,90)] text-[rgb(67,78,50)] font-bold px-3 py-2 rounded-sm hover:opacity-80 transition-opacity"
          onClick={()=>{RemoveHandler(c.product.id)}}>
            Remove
          </button>
        </div>
        
      </div>
    </li>
    )
  })

  return (

    user?.cart?.length>0?
     (<div>{renderCart}</div>):(<><h1 className='text-2xl mt-6 ml-6 font-bold text-[rgb(238,242,181)]'>Your cart is empty...</h1>  <small className="text-[rgb(238,242,181)] ml-6 italic">Add items to you cart... <span className="text-[rgb(199,230,90)] shadow-lg font-bold cursor-pointer hover:underline" onClick={()=>{navigate('/Product')}}>view product</span></small></>)
  
  )
}

export default Cart