import React, { Component } from 'react'

export default class Button_ClassComponent extends Component {
  constructor(props){
    super(props);
    this.state={count:0};
  }
  increase=()=>{
    this.setState((prevState)=>({count:prevState.count+1}));
    console.log(`React Class Component: ${this.state.count}`);
  }
  decrease=()=>{
    this.setState((prevState)=>({count:prevState.count-1}));
    console.log(`React Class Component: ${this.state.count}`);
  }
    render() {
    return (
      <div>
        The Count: {this.state.count} <br />
        <button onClick={this.increase}>Increse</button>
        <button onClick={this.decrease}>Decrease</button>
      </div>
    )
  }
}
