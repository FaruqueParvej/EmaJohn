import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, signInWithPopup, signOut } from "firebase/auth";
import app from "../firebase.config";
import { useState } from "react";
import LoginForm from "./LoginForm";

const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

const Login = () => {
  const [user,setUser]=useState(null)
 const [error,setError]=useState(null)

  const handleGoogleLogin =()=>{
    signInWithPopup(auth, provider)
  .then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    // The signed-in user info.
    const user = result.user;
    // IdP data available using getAdditionalUserInfo(result)
    // ...
    console.log(user);
    setUser(user)
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.customData.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
    console.log(errorCode);
  });
  }
  const handleGithubLogin =()=>{
    signInWithPopup(auth, githubProvider)
    .then((result) => {
      // This gives you a GitHub Access Token. You can use it to access the GitHub API.
      const credential = GithubAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
  
      // The signed-in user info.
      const user = result.user;
      // IdP data available using getAdditionalUserInfo(result)
      // ...
      setUser(user)
    }).catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.customData.email;
      // The AuthCredential type that was used.
      const credential = GithubAuthProvider.credentialFromError(error);
      // ...
    });
  }
  const handleSignOut =()=>{
    signOut(auth)
    .then(() => {
      // Sign-out successful.
      setUser(null)
      console.log(user);
    }).catch((error) => {
      // An error happened.
    });
  }
  const handleSubmit = (event) =>{
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    console.log(email,password);


      createUserWithEmailAndPassword(auth,email,password)
      .then((userCredential) => {
        // Signed up 
        const user = userCredential.user;
        // ...
        console.log(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
        console.log(errorMessage);
        console.log(error);
        setError(errorMessage)
      })
  }
  
  
    return (
        <div>
          {user?
          (<div>
            <button onClick={handleSignOut}>Sign out</button>
            <h1>user: {user.displayName }</h1>
          <img src= {user.photoURL}alt="" />
          </div>):
            <div className="flex justify-center flex-col items-start ms-20">
              <LoginForm handleSubmit={handleSubmit} error={error}></LoginForm>
            <div>
            <button onClick={handleGoogleLogin} className="btn btn-success">Google Login</button> 
            <button onClick={handleGithubLogin} className="btn btn-primary mx-5">Github Login</button>
            </div>
           
            </div>
          }
          
         
        </div>
    );
};

export default Login;