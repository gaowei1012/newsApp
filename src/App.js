import React, { Component } from 'react';
import NavTop from './components/navTop'
import './App.less';



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
          content
        </div>
      </div>
    );
  }
}

export default App;
