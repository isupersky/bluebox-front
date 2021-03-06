import React, { Component } from 'react';

import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";

import axios from 'axios';



class ForgotPassword extends Component {
    state = {  }

    onChangeHandler = (e) => {
        e.preventDefault();
        this.setState({
          email: e.target.value,
        });
      };

    onButtonClickHandler=(e)=>{
        e.preventDefault();
        axios.post("/forgot-password",this.state)
        .then((response) => {
            alert("An reset password Link has been sent to your mail");
        }
        ).catch((error)=>{
            alert("Something went wrong!! \n Try Later")
        })

    }
    render() { 
        return ( 
            <Container style={{marginTop:"40px"}} component="main" maxWidth="xs">
            <CssBaseline />
            <div >
              <Typography component="h1" variant="h5">
                Forgot Password
              </Typography>
              <form style={{marginTop:"40px"}} >
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  autoFocus
                  onChange={this.onChangeHandler}
                />
                <Button
                  style={{marginTop:"40px"}}
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="primary"
                  onClick={this.onButtonClickHandler}
                  
                >
                  Continue
                </Button>
            </form>
            </div>
          </Container>
       
         );
    }
}
 
export default ForgotPassword;