import { Route, Routes } from "react-router-dom"
import { lazy } from "react"
import UnAuthWrapper from "./UnAuthWrapper"
import CheckOut from "../pages/user/CheckOut"
const UserProfile = lazy(()=>import( "../pages/user/UserProfile"))
const ProductDetails = lazy(()=>import( "../pages/ProductDetails"))
const UpdateProduct = lazy(()=>import("../pages/admin/UpdateProduct"))
const CreateProduct = lazy(()=>import("../pages/admin/CreateProduct"))
const AuthWrapper = lazy(()=>import("./AuthWrapper"))
const Login = lazy(()=>import( "../pages/Login"))
const Register = lazy(()=>import("../pages/Register"))
const  Product = lazy(()=>import("../pages/Product"))
const  Cart = lazy(()=>import("../pages/Cart"))
const Home = lazy(()=>import("../pages/Home"))

const Mainroutes = () => {
  return (
    <Routes>

        <Route path="/" element={<Home />}/>
        <Route path="/Cart" element={<Cart />}/>
        <Route path="/Product" element={<Product />}/>
        <Route path="/productDetails/:id" element={<ProductDetails />}/>
        <Route path="/Register" element={<UnAuthWrapper><Register /></UnAuthWrapper>}/>
        <Route path="/Login" element={<UnAuthWrapper><Login /> </UnAuthWrapper>}/>
        //AuthWrapper is a protected route that means if someone try to go on these routes witout login manually typing url then they will navigate to other route as per given in authwrapper component
        <Route path="/user/UserProfile" element={<AuthWrapper><UserProfile /></AuthWrapper>} />
        <Route path="/user/CheckOut/:id" element={<AuthWrapper><CheckOut /></AuthWrapper>} />
        <Route path="/admin/CreateProduct" element={<AuthWrapper isadmin={true}><CreateProduct /></AuthWrapper>}/>
        <Route path="/admin/UpdateProduct/:id" element={<AuthWrapper isadmin={true}><UpdateProduct /></AuthWrapper>}/>
      

    </Routes>
  )
}

export default Mainroutes