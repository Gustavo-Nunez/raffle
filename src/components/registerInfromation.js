import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import {registerUser} from '../actions';
import './registerInfromation.css';
import Input from './input';
import CheckBox from './checkBox';

class RegisterInfromation extends Component {
  constructor(props){
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      company: '',
      title: '',
      budgetCheck: false,
      apiCheck: '',
      esbCheck: '',
      etlCheck: '',
      cloudHub: ''
   }
  };

  componentWillReceiveProps(nextProps){
    console.log(nextProps);
  }

  handleInputChange = (event) => {
    const target = event.target;
    const value = target.type === 'checkbox' && target.name === 'budgetCheck' ? target.checked : target.value;
    const name = target.name;
    this.setState({ [name]: value });
  }

  handleSubmit = () => {
    this.props.actions.registerUser(this.state);
  }

  render() {
    const budgetQuestion = 'Do you influence budget decisions in your organization?';
    const muleTechQuestion = 'What features do you use of MuleSoft Anypoint?';
    const muleFeatures = ['API Gateway', 'ESB', 'ETL', 'CloudHub'];
    const checkName = ['apiCheck', 'esbCheck', 'etlCheck', 'cloudHub'];
    return (
      <div className="App">
        <form className="styleForm" onSubmit={this.handleSubmit}>
          <Input name={['firstName']} label='First Name' quantity='1' require={true}  placeholders={['First Name']} handler={this.handleInputChange}/>
          <Input name={['lastName']} label='Last Name' quantity='1' require={true} placeholders={['Last Name']} handler={this.handleInputChange}/>
          <Input name={['company']} label='Company' quantity='1' require={true} placeholders={['Comapany Name']} handler={this.handleInputChange}/>
          <Input name={['title']} label='Title' quantity='1' require={true} placeholders={['Title']} handler={this.handleInputChange}/>
          <CheckBox name={['budgetCheck']} quantity='1' questionEnd={budgetQuestion} options={['']} handler={this.handleInputChange}/>
          <CheckBox name={checkName}  quantity='4' question={muleTechQuestion} options={muleFeatures} handler={this.handleInputChange}/>
          <input style={{ marginLeft: '2em'}} type="submit" value="Next" />
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
      registerUser
    }, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(RegisterInfromation);
