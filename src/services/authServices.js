import * as firebase from 'firebase';

import { ResponseStatus } from './enum/ResponseStatus';

export const signInWithEmail = async ({ email, password }) => {
  const response = await firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    // .then(() => { return ResponseStatus.OK})
    .catch((error) => {
      // Handle Errors here.
      // var errorCode = error.code;
      return error;
    });
  return response;
};

export const signUpWithEmail = async ({ email, password }) => {
  const response = await firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .catch((error) => {
      return error;
    });
  return response;
};

// export const signUpWithPhoneNumber = async (phone, password) => {
//   const response = await firebase.auth().
// }

// export const authServices = new AuthServices;
