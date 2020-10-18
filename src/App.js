import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import HealthLogo from './Components/Navbar/health1.ico';

import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar1 from './Components/Navbar/Navbar1';
import SignIn from './Components/Routes/SignIn';
import SignUp from './Components/Routes/SignUp';
import Home from './Components/Routes/Home';


function App() {
  return (
    <div className="App">
        <Switch>
          <Route exact path="/" component={SignIn}/>
          <Route path="/signUp" component={SignUp}/>
          <Route path="/signIn" component={SignIn}/>
          <Route path="/" component={Navbar1}/>
       
        </Switch>
    </div>
  );
}

export default App;
