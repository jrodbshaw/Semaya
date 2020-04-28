import React from "react";
import { Switch, Route } from "react-router-dom";
import { connect } from "react-redux";
// * firebase
import {
  auth,
  createUserProfileDocument,
} from "../src/firebase/firebase.utils";
// * redux actions
import { setCurrentUser } from "./redux/user/user.actions";
// * styling
import "./App.css";
// * components & pages
import HomePage from "./pages/home/Homepage";
import ShopPage from "./pages/shop/ShopPage";
import SignInAndSignUpPage from "./pages/signin-signup/signin-signout";
import Header from "./components/header/Header";

class App extends React.Component {
  unsubscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot((snapShot) => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data(),
          });
        });
      }

      setCurrentUser(userAuth);
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route path="/signin" component={SignInAndSignUpPage} />
        </Switch>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default connect(null, mapDispatchToProps)(App);
