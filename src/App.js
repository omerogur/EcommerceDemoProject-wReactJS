import './App.css';
import ProductList from './components/ProductList';
import { Layout, Menu, Breadcrumb } from 'antd';
import Routing from './Routing';
import {Link} from 'react-router-dom'
import MenuCard from './components/MenuCard';
import { UserOutlined, LaptopOutlined, NotificationOutlined,ShopOutlined } from '@ant-design/icons';
import cartContext, { CartProvider } from './context/CartContex';
import { useContext } from 'react';

function App() {
  const { Header, Content, Footer,Sider  } = Layout
  const { SubMenu } = Menu;
  const {categories,setCategories} = useContext(cartContext)
  
  return (
    
    <div className="App">
      
      <Layout className="layout">
        <Header>
          <div className='logo' />
           <MenuCard/> {/* menucard component*/}
           
        </Header>
        <Layout>
      <Sider width={200} className="site-layout-background">
        <Menu
          mode="inline"
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          style={{ height: '100%', borderRight: 0 }} >
           <SubMenu key="sub1" icon={<ShopOutlined />} title="Categories">
            <Menu.Item key="1" onClick={()=> setCategories( "All")}> <Link to={"/all"} ></Link>All</Menu.Item>
            <Menu.Item key="2"><Link to={"/electronics"} onClick={()=> setCategories( "electronics")}></Link>Electronics</Menu.Item>
            <Menu.Item key="3"><Link to={"/jewelery"} onClick={()=> setCategories( "jewelery")}></Link>Jewelery</Menu.Item>
            <Menu.Item key="4"><Link to={"/mens"} onClick={()=> setCategories("men's clothing")}></Link>Men's clothing</Menu.Item>
            <Menu.Item key="5"><Link to={"/womens"} onClick={()=> setCategories( "women's clothing")}></Link>Women's clothing</Menu.Item>
          </SubMenu>
        </Menu>
      </Sider>
      <Layout style={{ padding: '0 24px 24px' }}>
        <Content
          className="site-layout-background"
          style={{
            padding: 24,
            margin: 0,
            minHeight: 280,
          }}
        >
          <div className="site-layout-content">
           <Routing/>  {/* routing component*/}
          </div>
        </Content>
      </Layout>
    </Layout>

        <Content style={{ padding: '0 50px' }}>
        
          
        </Content>
        <Footer style={{ textAlign: 'center', color: "red" }}>Ant Design ©2018 Created by Ant UED</Footer>
      </Layout>
    </div>
  
  );
}

export default App;
