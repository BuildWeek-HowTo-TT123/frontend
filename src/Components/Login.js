


import {React, useState } from 'react'
import { Grid,Paper, TextField, Button, Typography,Link } from '@material-ui/core'
const Login=()=>{

    const paperStyle={padding :20,height:'70vh',width:380, margin:"60px auto"}
	const btnstyle={margin:'20px 0'}
	
	const [state , setState] = useState({
        username : "",
        password : ""
    })
    const handleChange = (e) => {
        const {id , value} = e.target   
        setState(prevState => ({
            ...prevState,
            [id] : value
        }))
    }
    return(
        <Grid>
            <Paper elevation={10} style={paperStyle}>
                <Grid align='center'>
                    
                    <h2>Sign In</h2>
                </Grid>
                <TextField id="username" value={state.username} onChange={handleChange} label='Username' placeholder='Enter username' fullWidth required/>
                <TextField  id="password" value={state.password} onChange={handleChange} label='Password' placeholder='Enter password' type='password' fullWidth required/>
               
                <Button type='submit' color='primary' variant="contained" style={btnstyle} fullWidth>Sign in</Button>
                
                <Typography > Do you have an account?
                     <Link style={{marginLeft: "10px"}}href="/signup" >
                        Sign Up 
                </Link>
                </Typography>
            </Paper>
        </Grid>
    )
}

export default Login