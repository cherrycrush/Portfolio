import React from 'react'
import { HashRouter as Router, Route, Switch } from 'react-router-dom'
import Nav from './Nav'
import Index from './Index'

const App = () => {
  return (
    <div>
      <Router >
        <Route path={'/'} component={Nav} />
        <Switch>
          <Route exact path={'/'} component={Index} />
        </Switch>
      </Router>
    </div>
  )
}

export default App
