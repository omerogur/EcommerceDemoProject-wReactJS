import React, { useEffect, useState,useContext } from 'react'
import { Row } from 'react-bootstrap'
import cartContext from '../context/CartContex'
import {baseServices} from '../network/service/baseService'
import CartItem from './CartItem'




const ProductList = () => {
  const [product, setProduct] = useState([])
  const [staticdata, setStaticdata] = useState([])
  const {categories,setCategories} = useContext(cartContext)
  const {status,setStatus} = useContext(cartContext)
  const [refresh,setRefresh] = useState(true)
  useEffect (() => {
      getData()
    console.log("data test");
    console.log("status:",status);
  }, [])

  const getData = async () => {

    try {
      const data = await baseServices.get("/products")
      setProduct(data)
      setStaticdata(data)
      setStatus(prev => !prev)
     ;
      console.log("update");
    } catch (error) {
      console.log("Categories list error", error);
    }
  }
  console.log("new Status ::",status)
  useEffect(() =>{
    if(categories=="All"){
      setStaticdata(product)  
    }else if(categories=="jewelery"){
      const categoryFilter =product.filter(item=> item.category == "jewelery")
      setStaticdata(categoryFilter)
    }else if(categories=="electronics"){
      const categoryFilter =product.filter(item=> item.category == "electronics")
      setStaticdata(categoryFilter)
    }else if(categories=="men's clothing"){
      const categoryFilter =product.filter(item=> item.category == "men's clothing")
      setStaticdata(categoryFilter)
    }else if(categories=="women's clothing"){
      const categoryFilter =product.filter(item=> item.category == "women's clothing")
      setStaticdata(categoryFilter)
    }else if(categories=="home"){
      setStaticdata(product.slice(0,10))
      console.log("product:",product);
    }
    console.log(categories);
  },[categories,status])
  
  
  
  return (

    <div>
    <Row >
    
      {staticdata ? staticdata.map((item, key) => {
          
          return <CartItem key={key} product={item} />
        }) : console.log("data yok")}
    </Row>

</div>

  )
}

export default ProductList