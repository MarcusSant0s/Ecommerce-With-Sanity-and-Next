import React, {createContext, useContext, useState, useEffect} from "react";
import toast from "react-hot-toast";

const Context = createContext();

export const StateContext = ({children}) =>{
    useState [showCart, setShowCart] = useState(false);
    const [cartItems, setCartItems] = useState();
    
}