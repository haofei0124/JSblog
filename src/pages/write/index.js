import React from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

class Login extends React.Component {
  render() {
    if(this.props.loginStatus){
      return(
        <div>写文章页面</div>
      ); 
    }else {
      return <Redirect to="/login" />
    }
  }
}

const mapStateToProps = (state) => ({
  loginStatus: state.getIn(['login', 'login'])
})

const mapDispatchToProps = (dispatch) => ({ 
  
})

export default connect(mapStateToProps, mapDispatchToProps)(Login)