import React, { Component } from 'react';

class DisplayInfo extends Component{

    state={};
    // react lifecycle menthods

    componentWillMount(){
        console.log('componentwillmount')
    }
    componentDidMount(){
        console.log('componentdidmount')
    }

    componentWillReceiveProps(newProps){
        console.log('props',newProps.name)
    }

    render(){
         
        const { count,name } = this.props

        return(
            <div>
                <h3>{ count }</h3>
                <h3>{ name }</h3>
            </div>
        )

        
    }
}
export default DisplayInfo;






