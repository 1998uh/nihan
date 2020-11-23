// import axios from './fetch'

// export function fetchRegist(data) {
//   return axios({
//     url: '/data/index',
//     method: 'POST',
//     data
//   })
// }

// export function fetchLogin(data) {
//   return axios({
//     url: '/user/login',
//     method: 'POST',
//     data
//   })
// }

// export function fetchAllCates(params) {
//   return axios({
//     url: '/jd/cates',
//     method: 'GET',
//     params
//   })
// }


// export function fetchGoodUpdate(data) {
//   return axios({
//     url: '/jd/good/update',
//     method: 'POST',
//     data
//   })
// }

// export function fetchGoodList(params) {
//   return axios({
//     url: '/jd/good/list',
//     method: 'GET',
//     params
//   })
// }

// // 添加广告
// export function fetchAdAdd(data) {
//   return axios({
//     url: '/ad/add',
//     method: 'POST',
//     data
//   })
// }
// export function fetchAdList(params) {
//   return axios({
//     url: '/ad/list',
//     method: 'GET',
//     params
//   })
// }

// export default {
//   fetchRegist,
//   fetchLogin,
//   fetchAllCates,
//   fetchGoodUpdate,
//   fetchGoodList,
//   fetchAdAdd,
//   fetchAdList
// }
import axios from 'axios'
 
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'
 
// 请求拦截器
axios.interceptors.request.use(function(config) {
    return config;
  }, function(error) {
    return Promise.reject(error);
  })
  // 响应拦截器
axios.interceptors.response.use(function(response) {
  return response;
}, function(error) {
  return Promise.reject(error);
})
 
// 封装axios的post请求
export function fetch(url, params) {
  return new Promise((resolve, reject) => {
    axios.post(url, params)
      .then(response => {
        resolve(response.data);
      })
      .catch((error) => {
        reject(error);
      })
  })
}
 
export default {
  mockdata(url, params) {
    return fetch(url, params);
  },

}
