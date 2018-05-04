import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import {updateUser} from '../actions';
import './registerInfromation.css';
import Input from './input';
import DropDown from './dropdown';
import countryCodes from '../countryCodes.json'

class RegisterVerification extends Component {
  constructor(){
		super();
    this.state = {
      phone: '',
      email: '',
      phoneCode: '',
      emailCode: '',
      phoneVerifyCodeButton: false,
      phoneVerify: false,
      phoneVerifyError: false,
      phoneVerifySuccess: false,
      emailVerifyCodeButton: false,
      emailVerify: false,
      emailVerifyError: false,
      emailVerifySuccess: false,
    }
  };

  componentWillMount(){
    const userInformation = 1;
    //const userInformation = await this.getUserInformation(this.props.match.params.id);
    //setState
  }

  componentDidMount(){
    console.log(this.props);
  }

  handleEmailVerify = (event) => {
    const nonValidEmails = ['hotmail', 'gmail', 'yahoo', 'outlook', 'live', 'aol', 'msn'];
    const email = event.target.value;
    const index = (email.indexOf("@") + 1);
    const domainName = email.slice(index, (email.indexOf(".",index))).toLowerCase();
    if(nonValidEmails.indexOf(domainName) <= -1){
      this.setState({emailVerifyCodeButton: true})
    }
  }

  handlePhoneVerify = (event) => {
    const reg = '[0-9]{8,10}';
    const phone = event.target.value;
    let updatedState = {};

    if(phone.match(reg))
    {
      updatedState = {phone, phoneVerifyCodeButton: true};
    }
    else
    {
      updatedState = {phoneVerifyCodeButton: false};
    }
    this.setState(updatedState);
  }

  handlePhoneCodeVerify = (event) => {
    const code = event.target.value;
    this.setState({phoneCode: code});
  }

  handleEmailCodeVerify = (event) => {
    const code = event.target.value;
    this.setState({emailCode: code});
  }

  handlePhoneVerifyCodeButton = (event) => {
    //Send code to phone
    this.setState({phoneVerify: true})
  }

  handleEmailVerifyCodeButton = (event) => {
    //Send Code to email
    this.setState({emailVerify: true})
  }

  handlePhoneVerifyButton = (event) => {
    //send Code to verify
    const error = true
    let updatedState = {}
    if(!error)
      updatedState = {phoneVerifyError: false, phoneVerifySuccess: true}
    else
      updatedState = {phoneVerifyError:true, phoneVerifySuccess: false}
      
    this.setState(updatedState)
  }

  handleEmailVerifyButton = (event) => {
    //send Code to verify
    const error = false;
    let updatedState = {}
    if(!error){
      updatedState = {emailVerifyError: false, emailVerifySuccess: true}
    }
    else
      updatedState = {emailVerifyError:true, emailVerifySuccess: false}
      
    this.setState(updatedState)
  }

  handleInputChange = (event) => {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({ [name]: value });
  }

  handleSubmit = (event) => {
    const state = this.state;
    if((state.emailCode && !state.emailVerifyError) || (state.phoneCode && !state.phoneVerifyError)){
      const registration = this.state
      console.log(registration);
      this.props.actions.updateUser(this.state);
    }
  }

