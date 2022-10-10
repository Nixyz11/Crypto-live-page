import './App.css';
import {Routes, Route, Link, Navigate} from 'react-router-dom'
import {Layout,Typography,Space} from 'antd'
import {Navbar, Exchanges,Homepage,Cryptocurrencies,News,Cryptodetails } from './components';




function App() {
  return (
    <div className='app'>
      <div className='navbar'>
        <Navbar/>
      </div>
      <div className='main'>
        <Layout>
          <div className='routes'>
            <Routes>
              <Route path='/home' element={<Homepage />}>
                
              </Route>
              <Route path='/exchanges' element={<Exchanges />}>
               
              </Route>
              <Route path='/cryptocurrencies' element={<Cryptocurrencies simplified={false}/>}>
                
              </Route>
              <Route path='/crypto/:coinId' element={<Cryptodetails />}> 
               
              </Route>
              <Route path='/news' element={ <News simplified={false}/>}>
               
              </Route>
              <Route
                path="/"
                  element={<Navigate to="/home" replace />}
                          />
            </Routes>
          </div>
        </Layout>
    
      <div className='footer' >
        <Typography.Title level={5} style={{color: 'white',textAlign: 'center'}}>
          Cryptoverse <br/>
          All rights reserved
        </Typography.Title>
        <Space>
          <Link to="/home">Home</Link>
          <Link to="/exchanges">Exchanges</Link>
          
          <Link to="/news">News</Link>
        </Space>
        </div>
      </div>
    </div>
  );
}

export default App;
