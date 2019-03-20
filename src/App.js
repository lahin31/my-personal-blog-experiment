import React, {Fragment} from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Toggle from './components/Toggle'
import './App.scss';

import IndexPage from './pages/IndexPage'
import PostPage from './pages/PostPage'

function App() {
  return (
    <Router>
      <div className="root-container">
        <div className="app">
          <Route exact path="/" component={IndexPage} />
          <Route path="/post/:id" component={PostPage} />
        </div>
      </div>
    </Router>
  );
}

export default App;
