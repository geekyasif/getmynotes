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
    authSignInError: null,
    authSignUpError: null,
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
    setAuthLoading: (state, action) => {
      state.authLoading = action.payload;
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
      dispatch(setAuthLoading(true));
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
        photoUrl: user.email === "mohdasif.dev@gmail.com"  ? "admin" : "user",
      };
      dispatch(setUser(userData));
      dispatch(setAuthToken(user.accessToken));
    } catch (error) {
      dispatch(setAuthSignInError(error.message));
    } finally {
      dispatch(setAuthLoading(false));
    }
  };
}

// Firebase Signup function
export function handleSignUp(name, email, password) {
  return async function handleSignUpThunk(dispatch, getState) {
    try {
      dispatch(setAuthLoading(true));
      const auth = getAuth();
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
      await updateProfile(auth.currentUser, {
        displayName: name,
      });

      const userData = {
        name: user.displayName,
        email: user.email,
        photoUrl: user.email === "mohdasif.dev@gmail.com"  ? "admin" : "user",
      };
      dispatch(setUser(userData));
      dispatch(setAuthToken(user.accessToken));
      dispatch(setAuthSignUpError(null))
    } catch (error) {
      dispatch(setAuthSignUpError(error.message));
    } finally {
      dispatch(setAuthLoading(false));
    }
  };
}

//firebase signout function
export function handleSignOut() {
  return async function handleSignOutThunk(dispatch, getState) {
    try {
      dispatch(setAuthLoading(true));
      const auth = getAuth();
      await signOut(auth);
    } catch (error) {
      // dispatch(setAuthError(error.message))
    } finally {
      dispatch(setAuthLoading(false));
      dispatch(setUser({}));
      dispatch(setAuthToken(null));
      dispatch(setAuthSignInError(null));
      dispatch(setAuthSignUpError(null));
    }
  };
}
