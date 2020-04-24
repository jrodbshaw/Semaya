import React, { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import {
  auth,
  createUserProfileDocument,
} from "../src/firebase/firebase.utils";
// styling
import "./App.css";
// components & pages
import Homepage from "./pages/home/Homepage";
import ShopPage from "./pages/shop/ShopPage";
import SigninSignup from "./pages/signin-signup/signin-signout";
import Header from "./components/header/Header";

function App() {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (authUser) => {
      if (authUser) {
        const userRef = await createUserProfileDocument(authUser);

        userRef.onSnapshot((snapShot) => {
          setCurrentUser({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data(),
            },
          });
        });
      } else {
        setCurrentUser(null);
      }
    });
    return () => unsubscribe();
  }, []);

  console.log(currentUser);

  return (
    <>
      <Header currentUser={currentUser} />
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/shop" component={ShopPage} />
        <Route path="/signin" component={SigninSignup} />
      </Switch>
    </>
  );
}

export default App;
