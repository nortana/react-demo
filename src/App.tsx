import React from 'react';
import logo from './logo.svg';
//import './App.css';
import routers from './router/router';    // 路由文件
import { Routes, Link, Route } from 'react-router-dom';    // 路由插件

function App() {
  return (
    <div className="App App-header">
      {/* {
        routers.map((item, index) => (
          <Link to={item.path} key={index}> {item.name} </Link>
        ))
      }
      <br /> */}
      <Routes>
        {
          routers.map((item, index) => (
            <Route path={item.path} key={index} element={<item.components />}></Route>
          ))
        }
      </Routes>
 
    </div >

    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.tsx</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
