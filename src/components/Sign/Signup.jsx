import './loginSty.css';
const Signup = () => {
    return (
      <>
      <div className="container">
      <form action=''>
        
        <h2>Sign-up</h2>
         <div className="input-box">
         <input type="text" placeholder="USER NAME" name="userName" id="userName" className="userInput" required />
         </div>   

         <div className="input-box">
         <input type="email" placeholder="Email" name="email" id="email" className="userInput" required />
         </div>  

          <div className="input-box">
          <input type="text" placeholder="PASSWORD" name="password" id="password" className="userInput" required />
          </div>
  
          <div className="input-box">
          <input type="text" placeholder="RE-PASSWORD" name="Re-password" id="Re-password" className="userInput" required />
          </div>

          <button type='submit' className='btn btn-sign'> submit </button>
      </form>
      </div>
      </>
    )
  }
  export default Signup;
  