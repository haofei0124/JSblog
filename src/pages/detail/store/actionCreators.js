import axios from 'axios';
import * as constants from './constants';

export const getDetail = (id)=> {
  return (dispatch) => {
    axios.get('/api/detail.json?id=' + id).then((res)=> {
      const detail = res.data.data;
      const action = {
        type: constants.CHANGE_DETAIL,   
        detail    
      }
      dispatch(action)
    })
  }
}