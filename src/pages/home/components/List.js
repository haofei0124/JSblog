import React from 'react';
import { connect } from 'react-redux';
import { actionCreators } from '../store'
import { Link } from 'react-router-dom'
import {
  ListItem,
  ListInfo,
  LoadMore
} from '../style'

class List extends React.Component {
  render() {
    const { getMoreList } = this.props;
    return(
      <div>      
        {
          this.props.list.map((item, index)=> {
            return(
              <Link key={index} to={'/detail/' + item.get('id')}>
            <ListItem key={index}>
            <img 
            className="pic"
            src={item.get('imgUrl')} alt="" />
            <ListInfo>
              <h3 className="title">{item.get('title')}</h3>
              <p className="desc">{item.get('desc')}</p>
            </ListInfo>
          </ListItem>
          </Link>
            );
          })
        }
        <LoadMore onClick={getMoreList()}>更多文字</LoadMore>      
      </div>    
    );
  }
}

const mapStateToProps = (state)=> ({
  list: state.getIn(['home', 'articleList'])
})

const mapdispatchToProps = (dispatch)=> ({
  getMoreList() {
    dispatch(actionCreators.getMoreList())
  }
})

export default connect(mapStateToProps, mapdispatchToProps)(List);