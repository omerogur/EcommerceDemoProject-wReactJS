import React, { useEffect, useState } from 'react'

const OrderList = () => {
  const [categoryList, setCategoryList] = useState([])
  useEffect(() => {
    getOrders()
  }, [])

  const getOrders = () => {
    fetch("https://northwind.vercel.app/api/orders")
      .then(response => response.json())
      .then(data => setCategoryList(prev => data.filter(item => item.customerName == "omer")))

  }
  console.log("orders:", categoryList);
  return (
    <div><h1>Orders Page</h1>
      <table>
        <tr>
          <th>ProductID</th>
          <th>Title</th>
          <th>Category</th>
          <th>Quantity</th>
          <th>Total Price</th>
        </tr>
        {categoryList.map((item, key) => {
          return <tr>
            <td>{item.productID}</td>
            <td>{item.title}</td>
            <td>{item.category}</td>
            <td>{item.quantity}</td>
            <td>{item.totalPrice}</td>
          </tr>
        })}
      </table>
    </div>

  )
}

export default OrderList