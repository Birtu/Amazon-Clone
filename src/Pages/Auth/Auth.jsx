import React from 'react'
import classes from "./SignUp.modules.css"
import LayOut from "../../Components/"
import {link} from "react-router-dom";
import {auth} from "../../Utility/firebase"
import {signInWithEmailAndPassword,createUserWithEmailAndPassword } from "firebase/auth"

export default function Auth() {

  const [email,setEmail]= useState("")
  const [password,setPassword]= useStates("");
  const [error,setError]=useState("");

  const authHandler =async (e)=> (
    e.preventDefault();
    console.log(e.target.name);
    if (e.target.name=="signin"){
      //firebase auth
      signInWithEmailAndPassword(auth, email, password)
      .then((userInfo)=> {
        console.log(userInfo);
      })
      .catch((err) =>{
        console.log(err);
      });




    }else{
      createUserWithEmailAndPassword(auth, email, password)
      .then((userInfo)=> {
        console.log(err)
      })

    }
  );




  // console.log(password,email)
  
  return (
    <div className= {classes.login}>
      {/* logo */}
      <Link>
        <img
          src="https://cdn4.iconfinder.com/data/icons/flat-brand-logo-2/512/amazon-512.png"
          alt=""
        />
      </Link>

      {/* from */}

      <div className={classes.login_container}>
        <h1> Sign In</h1>
        <form action="">
          <div> 
            <label htmlFor="email">Email</label>
            <input onChange={(e)=>setEmail(e.target.value)} type="email" id="email"/>
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input type="password" id="password"/>
          </div>
          <button type="submit" name="signin" onClick={authHandler} className={classes.login_signInButton}>Sign In</button>
          
        </form>

        {/* agreement*/}
        <p>
          By signing-in you agree to the AMAZON FAKE Condition of use and sale.Please see our privacy Notice. Our cookies Notice and our interest-Based Ads Notice.
        </p>
        {/* create account button*/}
        <button type="submit" name="signup" onClick={authHandler} className={classes.login_registerButton}>Create your Amazon Account</button>
      </div>
    </div>
  );
}
