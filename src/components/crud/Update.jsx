import React, { Component } from 'react';
import axios from 'axios';
import  { Redirect } from 'react-router-dom'


class Update extends Component {

    state={
        username:'',
        email:'',
        mobile_number:'',
        country:'',
        isRedirect:false
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

    componentDidMount(){
    
        axios.get(`http://localhost:8000/register/${this.props.match.params.id}`)
        .then(response=>{
            console.log(response.data);
            let data = response.data[0];
            this.setState({
                username:data.username,
                email:data.email,
                mobile_number:data.mobile_number,
                country:data.country
            });
        })
        .catch(err=>console.log('err',err));
        
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
        axios.put('http://localhost:8000/register/'+this.props.match.params.id,  postBody)
        .then(res => {
            console.log(res);
            console.log(res.data);
            this.setState({
                isRedirect:true
            })
        })
        .catch(err=>console.log('err',err));
        } 
    }
  
    renderButton = () => {

        return  <button onClick={this.handleSubmit} >UPDATE</button>;
    }

    render() {
        
        if(this.state.isRedirect) return <Redirect to="/index" />
        const { username, email, mobile_number, country } = this.state;
        return(
            <>

            Name:<input type="text" value={username} name="username" onChange={this.handleUserNameOnChange} /><br></br>
            Email:<input type="text" value={email} name="email" onChange={this.handleUserEmailOnChange} /><br></br>
            Number:<input type="text" value={mobile_number} name="mobile_number" onChange={this.handleUserNumbereOnChange} /><br></br>
            Country:<input type="text" value={country} name="country" onChange={this.handleUserCountryOnChange} /><br></br>
           {
               this.renderButton()
           }

            </>
        )
    }
}


export default Update;