import React, { Component } from "react";
import '../styles/Login.css';
import Button from 'react-bootstrap/Button';
import '../src/styles/login.css';
import Logo from '../src/images/pokeman_login.png';
class Login extends Component {
  render() {
    
    return ( <div>
      <div class="sticky" >
    </div>
    <div class="logo">
        <img src={Logo} alt="hjhjk"/>
    </div>
 <div class="container">
    <div class="col-3">
        <label for="identifier" class="form-label">identifiant</label>
        <input class="form-control" id="identifier" />
 
   
    <label for="exampleFormControlInput1" class="form-label">Email address</label>
    <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
    <Button variant="info" id ="info">se connecter </Button>
    
    </div>
</div>
</div>
    );
  }
}

export default Login;
