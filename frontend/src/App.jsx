import "./App.css";
//routing
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
//components
import Navigationn from "./components/Navigation/Navigation";
//pages
import Users from "./pages/Users/Users";
import Pacients from "./pages/Pacients/Pacients";
import Companies from "./pages/Companies/Companies";
import Registres from "./pages/Registres/Registres";
import Home from "./pages/Home/Home";

function App() {
  return (
    <div>
      <Navigationn />
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/utilizatori" component={Users} />
          <Route path="/pacienti" component={Pacients} />
          <Route path="/companii" component={Companies} />
          <Route path="/registre" component={Registres} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
