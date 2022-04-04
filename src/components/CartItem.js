import React, { useContext,useState } from 'react'
import ProductList from './ProductList'
import {Card,Button, Col} from "react-bootstrap"
import { StarOutlined  } from '@ant-design/icons'
import { useNavigate } from 'react-router-dom';
import cartContext from '../context/CartContex';
const CartItem = ({ product }) => {
       
    let navigate = useNavigate()
    const {cart,setCart} = useContext(cartContext)

     const {rating} = product
     let obj = {
         rate:rating.rate
     }
    
     const goDetail = (id) => {
         navigate(`/cart/${id}`)
     }
     
     const addToCart= (product) => {
         let filter = cart.find(item => item.id==product.id)
         if(filter){
              filter.quantity += 1
              filter.totalPrice = (filter.quantity*filter.price)
               setCart([...cart])
            
         }else{
         const {category,description,id,image,price,title} = product
         let newProduct = {category,description,id,image,price,title,quantity:1,totalPrice:price}
        setCart(prev => [...prev,newProduct])
    }
    console.log(cart);
    }
 
    return (
        <Col >
         <Card style={{ width: 240 }} >
              <Card.Img onClick={() => goDetail(product.id)} variant="top" src={product.image} alt="asda" />
             <Card.Body>
                 <Card.Title>{product.title}</Card.Title>
                 <Card.Subtitle style={{paddingBottom:20}}><span  className='price'>${product.price} </span>
                  <h2><span className='badge bg-info'>Rating {obj.rate} <StarOutlined style={{verticalAlign:"unset" }} /></span></h2>
                {/* <div>Rating : {obj.rate} <StarOutlined style={{verticalAlign:"unset" }} /> </div> */}
                 </Card.Subtitle>
                 <Button variant="primary" onClick={() => addToCart(product)}>Add to Cart</Button>
             </Card.Body>
          </Card>
          </Col>
      

    )
}

export default CartItem