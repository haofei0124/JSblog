import * as constants from './constants';
import axios from 'axios';

export const login = (account, password) => {
  return (dispatch) => {
    axios.get('/api/login.json?account='+ account + '$password=' + password).then((res)=> {
      const result = res.data.data;
      if(result) {
        const action = {
          type: constants.CHANGE_LOGIN,
        }
        dispatch(action)
      }else{
        alert('登陆失败')
      }
    })
  }
}

export const logout = () => ({
    type: constants.CHANGE_LOGOUT
})