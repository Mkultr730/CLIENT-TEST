import React, { Fragment, useState } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import './App.css';

import Header from './components/Header';
import User from './components/user/User';
import Area from './components/area/Area';


function App() {
  
  const [header, setHeader] = useState('User');

  return (
    <BrowserRouter>
      <Fragment>
        <Header title={header} setHeader={setHeader}/>
        <div className="container main-content">
            <div className="row body">
              <Switch>
                <Redirect from="/" to="/user" exact />
                <Route path="/user" component={User}></Route>
                <Route path="/area" component={Area}></Route>
              </Switch>
            </div>
        </div>
      </Fragment>
    </BrowserRouter>
  );
}

export default App;
