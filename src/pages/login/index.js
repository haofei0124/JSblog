import React from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { actionCreators } from './store'
import { 
  LoginWrapper,
  LoginBox,
  Input,
  Button
} from './style.js'

class Login extends React.Component {
  render() {
    if(!this.props.loginStatus) {
      return(
        <LoginWrapper>
          <LoginBox>  
            <Input placeholder="账号" ref={(input)=>{this.account = input}}/>
            <Input placeholder="密码" type="password" ref={(input)=>{this.password = input}}/>
            <Button onClick={()=>{this.props.login(this.account, this.password)}}>登陆</Button>
          </LoginBox>
        </LoginWrapper>
      );
    }else{
      return <Redirect to="/" />
    }
  
  }

}

const mapStateToProps = (state) => ({
  loginStatus: state.getIn(['login', 'login'])
})

const mapDispatchToProps = (dispatch) => ({ 
  login(accountElem, passwordElem) {
    // console.log(accountElem.value, passwordElem.value)
    dispatch(actionCreators.login(accountElem.value, passwordElem.value))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Login)