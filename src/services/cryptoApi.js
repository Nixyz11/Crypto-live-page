import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

const cryptoApiHeaders = {
  'X-RapidAPI-Key': '1291be3fdemshdcd77ce5b25c8c5p199394jsn65dfda105ce1',
  'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
}
const baseUrl = 'https://coinranking1.p.rapidapi.com';
const createRequest = (url) => ({
  url, headers: cryptoApiHeaders
})


export const cryptoApi = createApi({
  reducerPath: 'cryptoApi',
  baseQuery: fetchBaseQuery({baseUrl}),
  endpoints: (builder) =>({
    getCryptos: builder.query({
      query: (count) => createRequest(`/coins?limit=${count}`)
    }),
    getCryptoDetails: builder.query ({
      query: (coinId) => createRequest(`/coin/${coinId}`)

    }),
    getCryptoHistory: builder.query ({
      query: ({coinId,timePeriod}) => createRequest(`/coin/${coinId}/history/${timePeriod}`)

    })
  
  
  })
})


export const {
  useGetCryptosQuery,
  useGetCryptoDetailsQuery,
  useGetCryptoHistoryQuery 

} = cryptoApi;

/* const options = {
    method: 'GET',
    url: 'https://coinranking1.p.rapidapi.com/coins',
    headers: {
        'X-RapidAPI-Key': '1291be3fdemshdcd77ce5b25c8c5p199394jsn65dfda105ce1',
        'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
      }
}; */
