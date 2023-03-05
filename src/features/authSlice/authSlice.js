import { createSlice } from "@reduxjs/toolkit";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: {},
    authToken: null,
  },
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },

    setAuthToken: (state, action) => {
      state.authToken = action.payload;
    },

    removeAuthToken: (state) => {
      state.authToken = null;
      state.user = {};
    },
  },
});

export const { setUser, setAuthToken, removeAuthToken } = authSlice.actions;
export default authSlice.reducer;

// Firebase Signin function
export function handleSignIn(email, password) {
  return async function handleSignInThunk(dispatch, getState) {
    try {
      const auth = getAuth();
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
      const userData = {
        name: user.displayName,
        email: user.email,
        photoUrl: user.photoURL,
      };
      console.log(user)
      dispatch(setUser(userData));
      dispatch(setAuthToken(user.accessToken));
    } catch (error) {
      console.log(error.code);
      console.log(error.message);
    }
  };
}

// Firebase Signup function
export function handleSignUp(email, password) {
  return async function handleSignUpThunk(dispatch, getState) {
    try {
        const auth = getAuth();
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;
        const userData = {
            name: user.displayName,
            email: user.email,
            photoUrl: user.photoURL
        };
        dispatch(setUser(userData))
        dispatch(setAuthToken(user.accessToken));

    } catch (error) {
        console.log(error.code);
        console.log(error.message);
    }
  };
}


//firebase signout function 
export function handleSignOut() {
    return async function handleSignOutThunk(dispatch, getState) {
        try{
            const auth = getAuth();
            const user = await signOut(auth);
            console.log("logout user",user);
            dispatch(setUser({}))
            dispatch(setAuthToken(null))

        }catch(error){
            console.log(error.code)
            console.log(error.message)
        }
    }
}

