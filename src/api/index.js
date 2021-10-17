
import axios from 'axios'
import router from '../router'
const DOMAIN = 'http://localhost:3000'
const UNAUTORIZED = 401
const onUnautorized  = () => {
  router.push('/login')
}


const request = (method, url, data) => {
  return axios({
    method,
    url:DOMAIN + url,
    data
  })
  .then(result => result.data)
  .catch(result => {
    const {status} = result.response
    console.log('status ', result)
    if(status === UNAUTORIZED ) return onUnautorized()
    throw Error(result)
  })
}

export const setAuthInHeader = token => {
  axios.defaults.headers.common['Authorization'] = token ? `Bearer ${token}` : null;
}

export const board = {
  fetch(){
    return request('get', '/boards')
  }
}

export const auth = {
  login(email, password){
    return request('post', '/login', {email,  password})
  }
}