import React from "react";
import axios from 'axios';
// import { useNavigate } from 'react-router-dom';
class AddComponent extends React.Component {
    state = {
        userName: '',
        email: '',
        password: '',
    }

    handleUserName = (event) => {
        this.setState({
            userName: event.target.value,
        });
    };

    handleEmail = (event) => {
        this.setState({
            email: event.target.value,
        });
    };

    handlePassword = (event) => {
        this.setState({
            password: event.target.value,
        });
    };

    handleSubmit = (event) => {
        event.preventDefault();
        if (!this.state.userName || !this.state.email || !this.state.password) {
            alert('hãy điền thông tin')
            return;
        }
        const userData = {
            username: this.state.userName,
            email: this.state.email,
            password: this.state.password,
        };

        this.setState({
            userName: '',
            email: '',
            password: ''
        })

        axios
            .post('http://localhost:3000/users', { user: userData })
            .then((response) => {
                // console.log(response.data);
                alert(response.data.message);
                this.props.onUserAdded(response.data.user);
            })
    };
    render() {
        return (
            <React.Fragment>
                <div>
                    <form>
                        <label htmlFor="username">Username:</label>
                        <br />
                        <input type="text" value={this.state.userName} onChange={this.handleUserName} />
                        <br />
                        <label htmlFor="email">Email:</label>
                        <br />
                        <input type="text" value={this.state.email} onChange={this.handleEmail} />
                        <br />
                        <br />
                        <label htmlFor="password">Password:</label>
                        <br />
                        <input type="password" value={this.state.password} onChange={this.handlePassword} />
                        <br />
                        <br />
                        <input type="submit" onClick={this.handleSubmit} />
                    </form>
                </div>
            </React.Fragment>
        )
    }
}
export default AddComponent;