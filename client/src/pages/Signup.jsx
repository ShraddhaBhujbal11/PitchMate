// src/pages/Signup.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Signup.css';

const Signup = () => {
  const navigate = useNavigate();

  return (
    <div className="signup-container">
     
      <div className="signup-left" />
      <div className="signup-right">
       

        <div className="signup-card">
            <div className="signup-top">
          <span>Already have an account?</span>
          <button onClick={() => navigate('/login')} className="signin-btn">Sign in</button>
        </div>
          <h2>Create an account</h2>
          <p className="signup-sub">Sign up via</p>

          <div className="social-buttons">
            <button className="social google"><span>G</span> Google</button>
            <button className="social facebook"><span>f</span> Facebook</button>
          </div>

          <form className="signup-form">
          <div className="form-group">
  <input type="text" id="fullname" name="fullname" placeholder = "Alira Collins"required />
  <label htmlFor="fullname">Full Name</label>
</div>


           
      <div className="form-group">
  <input type="text" id="e-mail" name="e-mail" placeholder = "Enter your e-mail"required />
  <label htmlFor="e-mail">E-mail</label>
</div>        
<div className="form-group">
  <input type="text" id="repeatemail" name="repeatemail" placeholder = "Repeat your e-mail"required />
  <label htmlFor="repeatemail">Repeat e-mail</label>
</div>
                   <div className="form-group">
  <input type="text" id="password" name="password" placeholder="Password "required />
  <label htmlFor="password">Password</label>
</div>
        <div className="form-group">
  <input type="text" id="repeatpassword" name="repeatpassword" placeholder = "Repeat password"required />
  <label htmlFor="repeatpassword">Repeat Password</label>
</div>

            <button type="submit" className="create-account-btn">
              Create account <span className="arrow">→</span>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
