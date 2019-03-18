// To collect user name 


import React, { Component } from 'react'

export default class UsernameForm extends Component {
    constructor(props){
        super(props);
        this.state = {
            username: '',
        }

        // binding functions
        this.onSubmit = this.onSubmit.bind(this);
        this.onChange = this.onChange.bind(this);
    }

// Binded through event "e"
onSubmit(e) {
    e.preventDefault()
    this.props.onSubmit(this.state.username)
}

onChange(e){
    this.setState({
        username: e.target.value
    })
}


    render() {
        return (
            <div>
                <div>
                    <h2> What is your username?</h2>
                    <form onSubmit = {this.onSubmit}>
                        <input
                            type = "text"
                            placeholder = "Insert username"
                            onChange = {this.onChange}
                        />

                        <input type = "submit"/>

                    </form>
                </div>

            </div>
        )
    }
}
