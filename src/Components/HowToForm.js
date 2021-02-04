// import React, { useState } from "react";

// export function HowToForm(){
//   return(
//     <div>
//       <h1>How-To Form</h1>
//     </div>
//   )
// }


import React, { Component } from 'react';

export class HowToForm extends Component {
    constructor(){
        super();
        this.onSubmit = this.onSubmit.bind(this);
    }
    state = {
        title: ''
    }
    onSubmit = (e) => {
        e.preventDefault();
        this.props.HowToForm(this.state.title);
        this.setState({title: ''});
    }
    onChange = (e) => this.setState({ [e.target.name]:  e.target.value});
    render() {
        return (
           <form onSubmit={this.onSubmit} style={{display: 'flex' }}>
               <input 
               type='text'
               name='title'
               placeholder='Add How To ...'
               style={{flex: '10', padding: '5px'}}
               value={this.state.title}
               onChange={this.onChange}
               />
               <input
               type='submit'
               value='Submit'
               className='btn'
               style={{flex: '1'}}
               />
           </form>
        )
    }
}
