import React, { Component } from 'react';

class DropDown extends Component{
    renderOptions= () => {
        const arr = [];
        for(let i = 0; i < this.props.options.length; i++){
            arr.push(
                <option name={this.props.options[i].name} key={i} onBlur={this.props.handler} value={this.props.options[i].dail_code}>
                {this.props.options[i].code}:{this.props.options[i].dial_code}
                </option>
            );
        }
        return arr;
    }

    render(){
        
        return(
            <div>
                <label style={{ marginLeft: '1em', alignContent: 'left'}}>
                    {this.props.label}
                </label>
                <br/>
                <select style={{ margin: '1em', marginTop: '0em', marginleft: '0em', width:'100%'}}>
                    {this.renderOptions()}
                </select>
            </div>
        )
    }
}

export default DropDown;