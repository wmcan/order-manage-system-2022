import axios from 'axios';

axios.defaults.baseURL = 'http://open.duyiedu.com';

axios.interceptors.request.use(request => {
  request.params = {
    ...request.params,  //只添加不覆盖原有的配置
    appkey: 'ethjvx_1598688290595',
  }
  return request;
})

axios.interceptors.response.use(response => {
  if(response.status === 200) {
    return response.data;
  }

  return response;
})

export default axios;