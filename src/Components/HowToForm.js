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
import { makeStyles } from '@material-ui/core/styles';
import {TextField, Grid, Paper, Button } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
  submitButton: {
    margin: "15px"
  },
  root: {
    '& .MuiTextField-root': {
      margin: "0 auto",
      width: "80%",
    },
    
  },
  
}));

export function HowToForm(props){
  const classes = useStyles();
  const paperStyle={padding :20,height:'70vh',width:380, margin:"60px auto"}
    const [formState, setFormState] = useState({
      title: '',
      problem: '',
      solution: '',
      username: JSON.parse(localStorage.getItem('user')).username,
      user_id: JSON.parse(localStorage.getItem('user')).id
    })  
    const history = useHistory(props);
    const onSubmit = (e) => {
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
          <Grid className={classes.mainContent}>
          <Paper elevation={10} style={paperStyle}>
            <form className={classes.root}  autoComplete="off" align="center">
                    <div>
            <TextField
              id="standard-multiline-flexible"
              name='title'
              label="Title"
              multiline
              rowsMax={4}
              value={formState.title}
              onChange={onChange}
            />
            </div>
             {/* <form onSubmit={onSubmit} style={{display: 'flex' }}>
                 <input
                 type='text'
                 name='title'
                 placeholder='Title'
                 style={{flex: '10', padding: '5px'}}
                 value={formState.title}
                 onChange={onChange}
                 /> */}
                 <div>
            <TextField
              id="standard-multiline-flexible"
              name='problem'
              label="Problem"
              multiline
              rowsMax={4}
              value={formState.problem}
              onChange={onChange}
            />
            </div>
                 {/* <input
                 type='text'
                 name='problem'
                 placeholder='Problem'
                 style={{flex: '10', padding: '5px'}}
                 value={formState.problem}
                 onChange={onChange}
                 /> */}
                 {/* <input
                 type='text'
                 name='solution'
                 placeholder='Solution'
                 style={{flex: '10', padding: '5px'}}
                 value={formState.solution}
                 onChange={onChange}
                 /> */}
                 <div>
            <TextField
              id="standard-multiline-flexible"
              name='solution'
              label="Solution"
              multiline
              rowsMax={8}
              value={formState.solution}
              onChange={onChange}
            />
            </div>
            
                 <Button
                variant="contained"
						    color="primary"
						    className={classes.submitButton}
						    onClick={() => onSubmit()}
                 type='submit'
                 value='Submit'
                 style={{flex: '1'}}
                 
                 > 
                 Submit
                 </Button>
             </form>
            
             </Paper>
          </Grid>

        )
    
}
