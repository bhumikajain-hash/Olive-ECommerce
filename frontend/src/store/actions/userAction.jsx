

import axios from "../../api/axiosConfig";
import { loaduser, removeuser } from "../reducers/userSlice";

export const asynccurrentuser = ()=> async(dispatch, getState)=>{
    try {
       const user =  JSON.parse(localStorage.getItem("user"))
       if(user){
        dispatch(loaduser(user))
       }

    } catch (error) {
        console.error("Error registering user:", error)
    }
}

export const asynclogoutuser = (user)=> async(dispatch, getState)=>{
    try {
         localStorage.removeItem("user")
         dispatch(removeuser(user))
    } catch (error) {
        console.error("Error registering user:", error)
    }
}

export const asyncupdateuser = (user, id)=> async(dispatch, getState)=>{
    try{
       const res = await axios.patch("/users/"+id, user)
       localStorage.setItem("user", JSON.stringify(res.data))
        dispatch(asynccurrentuser())
    } catch(error){
        console.error("Error updating user:", error)
    }
}

export const asyncloginuser = (user) => async (dispatch) => {
    try {
        // Force username and password to be strings just in case
        const username = String(user.username).trim();
        const password = String(user.password).trim();
        // 1. Fetch the user
        const res = await axios.get(`/users?username=${username}&password=${password}`);

        // 2. Check if a user was actually found
        if (res.data.length > 0) {
            const userData = res.data[0];
            
            // 3. Save to localStorage
            localStorage.setItem("user", JSON.stringify(userData));
            
            // 4. Update Redux state so the app knows we are logged in
            dispatch(loaduser(userData));
        } else {
            console.error("Invalid username or password");
            // Optionally dispatch a login error action here
        }

    } catch (error) {
        console.error("Error logging in:", error);
    }
};

export const asyncregisteruser = (user)=> async(dispatch, getState)=>{
    try {
        const res = await axios.post("/users", user)
        console.log(res)
    } catch (error) {
        console.error("Error registering user:", error)
    }
}


        
