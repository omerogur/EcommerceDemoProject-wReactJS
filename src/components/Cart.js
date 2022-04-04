import React, { useContext, useEffect, useState } from 'react'
import cartContext from '../context/CartContex'
import { Card, Button, Col, Table } from "react-bootstrap"
import { baseServices } from '../network/service/baseService'
const Cart = () => {
  const { cart, setCart } = useContext(cartContext)
  const [cartTotal, setCartTotal] = useState(0)
  console.log(cart);

  const deleteCart = (id) => {
    let cartFilter = cart.find(q => q.id == id)
    if (cartFilter.quantity > 1) {
      cartFilter.quantity -= 1
      cartFilter.totalPrice = cartFilter.quantity * cartFilter.price
      console.log(cartFilter);
      console.log(cart);
      setCart([...cart])
    } else {
      const removeCart = cart.filter(item => {
        return item.id != id

      })
      setCart([...removeCart])
    }
  }


  const addOrder = async (data) => {
    try {
      console.log('Success:', data);
      for (let i = 0; i < data.length; i++) {
        const { category, id: productID, quantity, title, totalPrice, price } = data[i]
        let obj = { totalPrice, category, productID, quantity, title, customerName: "omer", price }
        console.log(obj);
        await baseServices.post('/orders', obj)
      }
    } catch (error) {
      console.log('Post Customer Error', error);
    }
    setCart([])
  };

  useEffect(()=>{
      handlePrice()
  },[])
  
  function handlePrice() {
      let total = 0
    for (let i = 0; i < cart.length; i++) {
          total += cart[i].totalPrice
        
        }
        setCartTotal(total)
        
      }
      
      

  
  return (
    <>
      <h1 style={{backgroundColor:"red"}}>SEPET PAGE</h1>
      {cart.length==0 ? <h1 style={{fontSize:"120px"}}>EMPTY</h1> : ""}
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Title</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Price</th>
            <th>TotalPrice</th>
          </tr>
        </thead>
        <tbody>
          {cart && cart.map((item, key) => {
            return <tr key={key}>
              <td>{item.title}</td>
              <td>{item.price}</td>
              <td>{item.quantity}</td>
              <td>{item.price}</td>
              <td>{item.totalPrice}</td>
              <td><Button variant="danger" onClick={() => deleteCart(item.id)}>Delete</Button></td>
            </tr>
          })}

        </tbody>
      </Table>

      <Button variant="success" onClick={() => addOrder(cart)}>Order</Button>{' '}
      <Button variant="danger" onClick={() => setCart([])}>Clear Cart</Button>
      <h2>Total Price : {cartTotal.toFixed(2)} $</h2>
    </>
  )
}

export default Cart