import React, { Component } from 'react'

export default class componentDidMount extends Component {
    constructor(props) {
        super(props)
        console.log('constructor')
    }

 componentDidMount() {
     console.log('componentDidMount')
 }

    render() {
        console.log('render');
        return (
            <div>
                
            </div>
        )
    }
}
