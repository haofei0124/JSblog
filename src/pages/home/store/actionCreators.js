import axios from 'axios';
import { constants } from './index';
import { fromJS } from 'immutable';

export const getHomeInfo = ()=> {
  return (dispatch)=> {
    axios.get('/api/home.json').then((res)=>{
      const result = res.data.data;
      const action = {
        type: constants.CHANGE_HOME_DATA,
        topicList: result.topicList,
        articleList: result.articleList,
        recommendList: result.recommendList
      }
      dispatch(action)
    })
  }
}

export const getMoreList = ()=> {
  return (dispatch) => {
    axios.get('/api/homeList.json').then((res)=> {
      const result = res.data.data
      console.log(result)
      const action = {
        type: constants.ADD_ARTICLE_LIST,
        list: fromJS(result)
      }
      dispatch(action)
    })
  }
  
}
export const toggleTopShow = (show)=> ({ 
    type: constants.TOGGLE_SCROLL_TOP,
    show
})

