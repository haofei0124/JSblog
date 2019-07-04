import React from 'react';
import { connect } from 'react-redux';
import { RecommendWrapper, RecommendItem } from '../style'

class Recommend extends React.Component {
  render() {
    return(
      <RecommendWrapper>
        {
          this.props.list.map((item)=> {
            return(
              <RecommendItem key={item.get('id')} imgUrl={item.get('imgUrl')}/>
            );
          })
        }
      </RecommendWrapper>

    );
  }
}

const mapStateToProps = (state) => ({
  list: state.getIn(['home', 'recommendList'])
})

const mapDispatchToProps = (dispatch) => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(Recommend);