import React from 'react';
import { connect } from 'react-redux'
import { actionCreators } from './store'
import { 
  DetailWrapper,
  Header,
  Content
} from './style'

class Detail extends React.Component {
  render() {
    return(
      <DetailWrapper>
        <Header>
          {this.props.title}
        </Header>
        <Content dangerouslySetInnerHTML={{__html: this.props.content}} />
      </DetailWrapper>
    );
  }
  componentDidMount() {
    this.props.getDetail(this.props.match.params.id);
  }
}

const mapStateToProps = (state) => ({
  title: state.getIn(['detail', 'title']),
  content: state.getIn(['detail', 'content']),
  imgUrl: state.getIn(['detail', 'imgUrl'])
})

const mapDispatchToProps = (dispatch) => ({
  getDetail(id){
    dispatch(actionCreators.getDetail(id))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Detail);