import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Register from "./pages/RegisterPage/RegisterPage";
import Login from "./pages/LoginPage/LoginPage";
import Result from "./pages/result";
import AddPatient from "./pages/AddPacient";
function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/register" component={Register} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/result" component={Result} />
          <Route exact path="/addpacient" component={AddPatient} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
