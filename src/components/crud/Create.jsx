import React, { Component } from 'react';
import axios from 'axios';


class Create extends Component{

    state={
        username:'',
        email:'',
        mobile_number:'',
        country:''
    }


    handleUserNameOnChange = (e) => {
        this.setState({username:e.target.value});
    }

    handleUserEmailOnChange = (e) => {
        this.setState({email:e.target.value});
    }

    handleUserNumbereOnChange = (e) => {
        this.setState({mobile_number:e.target.value});
    }

    handleUserCountryOnChange = (e) => {
        this.setState({country:e.target.value});
    }

    handleSubmit = () => {

        const { username, email, mobile_number, country } = this.state;

        if(username === '' || email === '' || mobile_number === '' || country === '') alert('All fields are mandatory!');
        else {
            //network api call
        let postBody = {};
        postBody.username = username;
        postBody.email = email;
        postBody.mobile = mobile_number;
        postBody.country = country;
        axios.post(`http://localhost:8000/register`,  postBody)
        .then(res => {
            console.log(res);
            console.log(res.data);
        })
        .catch(err=>console.log('err',err));
        } 
    }

    render() {

        return(

            <>

            Name:<input type="text" name="username" onChange={this.handleUserNameOnChange} /><br></br>
            Email:<input type="text" name="email" onChange={this.handleUserEmailOnChange} /><br></br>
            Number:<input type="text" name="mobile_number" onChange={this.handleUserNumbereOnChange} /><br></br>
            Country:<input type="text" name="country" onChange={this.handleUserCountryOnChange} /><br></br>
            <button onClick={this.handleSubmit} >CREATE</button>

            </>
        )
    }
}

export default Create;