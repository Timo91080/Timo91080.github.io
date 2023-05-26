 import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'; //pour se rediriger vers la page de connexion
import Login from './components/Login';
import Register from './components/Register';
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Nhl from './components/Nhl'
import Cards from './components/Cards'
import Foo from './components/Foo'



function App () {
  // Pour se rediriger vers la page de connexion ligne 17-25
  return (
    <div>
  <Router>
    <Navbar/>
         <Switch> 
   <Route path="/login" component={Login} />    
   <Route path="/register" component={Register} />   
        </Switch>
   </Router> 
     

     <Hero></Hero>
      <Nhl></Nhl>
      <Cards></Cards>
     <Foo></Foo>
     
     

     
    </div>
  )
}

export default App
