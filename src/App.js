import React from 'react';
import './index.css';
import PeopleContextProvider from './contexts/PeopleContextProvider';
import TableComponent from './components/TableComponent';
import Accaunt from './components/Accaunt';
import {BrowserRouter as Router, Route,Switch} from 'react-router-dom';
const App = () => {
  return (
    <Router>
      <div className="app">
          <PeopleContextProvider>
            <Switch>{/*Use Switch to display one component at a time */}
              <Route exact path="/" component={TableComponent}/>
              <Route path="/:_id" component={Accaunt}/>{/* :_id  is dynamic. It will change depending on user's id. Which accaunt to display ? => find =>:_id === user.id(implemented inside TableComponent)*/}
            </Switch>
          </PeopleContextProvider>
      </div>
    </Router>
  );
}
export default App;
