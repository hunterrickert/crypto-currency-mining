import React from 'react';
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input
} from 'reactstrap';
import axios from 'axios';

export default class userform extends React.Component {
  
  constructor() {
    super()
    this.state = {
        email: '',
        password: '',
        redirectTo: null
    }
    // this.handleSubmit = this.handleSubmit.bind(this)
    // this.handleChange = this.handleChange.bind(this)

}

  handleChange = e => {
    this.setState({
        [e.target.name]: e.target.value
    })
}

handleSubmit = e => {
    e.preventDefault()
    console.log('handleSubmit')

    axios
        .post('v1/user/signup', {
            email: this.state.email,
            password: this.state.password
        })
        .then(response => {
            console.log('login response: ')
            console.log(response)
            if (!response.data.errmsg) {
              console.log("successful signup")
                // update App.js state
                // this.props.updateUser({
                //     loggedIn: true,
                //     email: response.data.email
                // })
                // update the state to redirect to home
                this.setState({
                    redirectTo: '/signup'
                })
            }
        }).catch(error => {
            console.log('sign up error: ')
            console.log(error);
            
        })
}


  render() {
    return (
      <Form inline>
        <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
          <Label for="exampleEmail" className="mr-sm-2">Email</Label>
          <Input type="email" name="email" value={this.state.email} onChange={this.handleChange} id="exampleEmail" placeholder="something@idk.cool" />
        </FormGroup>
        <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
          <Label for="examplePassword" className="mr-sm-2">Password</Label>
          <Input type="password" name="password" value={this.state.password} onChange={this.handleChange} id="examplePassword" placeholder="Password" />
        </FormGroup>
        <Button
        //  className="btn btn-primary col-1 col-mr-auto"
                               
         onClick={this.handleSubmit}
         type="submit">Submit</Button>
      </Form>
    );
  }
}