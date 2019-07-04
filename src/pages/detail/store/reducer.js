import * as constants from './constants';
import { fromJS } from 'immutable';

const defaultState = fromJS({
  title: '',
  content: ''
});

export default (state = defaultState, action) => {
  switch(action.type) {
    case constants.CHANGE_DETAIL:
      return state.merge({
        title: fromJS(action.detail.title),
        content: fromJS(action.detail.content)
      })
    default:
      return state;
  }
  
}
