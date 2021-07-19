import React from 'react'
import { HashRouter as Router, Route, Switch, useHistory } from 'react-router-dom'
import Nav from './Nav'
import Home from './Home'
import Projects from './Projects'
import Contact from './Contact'
import Blog from './Blog'
import Footer from './Footer'

const App = () => {
  return (
    <>
      <Router>
        <Route path='/'>
          <Nav
            author={'Aaron Emerson'}
            blog={'Blog'}
            projects={'Projects'}
          />
        </Route>
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route exact path='/Blog'>
            <Blog />
          </Route>
          <Route exact path='/Projects'>
            <Projects />
          </Route>
          <Route exact path='/Contact'>
            <Contact />
          </Route>
        </Switch>
        <Route path='/'>
          <Footer />
        </Route>
      </Router>
    </>
  )
}

export default App
