import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './pages/Home'

export default function App() {
  return (
    <Router>
      <Switch>
        <Route to="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  )
}