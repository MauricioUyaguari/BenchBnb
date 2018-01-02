import React from 'react';
import GreetingContainer from './greeting/greeting_container';
import SessionFormContainer from './session_form/session_form_container';
import { Route,
Redirect,
Switch,
Link,
HashRouter} from 'react-router-dom';



const App = () => (
  <div>
    <h1>BenchBNB</h1>
    <GreetingContainer />
    <Route path="/login" component={SessionFormContainer} />
    <Route path="/signup" component={SessionFormContainer} />
  </div>
);


export default App;
