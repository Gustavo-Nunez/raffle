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
    const muleFeatures = ['API Gateway', 'ESB', 'ETL', 'CloudHub'];
    const checkName = ['apiCheck', 'esbCheck', 'etlCheck', 'cloudHub'];
    return (
      <div className="App">
        <form className="styleForm" onSubmit={this.handleSubmit}>
          <CheckBox name={['cardCheck']} quantity='1' questionEnd={'Business Card'} options={['']} handler={this.handleInputChange}/>
          <div style={{border: '1px solid black', marginBottom: '1em'}}>
            <label style={{ margin: '1em', width:'10em'}}>Exibitor Only</label>
            <div>
              <div style={{width: '4.5em'}} className="inline"><Input name={['exhibitorCode']} label='Exhibitor Code' quantity='1' require={true} placeholders={['Exhibitor Code']} handler={this.handleInputChange}/></div>
              <div style={{width: '7em', marginLeft: '1em', color: 'red', display: 'block'}} className="inline"><label>Invalid Code</label></div>
              <div style={{width: '7em', marginLeft: '1em', color: 'green', display: 'block'}} className="inline"><label>Verified</label></div>
            </div>
          </div>
          <input style={{ marginLeft: '2em'}} type="submit" value="End" />
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
