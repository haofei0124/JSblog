import React from 'react';
import { connect } from 'react-redux';
import Topic from './components/Topic';
import List from './components/List';
import Recommend from './components/Recommend';
import Writer from './components/Writer';
import { actionCreators } from './store'
import { 
  HomeWrapper,
  HomeLeft,
  HomeRight,
  BackTop
} from './style.js'

class Home extends React.Component {
  render() {
    return(
        <HomeWrapper>
          <HomeLeft>
            <img 
              className='banner-img'
            src="//upload.jianshu.io/admin_banners/web_images/4660/224da83c76e01d5deff07e163615921233af5c82.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540" alt=""/>
            <Topic></Topic>
            <List></List>
          </HomeLeft>
          <HomeRight>
            <Recommend></Recommend>
            <Writer></Writer>
          </HomeRight>
          {
            this.props.showScroll ? <BackTop onClick={()=>{this.handleScrollTop()}}>回到顶部</BackTop> : null
          }
          
        </HomeWrapper>
    );
  }
  handleScrollTop() {
    window.scrollTo(0, 0)
  }
  
  // componentDidMount() {
  //   this.props.changeHomeData();
  //   this.bindEvents();
  // }
  // bindEvents(){
  //   window.addEventListener('scroll', this.props.changeScrollTopShow())
  // }

  componentDidMount() {
    this.props.changeHomeData();
    this.bindEvents();
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.props.changeScrollTopShow)
  }

  bindEvents() {
    window.addEventListener('scroll', this.props.changeScrollTopShow)
  }
}

const mapStateToProps = (state) => {
  return{
    showScroll: state.getIn(['home', 'showScroll'])
  } 
}

const mapDispatchToProps = (dispatch) => {
  return{   
    changeHomeData(){
      const action = actionCreators.getHomeInfo();
      dispatch(action)
    },
    changeScrollTopShow() {
      if (document.documentElement.scrollTop > 100) {
        dispatch(actionCreators.toggleTopShow(true))
      }else{
        dispatch(actionCreators.toggleTopShow(false))
      }
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Home)