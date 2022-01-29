import React from 'react';

class Image extends React.Component {
    render() {
        /* EXEMPLO DE THIS.PROPS  */
        return <h1 >{this.props.name}</h1>;
    }
}

export default Image;