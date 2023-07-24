//this services for making http requests and send data back and send data to local storage

import axios from 'axios'

const API_URL = '/api/users/'


// //register user
// const register = async(userData)=>{
//     const response = await axios.post(API_URL , userData) // send user data with api url 

//     if(response.data){ // in axios all requested data will be inserted in to inbuilt variable called data 
//         localStorage.setItem('user', JSON.stringify(response.data))
//     }

//     return response.data
// }

// Register user
const register = async (userData) => {
    const response = await axios.post(API_URL, userData)
  
    if (response.data) {
      localStorage.setItem('user', JSON.stringify(response.data))
    }
  
    return response.data
  }

  //login user
const login = async (userData) => {
    const response = await axios.post(API_URL + 'login', userData)
  
    if (response.data) {
      localStorage.setItem('user', JSON.stringify(response.data))
    }
  
    return response.data
  }

  //logout user
  const logout = ()=>{
    localStorage.removeItem('user')
  }

const authService ={
    register,
    logout,
    login,

}

export default authService