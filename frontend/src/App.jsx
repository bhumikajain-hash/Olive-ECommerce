import { useEffect } from "react"
import Navbar from "./components/Navbar"
import Mainroutes from "./routes/Mainroutes"
import { asynccurrentuser } from "./store/actions/userAction"
import { useDispatch } from "react-redux"
import { asyncloadproduct } from "./store/actions/productAction"
import { useSelector } from "react-redux"

const App = () => {
  const dispatch = useDispatch()
  // @ts-ignore
  const user = useSelector((state)=>state.users.users)
  // @ts-ignore
  const product = useSelector((state)=>state.products.products)

  useEffect(()=>{
    // @ts-ignore
   !user && dispatch(asynccurrentuser())
    
  },[user])
  useEffect(()=>{
   
    // @ts-ignore
   product.length==0 && dispatch(asyncloadproduct())
    
  },[product])
  
  return (
    <div className="w-screen min-h-screen bg-[#181C14] text-[#ECDFCC] pt-20 px-10
     bg-[radial-gradient(ellipse_at_center,_#2A3326_0%,_#181C14_70%)]
     bg-fixed bg-cover bg-no-repeat">
  
      <Navbar />
      <br />
      <Mainroutes />
    </div>
  )
}

export default App
