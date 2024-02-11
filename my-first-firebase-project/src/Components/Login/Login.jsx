import {
  GithubAuthProvider,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from 'firebase/auth';
import { useState } from 'react';
import auth from '../../../public/_firebase_init';

const Login = () => {
  const [user, setUser] = useState(null);
  // const [gitUser,setGitUser] = useState(null);

  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();

  const handleSignOut = () => {
    signOut(auth)
      .then((result) => {
        console.log(result, 'Sign-out successful');
        setUser(null);
      })
      .catch((error) => {
        console.log('An error happened', error);
      });
  };

  const handleGoogleLoginButton = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        // const credential = GoogleAuthProvider.credentialFromResult(result);
        // const token = credential.accessToken;
        // // The signed-in user info.
        const loggedinUser = result.user;
        // IdP data available using getAdditionalUserInfo(result)
        // console.log(token);
        console.log(loggedinUser);
        setUser(loggedinUser);
      })
      .catch((error) => {
        // Handle Errors here.
        // const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        // const email = error.customData.email;
        // The AuthCredential type that was used.
        // const credential = GoogleAuthProvider.credentialFromError(error);
        // console.error(credential, email, errorCode);
        console.log('error', errorMessage);
      });
  };

  const handleGitHubLoginButton = () => {
    signInWithPopup(auth, githubProvider)
      .then((result) => {
        const loggedinUser = result.user;
        setUser(loggedinUser);
        console.log(loggedinUser);
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log('error', errorMessage);
      });
  };

  return (
    <div>
      {user ? (
        <button onClick={handleSignOut}>Sign out</button>
      ) : (
        <>
          <button onClick={handleGoogleLoginButton}>Google Log in</button>
          <button onClick={handleGitHubLoginButton}>Github Log in</button>
        </>
      )}
      {user && (
        <div>
          <h1>User Details:</h1>
          <img src={user.photoURL} alt="" />
          <p>email:{user.email}</p>
          <p>name:{user.displayName}</p>
        </div>
      )}
    </div>
  );
};

export default Login;
