import React from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom';
// Components
import Navbar from './components/Navbar/Navbar';

import Login from './views/Login/Login';
import Home from './views/Home/Home';

const App = () => {
  return (    
    <BrowserRouter>
      <header>
        <Navbar />
      </header>
      <main>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
        </Switch>
      </main>
    </BrowserRouter>
  )
}

export default App
