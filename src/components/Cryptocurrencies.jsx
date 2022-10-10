import React, { useEffect, useState } from 'react'
import millify from 'millify'
import { Link } from 'react-router-dom'
import { Card,Row,Col,Input } from 'antd'
import { useGetCryptosQuery } from '../services/cryptoApi'

const Cryptocurrencies = (props) => {

  const count = props.simplified ? 10 : 100;
 // console.log(count)
  const {data: cryptoList, isFetching} = useGetCryptosQuery(count);
  const [cryptos,setCryptos]=useState([]);
  //console.log(cryptos)
  const [searchTerm, setSearchItem] = useState('');

  useEffect(()=>{
      setCryptos(cryptoList?.data?.coins)

      const filtered = cryptoList?.data?.coins.filter((coin)=> coin.name.toLowerCase().includes(searchTerm.toLowerCase()));
      setCryptos(filtered)
  },[searchTerm,cryptoList])




  if(isFetching) return 'Loading...'
  return (
    <>
     {!props.simplified ? <div className='search-crypto'>
        <Input placeholder='Search cryptocurrency' onChange={(e)=> setSearchItem(e.target.value)}/>
      </div> : null} 
      <Row gutter={[32,32]} className="crypto-card-container">
          {cryptos?.map((currency)=>(
            <Col xs={24} sm={12} lg={6} className="crypto-card" key={currency.uuid}>
              <Link to={`/crypto/${currency.uuid}`}>
                <Card title={`${currency.rank}. ${currency.name}`} extra={<img src={currency.iconUrl} className="crypto-image"/>} hoverable>
                    <p>Price: {Number(currency.price).toFixed(1)} $</p>
                    <p>Market Cap: {millify(currency.marketCap)}</p>
                    <p>Daily Change: {millify(currency.change)}%</p>

                </Card>
              </Link>
            </Col>
          ))}
      </Row>
      
    
    
    
    
    
    
    </>
  )
}

export default Cryptocurrencies