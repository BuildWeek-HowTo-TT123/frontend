// import React, { useState } from "react";

// export function HowToForm(){
//   return(
//     <div>
//       <h1>How-To Form</h1>
//     </div>
//   )
// }


import React, { useState } from 'react';

import {axiosWithAuth} from './Util/axiosWithAuth';

import { useHistory } from "react-router-dom";

export function HowToForm(props){
    const [formState, setFormState] = useState({
      title: '',
      problem: '',
      solution: '',
      username: JSON.parse(localStorage.getItem('user')).username,
      user_id: JSON.parse(localStorage.getItem('user')).id
    })  
    const history = useHistory(props);
    const onSubmit = (e) => {
        console.log("hello");
        e.preventDefault();
        axiosWithAuth().post(`/how-to`, {title: formState.title, problem: formState.problem, solution:formState.solution, topic: formState.username, user_id: formState.user_id})
        .then(res => {
          console.log(res);
          history.push("/home");
        })
        .catch(err => {
          console.log(err);
        });
    }
    const onChange = (e) => setFormState({...formState, [e.target.name]:  e.target.value});
        return (
           <form onSubmit={onSubmit} style={{display: 'flex' }}>
               <input 
               type='text'
               name='title'
               placeholder='Title'
               style={{flex: '10', padding: '5px'}}
               value={formState.title}
               onChange={onChange}
               />
               <input 
               type='text'
               name='problem'
               placeholder='Problem'
               style={{flex: '10', padding: '5px'}}
               value={formState.problem}
               onChange={onChange}
               />
               <input 
               type='text'
               name='solution'
               placeholder='Solution'
               style={{flex: '10', padding: '5px'}}
               value={formState.solution}
               onChange={onChange}
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
