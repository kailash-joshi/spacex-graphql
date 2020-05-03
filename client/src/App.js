import React from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import './App.css';
import Launches from './Launches';
import Launch from './Launch';
import logo from './spacex.png';

const client = new ApolloClient({
  uri: '/graphql'
});
function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div className="container">
          <img
            src={logo}
            alt="SpaceX"
            style={{ width: 300, display: 'block', margin: 'auto' }}
          />
          <h1 className='display-4 my-3'>Launches</h1>
          <Route exact path='/' component={Launches} />
          <Route exact path='/launch/:flight_number' component={Launch} />
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
