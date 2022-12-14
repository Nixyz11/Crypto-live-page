import React, { useState } from 'react'
import { Select, Typography, Row, Col, Avatar, Card } from 'antd'
import moment from 'moment/moment'
import { useGetCryptoNewsQuery } from '../services/cryptoNewsApi'
import { useGetCryptosQuery } from '../services/cryptoApi';
import { current } from '@reduxjs/toolkit';
const {Text, Title} = Typography;
const {Option} = Select;
 const demoImage = 'https://www.bing.com/th?id=OVFT.mpzuVZnv8dwIMRfQGPbOPC&pid=News';

const News = (props) => {
  const [newsCategory, setCategory]=useState('Cryptocurrency')
  const {data} = useGetCryptosQuery(100);
  const {data: cryptoNews} = useGetCryptoNewsQuery({ newsCategory,count: props.simplified ? 6 : 12})
  if(!cryptoNews?.value) return 'Loading...'
  
  return (
    <Row gutter={[24,24]}>
      {!(props.simplified) && (
        <Col span={24}>
          <Select
          className='select-news' showSearch placeholder="Select a crypto" optionFilterProp='children' onChange={(v => setCategory(v))} filterOption={(input,option)=> option.children.toLowerCase().indexOf(input.toLowerCase())>=0}> 
            <Option value="Cryptocurrency">Cryptocurrency</Option>
            {data?.data?.coins.map((coin,i)=> <Option key={i} value={coin.name}>{coin.name}</Option>)}
          </Select>
        </Col>
      )}
        {cryptoNews.value.map((news,i)=>(
          <Col xs={24} sm={12} lg={8} key={i}>
            <Card hoverable className='news-card' key={i}>
              <a href={news.url} target="_blank" rel="norefferer">
                  <div className='news-image-container'>
                      <Title className='news-title' level={4}>{news.name}</Title>
                      <img style={{maxwidth: '200px',maxHeight: '100px'}} src={news?.image?.thumbnail?.contentUrl || demoImage} alt="news"/>
                  </div>
                  <p>
                    {news.description > 100 ? `${news.description.substring(0,100)}...` : news.description}

                  </p>
                  <div className='provider-container'>
                    <Avatar src={news.provider[0]?.image?.thumbnail?.contentUrl || demoImage} alt="News"/>
                    <Text className='provider-name'>{news.provider[0]?.name}</Text>
                  </div>
                  <Text>{moment(news.datePublished).startOf('ss').fromNow()}</Text>
              </a>
            </Card>
          </Col>
        ))} 
    </Row>
  )
}

export default News