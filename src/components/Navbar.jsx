import React, { useEffect, useState } from 'react'
import {Button,Menu,Typography,Avatar} from 'antd'
import { Link, useNavigate } from 'react-router-dom'
import { HomeOutlined,MoneyCollectOutlined,BulbOutlined,FundOutlined,MenuOutlined } from '@ant-design/icons'
import icon from '../images/cryptocurrency.png'
 const menuItems = [
        {
            key: 'home',
            icon: <HomeOutlined/>,
            label: 'Home',
            
        },
        {
            key: 'cryptocurrencies',
            icon: <FundOutlined/>,
            label: 'Cryptocurrencies',
        },
        {
            key: 'exchanges',
            icon: <MoneyCollectOutlined/>,
            label: 'exchanges',
        },
        {
            key: 'news',
            icon: <BulbOutlined/>,
            label: 'News',
            
        },
    ];
    
const Navbar = () => {
    let navigate = useNavigate();
   /*  function handleClick1() {
      navigate("/");
    }
    function handleClick2() {
        navigate("/cryptocurrencies");
      }
      function handleClick3() {
        navigate("/exchanges");
      }
      function handleClick4() {
        navigate("/news");
      } */
      const [activeMenu, setActiveMenu] = useState(true);
      const [screenSize, setScreenSize] = useState(undefined);

  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);

    window.addEventListener('resize', handleResize);

    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (screenSize <= 800) {
      setActiveMenu(false);
    } else {
      setActiveMenu(true);
    }
  }, [screenSize]);
  return (
    <div className='nav-container'>
        <div className='logo-container'>
            <Avatar src={icon} size="large"/>
            <Typography.Title level={3} className='Logo'>
                <Link to='/' style={{margin: '0px 10px'}}>Cryptoverse</Link>

            </Typography.Title>
            <Button className="menu-control-container" onClick={() => setActiveMenu(!activeMenu)}><MenuOutlined /></Button>
        </div>
        {activeMenu && (
       <Menu theme='dark' items={menuItems} onClick={(menuItem) => navigate(menuItem.key)}>
       {/* <Menu.Item icon={<HomeOutlined/>}>
           <Link to='/'>Home</Link>
       </Menu.Item>
       <Menu.Item icon={<FundOutlined/>}>
           <Link to='/cryptocurrencies'>Cryptocurrencies</Link>
       </Menu.Item>
       <Menu.Item icon={<MoneyCollectOutlined/>}>
           <Link to='/exchanges'>exchanges</Link>
       </Menu.Item>
       <Menu.Item icon={<BulbOutlined/>}>
           <Link to='/news'>News</Link>
       </Menu.Item> */}



   </Menu>
      )}
       
    </div>
  )
}

export default Navbar