import { createSlice } from "@reduxjs/toolkit";
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: {},
    authToken: null,
    authSignInError: "",
    authSignUpError: "",
    authLoading: false,
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
    setAuthSignInError: (state, action) => {
      state.authSignInError = action.payload;
    },
    setAuthSignUpError: (state, action) => {
      state.authSignUpError = action.payload;
    },
    setAuthLoading: (state) => {
      state.authLoading = true;
    },
    removeAuthLoading: (state) => {
      state.authLoading = false;
    },
  },
});

export const {
  removeAuthLoading,
  setAuthLoading,
  setAuthSignInError,
  setAuthSignUpError,
  setUser,
  setAuthToken,
  removeAuthToken,
} = authSlice.actions;
export default authSlice.reducer;

// Firebase Signin function
export function handleSignIn(email, password) {
  return async function handleSignInThunk(dispatch, getState) {
    try {
      dispatch(setAuthLoading());
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
      console.log(user);
      dispatch(setUser(userData));
      dispatch(setAuthToken(user.accessToken));
      dispatch(removeAuthLoading());
    } catch (error) {
      console.log(error.code);
      console.log(error.message);
      dispatch(setAuthSignInError(error.message));
      dispatch(removeAuthLoading());
    }
  };
}

// Firebase Signup function
export function handleSignUp(name, email, password) {
  return async function handleSignUpThunk(dispatch, getState) {
    try {
      dispatch(setAuthLoading());
      const auth = getAuth();
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
      const updatedUser = await updateProfile(auth.currentUser, {
        displayName: name,
      });
      console.log("updated user data ", updatedUser);
      const userData = {
        name: user.displayName,
        email: user.email,
        photoUrl: user.photoURL,
      };
      dispatch(setUser(userData));
      dispatch(setAuthToken(user.accessToken));
      dispatch(removeAuthLoading());
    } catch (error) {
      console.log(error.code);
      console.log(error.message);
      dispatch(setAuthSignUpError(error.message));
      dispatch(removeAuthLoading());
    }
  };
}

//firebase signout function
export function handleSignOut() {
  return async function handleSignOutThunk(dispatch, getState) {
    try {
      const auth = getAuth();
      const user = await signOut(auth);
      console.log("logout user", user);
      dispatch(setUser({}));
      dispatch(setAuthToken(null));
    } catch (error) {
      console.log(error.code);
      console.log(error.message);
      // dispatch(setAuthError(error.message))
      dispatch(removeAuthLoading());
    }
  };
}
