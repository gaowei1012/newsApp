import React, { Component } from 'react';
import NavTop from './components/navTop'
import './App.less';
import Recommend from './pages/recommend';
import FotTabBar from './components/tabBar'



class App extends Component {
  render() {
    return (
      <div>
        {/* navTop */}
        <div>
          <NavTop />
        </div>
        <div>
          {/* 路由 */}
          {/* {this.props.children} */}
          <Recommend />
        </div>
        <div style={{width: '100%', height: '40px'}}>
          {/* <FotTabBar /> */}
        </div>
      </div>
    );
  }
}

export default App;
