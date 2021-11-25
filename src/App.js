import { BrowserRouter, Route, Switch } from "react-router-dom"
import { HomeRouter } from "./Components/Home/HomeRouter.js";
import { SettingsRouter } from "./Components/Settings/SettingsRouter.js";
import { SigninRouter, SignupRouter } from "./Components/Login/LoginRouter.js";
import { CreateRouter } from "./Components/Create/CreateRouter.js";
import { InquiryRouter } from "./Components/Inquiry/InquiryRouter.js";
import { Detail } from "./Components/Detail/Detail.js";
import PublicRoute from "./utils/PublicRoute.js";
import PrivateRoute from "./utils/PrivateRoute.js";
import './CSS/App.css';
function App() {
  return (
    <BrowserRouter>
      <Switch>
        <PublicRoute path="/login" exact={true} component={SigninRouter} />
        <PublicRoute path="/register" exact={true} component={SignupRouter} />
        <PrivateRoute path="/" restricted={false} exact={true} component={HomeRouter} />
        <Route path="/inquiry" restricted={false} component={InquiryRouter} />
        <PrivateRoute path="/settings" restricted={false} component={SettingsRouter} />
        <PrivateRoute path="/create" restricted={false} component={CreateRouter} />
        <PrivateRoute path="/detail/:id" restricted={false} component={Detail} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;

