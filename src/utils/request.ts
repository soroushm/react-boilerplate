import axios from 'axios'

const errorHandler = (error) => {
  if (error.message.includes('Network Error')) {
    return Promise.reject({
      code: 520,
      message: 'Network Error',
      details: error,
    })
  }
  if (error.message.includes('timeout') || error.message.includes('Cancel')) {
    return Promise.reject({
      code: 504,
      message: 'Time out',
      details: error,
    })
  }

  return Promise.reject(error)
}
export default (store) => {
  const headers = {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    'Accept-Language': 'fa',
    authorization: '',
  }
  // example to get token from store and add to header
  // const { accessToken } = store.auth
  // if (token && token.accessToken) {
  //   headers.authorization = `${accessToken}`
  // }
  const options = {
    baseURL: 'http://youDomain.com/api',
    timeout: 5000,
    headers,
    data: {},
    maxContentLength: 20000,
  }
  const request = axios.create(options)

  //axios interceptors for custom logic

  request.interceptors.request.use((req) => {
    if (process.env.NODE_ENV !== 'production') {
      console.log('api req', req)
    }
    return req
  })

  request.interceptors.response.use((res) => {
    if (process.env.NODE_ENV !== 'production') {
      console.log('api res', res)
    }
    return res
  }, errorHandler)

  return request
}
