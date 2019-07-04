import * as constants from './constants';
import { fromJS } from 'immutable';

const defaultState = fromJS({
  topicList: [],
  articleList: [],
  recommendList: [],
  showScroll: false
});

export default (state = defaultState, action) => {
  switch(action.type) {
    case constants.CHANGE_HOME_DATA:
      return state.merge({
        topicList: fromJS(action.topicList),
        articleList: fromJS(action.articleList),
        recommendList: fromJS(action.recommendList)
      });
    case constants.TOGGLE_SCROLL_TOP:
      return state.set('showScroll', action.show);  
    default:
      return state;
  }
  
}
