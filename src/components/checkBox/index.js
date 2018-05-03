import React, { Component } from 'react';

class CheckBox extends Component{

    renderCheckBoxes = () => {
        const arr = [];
        for(let i = 0; i < this.props.quantity; i++){
            const option = this.props.options;
            arr.push(
                <label>
                    <input style={{ margin: '1em'}} key={option[i]} required={this.props.require}  name={this.props.name[i]}
                    type="checkbox" value={option[i]} onChange={this.props.handler}/>
                    {option[i]}
                </label>
            );
        }
        return(
            arr
        )
    }

    render(){
        
        return(
            <div style={{ marginBottom: '2em'}}>
                <label style={{ marginLeft: '1em', alignContent: 'left'}}>
                    {this.props.question}
                </label>
                <br/>
                <div>
                    {this.renderCheckBoxes()}
                    {this.props.questionEnd}
                </div>
            </div>
        )
    }
}

export default CheckBox;