import React, { useContext } from 'react'
import { auth } from '../firebase/firebase'

const AuthContext = React.createContext()


export function useAuth() {
   return useContext(AuthContext)
}

export function AuthProvider() {
   function login(email, password) {
      return auth.createUserWithEmailAndPassword(email, password)
   }


   return (
      <AuthContext.Provider value={login}>
      </AuthContext.Provider>
   )

}


