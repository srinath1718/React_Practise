import React, { Component } from 'react';
import Axios from 'axios';
import { tsConstructSignatureDeclaration } from '@babel/types';
import { expression } from '@babel/template';


class EmployeeProfile extends Component {

    state = {
        employeeList:[]
    }
    componentDidMount(){
        Axios.get('http://localhost:9090/employee')
        .then(response =>{
            console.log('response',response.data)
            this.setState({employeeList:response.data});
        })
        .catch(error =>{
            console.log('exception',error)
        })

    }
    render(){
        const { employeeList } = this.state
        return(
            <div>
                <h3>Employee Info</h3>
                {
                    employeeList.map(item=>{

                        return <div>
                            <p>Id:{item.id}</p>
                            <p>Name:{item.name}</p>
                            <p>Email:{item.email}</p>
                        </div>
                    })

                }
                
            </div>
        );
    }

}
export default EmployeeProfile