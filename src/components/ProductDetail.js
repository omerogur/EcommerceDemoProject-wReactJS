import React, { useContext } from 'react'
import { useLocation, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { baseServices } from '../network/service/baseService';
import { Card, Button, Col } from "react-bootstrap"
import cartContext from '../context/CartContex';
const ProductDetail = () => {

  let param = useParams()
  const [detail, setDetail] = useState()
   const {cart,setCart} = useContext(cartContext)

  useEffect(() => {
    getData()
  }, [])

  const getData = async () => {

    try {
      const data = await baseServices.get("/products/" + param.id)
      setDetail(data)

    } catch (error) {
      console.log("Categories list error", error);
    }
  }
  const addToCart= (product) => {
    let filter = cart.find(item => item.id==product.id)
    if(filter){
         filter.quantity += 1
         filter.totalPrice = (filter.quantity*filter.price).toFixed(3)
          setCart([...cart])
       
    }else{
    const {category,description,id,image,price,title} = product
    let newProduct = {category,description,id,image,price,title,quantity:1,totalPrice:price}
   setCart(prev => [...prev,newProduct])
}
console.log(cart);
}
  return (
    <div>
      <h1>Detail Page:</h1>

    {detail &&  <Card style={{ width: 240 }}>
        <Card.Img variant="top" src={detail.image} alt="asda" />
        <Card.Body>
          <Card.Title>{detail.title}</Card.Title>

          <Card.Subtitle style={{ paddingBottom: 20 }}><span className='price'>${detail.price} </span>

          </Card.Subtitle>
          <Button variant="primary"  onClick={() => addToCart(detail)}>Add to Cart</Button>
        </Card.Body>
      </Card>}
    </div>
  )
}

export default ProductDetail