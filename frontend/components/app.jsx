import React from 'react';
import GreetingContainer from './greeting/greeting_container';
import SessionFormContainer from './session_form/session_form_container';
import { Route,
Redirect,
Switch,
Link,
HashRouter} from 'react-router-dom';
import {AuthRoute} from '../util/route_util';


const App = () => (
  <div>
    <h1>BenchBNB</h1>
    <GreetingContainer />
    <AuthRoute path="/login" component={SessionFormContainer} />
    <AuthRoute path="/signup" component={SessionFormContainer} />
  </div>
);


export default App;
