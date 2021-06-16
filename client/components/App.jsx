import React from 'react'
import { HashRouter as Router, Route, Switch } from 'react-router-dom'
import Nav from './Nav'
import Home from './Home'

const App = () => {
  return (
    <div>
      <Router >
        <Route path={'/'} component={Nav} />
        <Switch>
          <Route exact path={'/'} component={Home} />
        </Switch>
      </Router>
    </div>
  )
}

export default App
