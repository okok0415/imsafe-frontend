import { HashRouter, Route, Switch } from "react-router-dom"
import Home from "./Routes/Home.js";
import ScreenSharing from "./Routes/ScreenSharing.js"
import Board from "./Routes/Board.js";
import Detail from "./Routes/Detail.js";
import Login from "./Routes/LoginPage.js";
//import Navbar from "./Components/Navbar/Navbar.js";
import Navbar2 from "./Components/Navbar/Navbar2.js";
import Signup from "./Components/Signup.js"
import './CSS/App.css';

function App() {
  return (
    <HashRouter>
      <Navbar2 />
      <Switch>
        <Route path="/" exact={true} component={Home} />
        <Route path="/ScreenSharing" exact={true} component={ScreenSharing} />
        <Route path="/Board" exact={true} component={Board} />
        <Route path="/Board/:id" component={Detail} />
        <Route path="/Login" component={Login} />
        <Route path="/Signup" component={Signup} />
      </Switch>
    </HashRouter>
  );
}

export default App;

