import { useNavigate, useParams} from "react-router-dom";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";

const Checkout = () => {
    const product = useParams()
    const navigate = useNavigate()
    // @ts-ignore
    const usercart = useSelector((state)=>state.users.users?.cart||[])

    // @ts-ignore
    const products = useSelector((state)=>state.products.products||[])

    const checkoutitem = products.find((p)=>p.id == product.id)

    const cartcheckout  = usercart.find((p)=>p.id == product.id)

   const finalQuantity = cartcheckout ? cartcheckout.quantity : 1;
   if (!checkoutitem) {
        return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
    }
    
    const placedorderhandler=()=>{
        toast.success("Thank you for shopping with us. Your order has been placed successfully! 🎉")
        toast.success("Your order will be delivered to you within 3-5 business days. 🚚")
        toast.success("Continue Shopping... 🛍️")
        navigate("/Product")
    }

    const actualPrice = (checkoutitem.price)*finalQuantity
    const discount = Math.round((actualPrice - checkoutitem.price)*100)/100
    const grandTotal = actualPrice - discount;
    
return (
    <div className="min-h-screen py-10 px-4">
      <div className="max-w-2xl mx-auto bg- bg-[rgb(47,57,40)] shadow-xl rounded-2xl overflow-hidden p-8">
        <div className="flex justify-between gap-5 mb-2">
            <div>
        <h1 className="text-4xl font-bold mb-6 ">Place Order Now...</h1>
        <p className="text-[rgb(238,242,181)] hover:underline cursor-pointer" onClick={()=>{navigate(`/ProductDetails/${checkoutitem.id}`)}}>{(checkoutitem.description).slice(0, 150)}...
        </p>

            </div>
        <img src={checkoutitem.url} alt={checkoutitem.title} className="w-50 h-[10rem] hover:scale-105 shadow-lg shadow-black/50 rounded object-cover" />
        </div>

        <h1 className="text-lg font-semibold mb-4 border-b pb-2">Select payment method:</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8" >
          <label className="flex items-center p-4 border rounded-xl cursor-pointer hover:bg-blue-50 hover:text-black transition-colors border-gray-200">
            <input type="radio" name="payment" className="w-4 h-4 text-orange-600" />
            <span className="ml-3 font-medium ">COD </span>
          </label>
          {["PhonePay", "Paytm", "GPay", "BHIM UPI"].map((method) => (
            <label key={method} className="flex items-center p-4 border rounded-xl cursor-pointer hover:bg-blue-50 hover:text-black transition-colors border-gray-200">
              <input type="radio" name="payment" className="w-4 h-4 text-blue-600" />
              <span className="ml-3 font-medium ">{method}</span>
            </label>
          ))}
        </div>

        <div className="bg-[rgb(68,81,58)] rounded-2xl p-6 border border-gray-100">
          <h1 className="text-2xl font-bold mb-4 ">Bill Summary:</h1>
          <ul className="space-y-3 ">
            <li className="flex justify-between ">
              <span className="font-bold text-lg">Product Name:</span> 
              <span className="font-semibold text-[18px]">{checkoutitem.title}</span>
            </li>
            <li className="flex justify-between text-sm">
              <span className="font-bold text-lg">Product Id:</span> 
              <span className="font-medium">#{checkoutitem.id}</span>
            </li>
            <li className="flex justify-between">
              <span className="font-bold text-lg">Quantity:</span> 
              <span className="font-medium">{finalQuantity}</span>
            </li>
            <li className="flex justify-between">
              <span className="font-bold text-lg">Actual Price:</span> 
              <span className="font-medium">₹{actualPrice}</span>
            </li>
            <li className="flex justify-between text-green-600 font-medium">
              <span className="font-bold text-lg">Discount:</span> 
              <span >- ₹{discount}</span>
            </li>
            <hr className="my-2 border-gray-300" />
            <li className="flex justify-between text-xl font-bold text-[rgba(222,234,60)]">
              <span>Grand Total:</span> 
              <span>₹{grandTotal}</span>
            </li>
          </ul>

          <button className="w-full mt-8 bg-[rgb(164,104,44)] hover:bg-[rgb(86,67,30)] text-[#ECDFCC] font-bold py-4 rounded-xl shadow-lg transform transition active:scale-95 uppercase tracking-wider" onClick={()=>{placedorderhandler()}}>
            Place Order
          </button>
        </div>
      </div>
    </div>
  );


};
export default Checkout