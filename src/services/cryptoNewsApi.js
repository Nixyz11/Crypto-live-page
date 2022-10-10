import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

const cryptoNewsHeaders = {
    'X-BingApis-SDK': 'true',
    'X-RapidAPI-Key': '1291be3fdemshdcd77ce5b25c8c5p199394jsn65dfda105ce1',
    'X-RapidAPI-Host': 'bing-news-search1.p.rapidapi.com'
  }
  const baseUrl = 'https://bing-news-search1.p.rapidapi.com';
const createRequest = (url) => ({
  url, headers: cryptoNewsHeaders
})

export const cryptoNewsApi = createApi({
    reducerPath: 'cryptoNewsApi',
    baseQuery: fetchBaseQuery({baseUrl}),
    endpoints: (builder) =>({
      getCryptoNews: builder.query({
        query: ({newsCategory,count}) => createRequest(`/news/search?q=${newsCategory}&safeSearch=Off&textFormat=Raw&freshness=Day&count=${count}`)
      })
    
    
    })
  })
  
  
  export const {
    useGetCryptoNewsQuery,
  
  } = cryptoNewsApi;