import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";

import TemplateDefault from "./templates/Default";

export default function App() {
  return (
    <TemplateDefault>
      <Router>
        <Switch>
          <Route to="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </TemplateDefault>
  );
}
