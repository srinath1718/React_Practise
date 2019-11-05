import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Dashboard extends Component {

    render(){
        return(
        <div>
            <h3>Welcome to React</h3>
            <Link to="/"> Dashboard </Link>
            <Link to="/c1"> C1 </Link>
            <Link to="/c2"> C2 </Link>
            <Link to="/react-state"> ReactSate </Link>
            <Link to="/employee"> employee </Link>
            <Link to="/create" >CREATE</Link>
            <Link to="/index">Employee List</Link>
        </div>
        )

    }
}

export default Dashboard