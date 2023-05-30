import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import Navbar from './components/Navbar';
import Hero from './context/pages/Hero';
import Nhl from './components/Nhl';
import Cards from './components/Cards';
import Foo from './components/Foo';
import { UserProvider } from './context/usercontext';
import Private from './context/pages/Private/Private';
import PrivateHero from './context/pages/Private/PrivateHero/PrivateHero';
import Caca from './components/Caca';

function App() {
  return (
    <UserProvider>
      <div>
        <Router>
          <Navbar />
          <Switch>
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <Private exact path="/private" component={Private} />
            <Private exact path="/private/private-acceuil" component={PrivateHero} />
            
            <Route path="/" component={Hero} />
          </Switch>
          <Nhl />
          
          <Switch>
            
          <Route path="/caca" component={Caca} />
          <Route path="/" component={Cards} />
          </Switch>
          <Foo />
        </Router>
      </div>
    </UserProvider>
  );
}

export default App;
