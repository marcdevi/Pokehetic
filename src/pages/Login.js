import React from "react";
import '../styles/login.css';
import Button from 'react-bootstrap/Button';
import '../styles/login.css';
import Logo from '../images/pokeman_login.png';

function Login() {
  return (
    <div>
      <div className="sticky">
      </div>
      <div className="logo">
        <img src={Logo} alt="hjhjk"/>
      </div>
      <div className="container">
        <div className="col-3">
          <label htmlFor="identifier" className="form-label">Identifiant</label>
          <input className="form-control" id="identifier" />
 
          <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
          <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
          <Button variant="info" id ="info">Se connecter</Button>
        </div>
      </div>
    </div>
  );
}

export default Login;
