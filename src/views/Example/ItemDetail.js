import React from 'react';
import axios from 'axios';
// import { useParams } from 'react-router-dom';
import { useParams } from 'react-router-dom';
// import { Redirect } from "react-router-dom";



class ItemDetail extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            users: [],
        };
    }

    handleUserName = (event) => {
        this.setState({
            userName: event.target.value,
            // email: event.target.value,
        });
    };

    handleEmail = (event) => {
        this.setState({
            email: event.target.value,
        });
    };

    componentDidMount() {
        const { userID } = this.props;
        this.fetchUsers(userID);
    }

    fetchUsers = (userID) => {
        axios.get(`http://localhost:3000/users/${userID}/edit`)
            .then(response => {
                this.setState({ users: response.data });
            })
            .catch(error => {
                console.error(error);
            });
    }
    handleUpdate = () => {
        const { userID } = this.props;
        const userData = {
            username: this.state.userName,
            email: this.state.email,
        };
        axios.put(`http://localhost:3000/users/${userID}`, { user: userData })
            .then((response) => {
                alert(response.data.message);
            })

    }

    render() {
        const { users } = this.state;
        // console.log(users);
        return (
            <div>
                <h1>User Detail</h1>
                <label>Tên đăng nhập</label>
                <input style={{ width: '100%' }} defaultValue={users.username} onChange={this.handleUserName} />
                <label>email</label>
                <input style={{ width: '100%' }} defaultValue={users.email} onChange={this.handleEmail} />
                <input type="submit" onClick={this.handleUpdate} />
            </div>
        );

    }
}

const ItemDetailWrapper = () => {
    const { userID } = useParams();

    return <ItemDetail userID={userID} />;
};

export default ItemDetailWrapper;
