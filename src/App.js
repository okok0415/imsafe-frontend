import { BrowserRouter, Route, Switch } from "react-router-dom"
import { HomeRouter } from "./Components/Home/HomeRouter.js";
import { SigninRouter, SignupRouter } from "./Components/Login/LoginRouter.js";
import './CSS/App.css';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/login" exact={true} component={SigninRouter} />
        <Route path="/register" exact={true} component={SignupRouter} />
        <Route path="/home" exact={true} component={HomeRouter} />
      </Switch>
    </BrowserRouter>

  );
}

export default App;

