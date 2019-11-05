import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';


class Index extends Component {

    state={
        employeeList:[]
    }

    getEmployee = () => {
        axios.get('http://localhost:8000/register')
        .then(response=>{
            console.log('res', response.data.data);
            this.setState({employeeList:response.data.data});
        })
        .catch(err=>console.log('err',err));
    }

    componentDidMount(){
        //network 
        this.getEmployee();
       
    }
    
    render(){

        const { employeeList } = this.state;
        return(

            <>
            <table border='1'>
                <tr>
                    <th>ID</th>
                    <th>Name</th> 
                    <th>Email</th>
                    <th>Country</th>
                    <th>Number</th>
                    <th>Action</th>
                </tr>

                {
                    employeeList.map(row=>{

                        return <tr>
                            <td>{row.id}</td>
                            <td>{row.username}</td>
                            <td>{row.email}</td>
                            <td>{row.country}</td>
                            <td>{row.mobile_number}</td>
                            <td><Link to={`/update/${row.id}`} >UPDATE</Link></td>
                        </tr>
                    })
                }

            </table>
            </>
        )
    }
}
//ES6


export default Index;