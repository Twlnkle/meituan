import React from 'react';
import Main from './mainPage/Main';
import Order from './mainPage/order.jsx';
import Detail from './mainPage/menu_detail';
import My from './mainPage/my.jsx';
import Neardetail from "./mainPage/neardetail";
import { BrowserRouter as Router, Route } from 'react-router-dom';


function App() {
  return (
    <div className="App">

      <Router>
        <Route exact path="/" component={Main}></Route>
        <Route path="/order" component={Order}></Route>
        <Route path="/my" component={My}></Route>
        <Route path="/detail/:code" component={Detail}></Route>
        <Route path="/neardetail" component={Neardetail}></Route>
      </Router>
    </div>
  );
}

export default App;
