import React, { Component } from 'react';
import axios from 'axios';
import './registerInfromation.css';
import Input from './input';
import DropDown from './dropdown';
import countryCodes from '../countryCodes.json'

class RegisterVerification extends Component {
  constructor(){
		super();
    this.state = {
      firstName: 'Gus',
      lastName: 'Nunez',
      phone: '',
      email: '',
      phoneVerifyButton: false,
      phoneVerify: true,
      phoneVerifyError: true,
      emailVerify: false
    }
  };

  getUserInformation = (userId) => (
    //axios.get('https://g6c9baf9xa.execute-api.us-east-1.amazonaws.com/prod/register/'+userId)
    1
  );

  componentWillMount(){
    const userInformation = 1;
    //const userInformation = await this.getUserInformation(this.props.match.params.id);
    console.log('info', userInformation);
    console.log(this.props.history);
    //setState
  }

  componentDidMount(){
    console.log(this.props.history);
  }

  handlePhoneVerify = (event) => {
    const reg = '[0-9]{8,10}';
    const phone = event.target.value;
    let updatedState = {};

    if(phone.match(reg))
    {
      updatedState = {phone: phone, phoneVerifyButton: true};
    }
    else
    {
      updatedState = {phoneVerifyButton: false};
    }
    this.setState(updatedState);
  }

  handlePhoneVerifyButton = (event) => {
    //send Code
    //this.setState({phoneVerify: true})
  }

  handleInputChange = (event) => {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({ [name]: value });
  }

  handleSubmit = (event) => {
    const registration = this.state
    console.log(registration);
  }

  render() {
    const visibilityPhoneVerify = this.state.phoneVerify ? 'block' : 'none';
    const fullName = this.state.firstName + ' '+ this.state.lastName;
    const getCodeButton = this.state.phoneVerifyButton;
    const visibilityPhoneVerifyError = this.state.phoneVerifyError ? 'block' : 'none';
    return (
      <div className="App">
      <div style={{	textAlign: 'left',	margin: '1em'}}>{fullName}</div>
        <form className="styleForm" onSubmit={this.handleSubmit}>
          <div style={{border: '1px solid black', marginBottom: '1em'}}>
            <label style={{ margin: '1em', width:'10em'}}>Mobile Phone</label>
            <div>
              <div style={{width: '4.5em'}} className="inline"><DropDown name={['countryCode']} label='' options={countryCodes} require='true' handler={this.handleInputChange}/></div>
              <div style={{width: '5.5em'}} className="inline"><Input name={['phone']} label='' quantity='1' require={false} placeholders={['Phone Number']} handler={this.handlePhoneVerify} regex='[0-9]{8,10}'minLength='8' maxLength='10'/></div>
              <div style={{width: '8em', marginLeft: '1em'}} className="inline"><button  type='button' disabled={!getCodeButton} onClick={this.handlePhoneVerifyButton()}>Get Verification Code</button></div>
              <div style={{display: visibilityPhoneVerify}}>
                <label style={{margin: '1em', width:'10em'}}>Phone Verification Code</label>
                <div>
                  <div style={{width: '12em'}} className="inline"><Input name={['verificationCode']} label='' quantity='1' require={false} placeholders={['Verification Code']} handler={this.handlePhoneVerify}/></div>
                  <div style={{width: '6em', marginLeft: '1em'}} className="inline"><button  type='button' disabled={!getCodeButton} onClick={this.handlePhoneVerifyButton()}>Verify</button></div>
                  <div style={{width: '7em', marginLeft: '1em', color: 'red', display: visibilityPhoneVerifyError}} className="inline"><label>Invalid Code</label></div>
                </div>
              </div>
            </div>
          </div>
          <div style={{border: '1px solid black', marginBottom: '1em'}}>
            <label style={{ margin: '1em', width:'10em'}}>Business Email</label>
            <div>
              <div style={{width: '11em'}} className="inline"><Input name={['email']} label='' quantity='1' require={false} placeholders={['Business Email']} handler={this.handlePhoneVerify} minLength='8' maxLength='10' specialChar='[0-9]'/></div>
              <div style={{width: '8em', marginLeft: '1em'}} className="inline"><button  type='button' disabled={!getCodeButton} onClick={this.handlePhoneVerifyButton()}>Get Verification Code</button></div>
              <div style={{display: visibilityPhoneVerify}}>
                <label style={{margin: '1em', width:'10em'}}>Phone Verification Code</label>
                <div>
                  <div style={{width: '12em'}} className="inline"><Input name={['verificationCode']} label='' quantity='1' require={false} placeholders={['Verification Code']} handler={this.handlePhoneVerify}/></div>
                  <div style={{width: '6em', marginLeft: '1em'}} className="inline"><button  type='button' disabled={!getCodeButton} onClick={this.handlePhoneVerifyButton()}>Verify</button></div>
                  <div style={{width: '7em', marginLeft: '1em', color: 'red', display: visibilityPhoneVerifyError}} className="inline"><label>Invalid Code</label></div>
                </div>
              </div>
            </div>
          </div>
          <input style={{ marginLeft: '2em'}} type="submit" value="Next" />
        </form>
      </div>
    );
  }
}

export default RegisterVerification;
