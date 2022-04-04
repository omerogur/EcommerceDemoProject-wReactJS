import { createContext, useState } from "react";

const cartContext = createContext(null)


export const CartProvider = ({children}) =>{

  const [cart, setCart] = useState([])
  const [categories, setCategories] = useState("home")
  const [status , setStatus] = useState(true)
  
  const values = {cart,setCart,categories,setCategories,status,setStatus}

  return  <cartContext.Provider value={values} >{children}</cartContext.Provider>
}

export default cartContext;