import { useState } from "react";
import "./loginSty.css"
function Login() {

    const [values,setValues] = useState({
        username:"",
        password:""
    })
    const hundleInput = (e) => {
        setValues({...values,[e.target.name]:e.target.value})
    }
    const hundleSubmit = (e) => {
        e.preventDefault();
       
    }
    return (
      <>
      <div className="container">
        <form action="" onSubmit={hundleSubmit}>
          
         <h2>Login</h2>
          <div className="input-box">
          <input type="text" placeholder="USER NAME"  id="userName" required onChange={hundleInput}/>
          </div>

          <div className="input-box">
          <input type="password" placeholder="Password"  id="password" required onChange={hundleInput}/>
          </div>

          <a href="#">Forget_Password?</a>
        <button type="submit" className="btn btn-log">Login</button> 
        <button type="submit" className="btn btn-sign">Sign-up</button>

      </form>
      </div>
      </>
    )
  }
  
  export default Login;
  