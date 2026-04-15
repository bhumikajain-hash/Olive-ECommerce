import axios from "../../api/axiosConfig"
import { toast } from "react-toastify"
import { loadproduct } from "../reducers/productSlice"

export const asyncloadproduct = () => async (dispatch) => {
    try {
        const {data} = await axios.get("/products")
        dispatch(loadproduct(data))
    } catch(error){
        toast.error("Failed to load product")
    }
}

export const asynccreateproduct = (product) => async (dispatch) => {
    try {
        await axios.post("/products", product)
        dispatch(asyncloadproduct())
    } catch(error){
        toast.error("Failed to create product")
    }
}

export const asyncupdateproduct = (product, id) => async (dispatch) => {
    try {
        await axios.patch("/products/"+id, product)
        dispatch(asyncloadproduct())
    } catch(error){
        toast.error("Failed to update product")
    }
}

export const asyncdeleteproduct = (id) => async (dispatch) => {
    try {
        await axios.delete("/products/"+id)
        dispatch(asyncloadproduct())
    } catch(error){
        toast.error("Failed to delete product")
    }
}