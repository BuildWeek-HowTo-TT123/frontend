// import React, { useState } from "react";

// export function HowToForm(){
//   return(
//     <div>
//       <h1>How-To Form</h1>
//     </div>
//   )
// }


import React, { Component } from 'react';

import {axiosWithAuth} from './Util/axiosWithAuth';

export class HowToForm extends Component {
    constructor(){
        super();
        this.onSubmit = this.onSubmit.bind(this);
    }
    state = {
        title: '',
        problem: '',
        solution: '',
        username: JSON.parse(localStorage.getItem('user')).username,
        user_id: JSON.parse(localStorage.getItem('user')).id
    }
    onSubmit = (e) => {
        e.preventDefault();
        //this.props.HowToForm(this.state.title);
        this.setState({title: ''});
    }
    onChange = (e) => this.setState({ [e.target.name]:  e.target.value});
    render() {
        return (
           <form onSubmit={this.onSubmit} style={{display: 'flex' }}>
               <input 
               type='text'
               name='title'
               placeholder='Title'
               style={{flex: '10', padding: '5px'}}
               value={this.state.title}
               onChange={this.onChange}
               />
               <input 
               type='text'
               name='problem'
               placeholder='Problem'
               style={{flex: '10', padding: '5px'}}
               value={this.state.problem}
               onChange={this.onChange}
               />
               <input 
               type='text'
               name='solution'
               placeholder='Solution'
               style={{flex: '10', padding: '5px'}}
               value={this.state.solution}
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
