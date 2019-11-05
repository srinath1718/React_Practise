import React,{ Component } from 'react';
import DisplayInfo from './DisplayInfo';
import DisplayInfoFunction from './DisplayInfoFunction';
import Dashboard from './Dashboard';

class ReactState extends Component {

    state={
        count:0,
        name:''
    }
    incrementCount=() => {

        this.setState({
            count:this.state.count + 1
        }, ()=>{
            console.log(this.state.count);
        });
        
    }
    decrementCount=() =>{
        this.setState({
            count:this.state.count -1
        })
    }
    handleNameChange = (e) =>{
        this.setState({
            name:e.target.value
        })

    }
    render(){
        const { count,name } = this.state
        console.log('count', count);
        return(
            <div>
                {/* <h3>{ this.state.count }</h3> */}
                <Dashboard />
                Name<input type='text' onChange={this.handleNameChange}></input><br></br>
                <DisplayInfoFunction count={count} name={name} />
                <button onClick={this.incrementCount}>Increment</button>
                <button onClick={this.decrementCount}>decrement</button><br></br>
            </div>
        )
    }


}

export default ReactState