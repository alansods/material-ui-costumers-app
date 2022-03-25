import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Customers from "./pages/Customers";

import TemplateDefault from "./templates/Default";
import TemplatePage from "./templates/Page";

export default function App() {
  return (
    <Router>
      <TemplateDefault>
        <Switch>
          <Route path="/customers">
            <TemplatePage title="Clientes" Component={Customers} />
          </Route>
          <Route path="/">
            <TemplatePage title="Home" Component={Home} />
          </Route>
        </Switch>
      </TemplateDefault>
    </Router>
  );
}
