import { BrowserRouter, Route, Switch } from "react-router-dom"
import { HomeRouter } from "./Components/Home/HomeRouter.js";
import { SettingsRouter } from "./Components/Settings/SettingsRouter.js";
import { SigninRouter, SignupRouter } from "./Components/Login/LoginRouter.js";
import { CreateRouter } from "./Components/Create/CreateRouter.js";
import { InquiryRouter } from "./Components/Inquiry/InquiryRouter.js";
import { Detail } from "./Components/Detail/Detail.js";
import './CSS/App.css';
function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/login" exact={true} component={SigninRouter} />
        <Route path="/register" exact={true} component={SignupRouter} />
        <Route path="/home" exact={true} component={HomeRouter} />
        <Route path="/inquiry" component={InquiryRouter} />
        <Route path="/settings" component={SettingsRouter} />
        <Route path="/create" component={CreateRouter} />
        <Route path="/detail/:id" component={Detail} />
      </Switch>
    </BrowserRouter>

  );
}

export default App;

