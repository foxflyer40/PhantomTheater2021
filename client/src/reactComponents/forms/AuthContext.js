import React, { useContext, useState, useEffect } from "react";
import { auth } from "../firebase/firebase";

const AuthContext = React.createContext();

//function allows us to use this context
export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  //tracks logged-in user in state
  const [loggedUser, setLoggedUser] = useState();
  //setting initial loading state
  const [loading, setLoading] = useState(true);

  function login(email, password) {
    return auth.signInWithEmailAndPassword(email, password);
  }

  //sets user once as component mounts
  useEffect(() => {
    //unsubscribe is returned from onAuth method when component unmounts
    const unsubscribe = auth.onAuthStateChanged((user) => {
      //verify to see if there's a user and sets the user
      setLoggedUser(user);
      //user starts as null & sets itself (firebase property that sets local storage/tokens)
      setLoading(false);
    });
    return unsubscribe;
  }, []);

  //value provided by authentication as part of context
  const value = {
    loggedUser,
    login,
  };

  //provides context to children above - value object passed as prop
  //inside is a check that only renders children, if there's no loading

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}
