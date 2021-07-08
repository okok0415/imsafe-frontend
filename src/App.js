import { HashRouter, Route, Switch } from "react-router-dom"
import Home from "./Components/Home/Home.js";
import Navbar2 from "./Components/Navbar/Navbar2.js";
import Create from "./Components/Create.js"
import Execute from "./Components/Execute.js"
import Settings from "./Components/Settings.js"

import './CSS/App.css';

function App() {
  return (
    <HashRouter>
      <Navbar2 />
      <Switch>
        <Route path="/home" exact={true} component={Home} />
        <Route path="/create" exact={true} component={Create} />
        <Route path="/execute" exact={true} component={Execute} />
        <Route path="/settings" exact={true} component={Settings} />
      </Switch>
    </HashRouter>
  );
}

export default App;

