import React from 'react';
import { connect } from 'react-redux'
import { 
  TopicWrapper,
  TopicItem
} from '../style.js'

class Topic extends React.Component {
  render() {
    return(
      <TopicWrapper>
          {
            this.props.list.map((item)=> {
              return(
                <TopicItem key={item.get('id')}>
                  <img 
                    className="topic-pic"
                    src={item.get('imgUrl')} alt="" />
                    {item.get('title')}
                </TopicItem>  
              )
            })
          }
        
      </TopicWrapper>
    );
  }
}

const mapStateToProps = (state) => ({
  list: state.getIn(['home', 'topicList'])
})

const mapDispatchToProps = (dispatch)=> ({

})

export default connect(mapStateToProps, mapDispatchToProps)(Topic);