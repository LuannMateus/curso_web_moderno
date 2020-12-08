import React from 'react';
import Filho from './Filho';
import { childrenWithProps } from '../utils/ChildrenWithProps';

// Filhos herdandos props do pai.
// export default props => {
//     return (
//     <div>
//         <h1> {props.nome } { props.sobrenome } </h1>
//         <h2>Filhos</h2>
//         <ul>
//             <Filho nome='Pedro' sobrenome={props.sobrenome}/>
//             <Filho {...props}/>
//             <Filho {...props} nome='Carla'/>
//         </ul>
//     </div> 
//     )
// }


// Pai vai herdar os filhos.
export default props => {
    return (
    <div>
        <h1> {props.nome } { props.sobrenome } </h1>
        <h2>Filhos</h2>
        <ul>
            {    
                
            childrenWithProps(props)
               
            }
        </ul>
    </div> 
    )
}