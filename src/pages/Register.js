import React, { Component } from 'react';
import '../components/assets/css/main.css';

export default class Registration extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: "",
            password: "",
            password_confirmation: "",
            registrationErrors: ""
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit(e) {
        console.log("form submitted");
        e.preventDefault();
    }
    render() {
        return (
            <div>
                <h1>Register</h1>
                <form onSubmit={this.handleSubmit} className="main-form">
                    <input 
                        type="email" 
                        name="email" 
                        placeholder="Email" 
                        value={this.state.email} 
                        onChange={this.handleChange} 
                        required />

                    <input type="password" 
                        name="password" 
                        placeholder="Password" 
                        value={this.state.password} 
                        onChange={this.handleChange} 
                        required />

                    <input type="password" 
                        name="password_confirmation" 
                        placeholder="Password confirmation" 
                        value={this.state.password_confirmation} 
                        onChange={this.handleChange} 
                        required />

                    <button type="submit">Register</button>
                </form>
                <p>Already have an account? Login now</p>
            </div>
        )
    }
}