  render() {
    const fullName = this.props.user.firstName + ' '+ this.props.user.lastName;
    const visibilityPhoneVerify = this.state.phoneVerify ? 'block' : 'none';
    const getCodeButton = this.state.phoneVerifyCodeButton;
    const visibilityPhoneVerifyError = this.state.phoneVerifyError ? 'block' : 'none';
    const visibilityPhoneVerifySuccess  = this.state.phoneVerifySuccess ? 'block' : 'none';

    const visibilityEmailVerify = this.state.emailVerify ? 'block' : 'none';
    const getEmailCodeButton = this.state.emailVerifyCodeButton;
    const visibilityEmailVerifyError = this.state.emailVerifyError ? 'block' : 'none';
    const visibilityEmailVerifySuccess  = this.state.emailVerifySuccess ? 'block' : 'none';

    const nextButton = ((this.state.emailCode!=='' && !this.state.emailVerifyError) || (this.state.phoneCode!=='' && !this.state.phoneVerifyError))
    console.log(nextButton)

    return (
      <div className="App">
      <div style={{	textAlign: 'left',	margin: '1em'}}>{fullName}</div>
        <form className="styleForm" onSubmit={this.handleSubmit}>
          <div style={{border: '1px solid black', marginBottom: '1em'}}>
            <label style={{ margin: '1em', width:'10em'}}>Mobile Phone</label>
            <div>
              <div style={{width: '4.5em'}} className="inline"><DropDown name={['countryCode']} label='' options={countryCodes} require='true' handler={this.handleInputChange}/></div>
              <div style={{width: '5.5em'}} className="inline"><Input name={['phone']} label='' quantity='1' require={false} placeholders={['Phone Number']} handler={this.handlePhoneVerify} regex='[0-9]{8,10}'minLength='8' maxLength='10'/></div>
              <div style={{width: '8em', marginLeft: '1em', marginBottom: '1em'}} className="inline"><button  type='button' disabled={!getCodeButton} onClick={this.handlePhoneVerifyCodeButton}>Get Verification Code</button></div>
              <div style={{display: visibilityPhoneVerify}}>
                <label style={{margin: '1em', width:'10em'}}>Phone Verification Code</label>
                <div>
                  <div style={{width: '12em'}} className="inline"><Input name={['verificationCode']} label='' quantity='1' require={false} placeholders={['Verification Code']} handler={this.handlePhoneCodeVerify}/></div>
                  <div style={{width: '6em', marginLeft: '1em'}} className="inline"><button onClick={this.handlePhoneVerifyButton}  type='button'>Verify</button></div>
                  <div style={{width: '7em', marginLeft: '1em', color: 'red', display: visibilityPhoneVerifyError}} className="inline"><label>Invalid Code</label></div>
                  <div style={{width: '7em', marginLeft: '1em', color: 'green', display: visibilityPhoneVerifySuccess}} className="inline"><label>Verified</label></div>
                </div>
              </div>
            </div>
          </div>
          <div style={{border: '1px solid black', marginBottom: '1em'}}>
            <label style={{ margin: '1em', width:'10em'}}>Business Email</label>
            <div>
              <div style={{width: '11em'}} className="inline"><Input name={['email']} label='' quantity='1' require={false} placeholders={['Business Email']} handler={this.handleEmailVerify}/></div>
              <div style={{width: '8em', marginLeft: '1em', marginBottom: '1em'}} className="inline"><button  type='button' disabled={!getEmailCodeButton} onClick={this.handleEmailVerifyCodeButton}>Get Verification Code</button></div>
              <div style={{display: visibilityEmailVerify}}>
                <label style={{margin: '1em', width:'10em'}}>Email Verification Code</label>
                <div>
                  <div style={{width: '12em'}} className="inline"><Input name={['verificationCode']} label='' quantity='1' require={false} placeholders={['Verification Code']} handler={this.handleEmailCodeVerify}/></div>
                  <div style={{width: '6em', marginLeft: '1em'}} className="inline"><button onClick={this.handleEmailVerifyButton}  type='button'>Verify</button></div>
                  <div style={{width: '7em', marginLeft: '1em', color: 'red', display: visibilityEmailVerifyError}} className="inline"><label>Invalid Code</label></div>
                  <div style={{width: '7em', marginLeft: '1em', color: 'green', display: visibilityEmailVerifySuccess}} className="inline"><label>Verified</label></div>
                </div>
              </div>
            </div>
          </div>
          <input style={{ marginLeft: '2em'}} type="submit" disabled={!nextButton} value="Next" />
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return state;
}

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators({
      updateUser
    }, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(RegisterVerification);
