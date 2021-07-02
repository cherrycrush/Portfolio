import React from 'react'
import { HashRouter as Router, Route, Switch, useHistory } from 'react-router-dom'
import Nav from './Nav'
import Home from './Home'
import Projects from './Projects'
import Contact from './Contact'

const App = () => {
  return (
    <>
      <Router>
        <Route path='/'>
          <Nav author={'Aaron Emerson'}/>
        </Route>
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route exact path='/Projects'>
            <Projects />
          </Route>
          <Route exact path='/Contact'>
            <Contact />
          </Route>
        </Switch>
      </Router>
    </>
  )
}

export default App
