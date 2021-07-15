import { BrowserRouter, Route, Switch } from "react-router-dom"
import { HomeRouter } from "./Components/Home/HomeRouter.js";
import { SettingsRouter } from "./Components/Settings/SettingsRouter.js";
import { SigninRouter, SignupRouter } from "./Components/Login/LoginRouter.js";
import './CSS/App.css';
import { InquiryRouter } from "./Components/Inquiry/InquiryRouter.js";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/login" exact={true} component={SigninRouter} />
        <Route path="/register" exact={true} component={SignupRouter} />
        <Route path="/home" exact={true} component={HomeRouter} />
        <Route path="/inquiry" component={InquiryRouter} />
        <Route path="/settings" component={SettingsRouter} />
      </Switch>
    </BrowserRouter>

  );
}

export default App;

