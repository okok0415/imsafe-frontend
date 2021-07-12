import { BrowserRouter, Route, Switch } from "react-router-dom"
import Home from "./Components/Home/Home.js";
import Navbar from "./Components/Navbar/Navbar.js";


import './CSS/App.css';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route path="/home" exact={true} component={Home} />
      </Switch>
    </BrowserRouter>

  );
}

export default App;

