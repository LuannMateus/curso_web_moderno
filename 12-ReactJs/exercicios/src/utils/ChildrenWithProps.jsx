import React from 'react';

// React.Children.map(filhos, callback): Função que recebe múltiplos filhos e usa callback para tratar um por um.
// React.clone(filhoClonado, { props do pai, props do filho}): Função para clonar um elemento único.


export function childrenWithProps(props) {
    
    return React.Children.map(props.children, child => {
        return React.cloneElement(child, {
            ...props, ...child.props
        })
    })
}