import React, { Component } from 'react';
import DisplayInfo from './DisplayInfo';

// export default (props) => {

//     const { count,name} = props;

//     return(
//         <div>
//             <h3>count: { count }</h3>
//             <h3>Name: { name }</h3>
//         </div>

//     );
// }

// export default function DisplayInfoFunction(props){

//     const { count,name } = props;

//     return(
//         <div>
//             <h3>Name:{ name }</h3> 
//             <h3>Count: { count }</h3>
//         </div>

//     );
// }

 const DisplayInfoFunction = (props) => {

    const { count,name } = props;

    return (
        <div>
            <h3>Name:{ name }</h3> 
            <h3>Count: { count }</h3>
        </div>


    );
}

export default DisplayInfoFunction
