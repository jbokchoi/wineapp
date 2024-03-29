import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Navigation from "../Navigation/Navigation";
import LandingPage from "../Landing/Landing";
import SignUpPage from "../SignUp/SignUp";
import SignInPage from "../SignIn/SignIn";
import PasswordForgetPage from "../PasswordForget/PasswordForget";
import HomePage from "../Home/Home";
import AccountPage from "../Account/Account";
import AdminPage from "../Admin/Admin";

import * as ROUTES from "../../constants/routes";
import { withAuthentication } from "../Session";

const App = () => (
  <Router>
    <div>
      <Navigation />

      <hr />
      <Route exact path={ROUTES.LANDING} component={LandingPage} />
      <Route exact path={ROUTES.SIGN_UP} component={SignUpPage} />
      <Route exact path={ROUTES.SIGN_IN} component={SignInPage} />
      <Route
        exact
        path={ROUTES.PASSWORD_FORGET}
        component={PasswordForgetPage}
      />
      <Route exact path={ROUTES.HOME} component={HomePage} />
      <Route exact path={ROUTES.ACCOUNT} component={AccountPage} />
      <Route exact path={ROUTES.ADMIN} component={AdminPage} />
    </div>
  </Router>
);

export default withAuthentication(App);
