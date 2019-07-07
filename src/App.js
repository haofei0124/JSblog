import React, { Fragment } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import { GlobalStyle } from './style';
import { Iconfont } from './statics/iconfont/iconfont.js';
import Header from './common/header';
import Home from './pages/home';
import Detail from './pages/detail';
import Login from './pages/login'
import Write from './pages/write';
import store from './store';


class App extends React.Component {
  render() {
    return(
        <Fragment>
          <GlobalStyle />
          <Iconfont />
             <Provider store={store}>
                <BrowserRouter>
                    <Header />
                    <Route path='/shareBlog' exact component={Home} />
                    <Route path='/login' exact component={Login} />
                    <Route path='/write' exact component={Write} />
                    <Route path='/detail/:id' exact component={Detail} />
                </BrowserRouter>
            </Provider>
        </Fragment>
    );
  }
}
export default App;
