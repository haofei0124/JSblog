import React from 'react';
import { connect } from 'react-redux';
import { CSSTransition } from 'react-transition-group';
import { actionCreators } from './store';
import { actionCreators as loginActionCreators } from '../../pages/login/store';
import { Link } from 'react-router-dom';
import {
  HeaderWrapper,
  Logo,
  Nav,
  SearchWrapper,
  NavItem,
  NavSearch,
  SearchInfo,
  SearchInfoTitle,
  SearchInfoSwitch,
  SearchInfoList,
  SearchInfoItem,
  Addition,
  Button
} from './style'


class Header extends React.Component {
  getListArea = (focused)=> {
    const { page, mouseIn, totalPage } = this.props;
    const newList = this.props.list.toJS();
    const pageList = [];

    if(newList.length) {
      for(let i = ((page-1) * 10); i < page * 10; i++ ) {
        pageList.push(
          <SearchInfoItem key={newList[i]}>{newList[i]}</SearchInfoItem>
        )
      }
    }


    if(focused || mouseIn) {
      return(
        <SearchInfo 
        onMouseEnter={this.props.handleMouseEnter}
        onMouseLeave={this.props.handleMouseLeave}        
        >
        <SearchInfoTitle>
          热门搜索
          <SearchInfoSwitch onClick={()=>{this.props.handleChangePage(page, totalPage)}}>
            <i className="iconfont spin">&#xe851;</i>
            换一批
          </SearchInfoSwitch>
        </SearchInfoTitle>
        <SearchInfoList>
          {
           pageList
          }
        </SearchInfoList>
      </SearchInfo>
      );
    }else{
      return null;
    }
  }
  
  render() {
    return(
      <div>
        <HeaderWrapper>
          <Link to="/">
          <Logo />
          </Link>
          <Nav>
            <NavItem className="left active">首页</NavItem>
            <NavItem className="left">下载App</NavItem>
            {
              this.props.login ? 
              <NavItem className="right" onClick={()=>{this.props.logout()}}>退出</NavItem> :
              <Link to="/login"><NavItem className="right">登陆</NavItem></Link>
            }
            <NavItem className="right">
              <i className="iconfont">&#xe636;</i>
            </NavItem>
            <SearchWrapper>
              <CSSTransition
                 in={this.props.focused}
                timeout={200}
                classNames="slide"
              >
            <NavSearch
              className={this.props.focused ? 'focused' : ''}
              onFocus={()=>{this.props.handleInputFocus(this.props.list)}}
              onBlur={()=>{this.props.handleInputBlur()}}
            >           
            </NavSearch>
            </CSSTransition>
            <i className={this.props.focused ? 'focused iconfont zoom' : 'iconfont zoom'}>&#xe623;</i>
           {this.getListArea(this.props.focused)}
            </SearchWrapper>
          </Nav>
          <Addition>
            <Link to="/write">
            <Button className="writting">
              <i className="iconfont">&#xe615;</i>
              写文章
            </Button>
            </Link>
            <Button className="reg">注册</Button>
          </Addition>
        </HeaderWrapper>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    // focused: state.header.focused   
    // focused: state.get('header').get('focused')   
    focused: state.getIn(['header', 'focused']),
    list: state.getIn(['header', 'list']),
    page: state.getIn(['header', 'page']),
    totalPage : state.getIn(['header', 'totalPage']),
    mouseIn: state.getIn(['header', 'mouseIn']),
    login: state.getIn(['login', 'login'])
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleInputFocus(list) {
      if(list.size <= 0) {
        dispatch(actionCreators.getList())
      }
      dispatch(actionCreators.searchFocus());
      // const action = actionCreators.searchFocus()
    },

    handleInputBlur() {
      // const action = actionCreators.searchBlur()
      dispatch(actionCreators.searchBlur());
    },

    handleMouseEnter() {
      dispatch(actionCreators.mouseEnter());
    },

    handleMouseLeave() {
      dispatch(actionCreators.mouseLeave());
    },

    handleChangePage(page, totalPage) {
      if(page < totalPage) {
        dispatch(actionCreators.changepage(page + 1));
      }else {
        dispatch(actionCreators.changepage(1));
      }
    },
    
    logout() {
      dispatch(loginActionCreators.logout())
    }

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);