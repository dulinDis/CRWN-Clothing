import React, { Component } from "react";
import "./sign-in.styles.scss";
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import {signInWithGoogle} from '../../firebase/firebase.utils';

class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
        email:'',
        password:'',
    };
  };

  handleSubmit = event => {
    event.preventDefault();
    this.setState({email:'', password:''})
  };

  handleChange = event => {
    const {value, name} = event.target;
    console.log(event.target);
    //if name is password so ill take it and assign a value to it, same to email
    this.setState({[name]:value});
  }
  render() {
    return (<div className='sign-in'>
        <h2>I already have an account</h2>
        <span>Sign in with you email and password</span>

        <form onSubmit={this.handleSubmit}>
            
            <FormInput name='email' type='email' value={this.state.email} handleChange={this.handleChange} label="email" required/>
            <FormInput name='password' type='password' value={this.state.password} handleChange={this.handleChange} label="password" required/>
            <div className='buttons'>
              <CustomButton type='submit'> Sign In</CustomButton>
              <CustomButton isGoogleSignIn onClick={signInWithGoogle}> Sign In with Google</CustomButton>
            </div>
            


        </form>
    </div>)
  }
}

export default SignIn;