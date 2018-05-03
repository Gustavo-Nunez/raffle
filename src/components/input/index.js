import React, { Component } from 'react';

class Input extends Component{
    renderInputs = () => {
        const arr = [];
        for(let i = 0; i < this.props.quantity; i++){
            arr.push(
                <input style={{ margin: '1em', marginTop: '1em', marginBottom: '1em', width:'100%'}} 
                required={this.props.require} type={this.props.type} name={this.props.name[i]} 
                placeholder={this.props.placeholders[i]} key={i} onBlur={this.props.handler} maxLength={this.props.maxLength} pattern={this.props.regex}/>
            );
        }
        return(
            arr
        )
    }

    render(){
        const showLabel = (this.props.label !== '') || this.props.require;
        const visibility = showLabel ? 'block' : 'none';
        return(
            <div>
                <label style={{ marginLeft: '1em', alignContent: 'left', display: visibility}} >
                    {this.props.label} *:
                    <br/>
                </label>
                {this.renderInputs()}
            </div>
        )
    }
}

export default Input;