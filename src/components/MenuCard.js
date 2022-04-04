import React, { useContext } from 'react'
import {  Menu, Breadcrumb } from 'antd';
import {Link} from 'react-router-dom'
import {ShoppingCartOutlined} from "@ant-design/icons"
import cartContext from '../context/CartContex';
const MenuCard = () => {
  const {cart,setCart,setCategories} =useContext(cartContext)
  return (
    <div>
        <div className='logo'/>
          <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
            <Menu.Item onClick={()=> setCategories( "home")} key="1"  ><Link to={"/"} ></Link>Home</Menu.Item>
            <Menu.Item key="2"><Link to={"/about"}></Link>About</Menu.Item>
            <Menu.Item key="3"><Link to={"/orders"}></Link>Orders</Menu.Item>
            <Menu.Item key="4" className="test1" ><Link to={"/cart"}></Link> <ShoppingCartOutlined /> <span>{cart.length}</span></Menu.Item>
        
          </Menu>
    </div>
  )
}

export default MenuCard