import React from 'react';
import axios from 'axios';
// import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import AddComponent from './AddComponent';
class MyComponent extends React.Component {
    constructor(props) {
        // const navigate = useNavigate()
        super(props);
        this.state = {
            users: [],
            showJobs: false
        };
    }
    componentDidMount() {
        // axios.get('http://localhost:3000/users.json')
        //     .then(response => {
        //         // console.log(response);
        //         this.setState({ users: response.data });
        //     })
        //     .catch(error => {
        //         console.error(error);
        //     });
        this.fetchUsers();
    }
    fetchUsers = () => {
        axios.get('http://localhost:3000/users.json')
            .then(response => {
                this.setState({ users: response.data });
                // const updatedUsers = this.state.users.filter(user => user.id !== userId);
                // this.setState({ users: updatedUsers });

            })
            .catch(error => {
                console.error(error);
            });
    }
    handleOnChangeName = (event) => {
        this.setState({
            name: event.target.value
        })
    }

    handleClickButton = () => {

        alert('click thành công');
    }

    toggleJobs = () => {
        this.setState(prevState => ({
            showJobs: !prevState.showJobs
        }));
    }

    deleteUser = (userId) => {
        axios.delete('http://localhost:3000/users/' + userId)
            .then(response => {
                console.log(response.data); // Xử lý kết quả thành công
                // Cập nhật lại danh sách người dùng sau khi xóa thành công
                const updatedUsers = this.state.users.filter(user => user.id !== userId);
                this.setState({ users: updatedUsers });
                alert(response.data.message);
            })
            .catch(error => {
                console.error(error); // Xử lý lỗi
            });
    }
    handleUserAdded = (user) => {
        this.setState(prevState => ({
            users: [...prevState.users, user]
        }));
    }
    render() {
        const { users } = this.state;
        let array = this.props.hovaten;

        let name = this.props.name;
        let age = this.props.age
        return (
            // cách 1 dùng div bọc ngoài
            // <div className="that">
            //     <div>
            //         {this.state.users.map(user => (
            //             <div>hello {user.username}</div>
            //         ))}
            //     </div>
            //     <div>
            //         <p>Number of users: {users.length}</p>
            //     </div>
            // </div>
            < React.Fragment >
                <AddComponent onUserAdded={this.handleUserAdded} />
                <div>Tên là : {name}</div>
                <div>Tuổi là : {age}</div>
                <div>{array.map((item, index) => (
                    <div key={index + 1}>
                        {item.Ho} - {item.Ten}
                    </div>
                ))}</div>
                <div>------------</div>
                <div>
                    <input value={this.state.name} type="text " onChange={(event) => this.handleOnChangeName(event)} />
                    My name is : {this.state['name']}
                </div>
                {this.state.showJobs === false ? <div><button onClick={this.toggleJobs}>Show</button></div>
                    :
                    <React.Fragment>
                        <div>
                            {this.state.users.map(user => (

                                <div key={user.id}>hello {user.username}{''}
                                    <button onClick={() => this.deleteUser(user.id)}>x</button>
                                    <Link to={`/users/${user.id}/edit`}>edit</Link>
                                </div>
                            ))}
                        </div>
                        <div>
                            <p>Number of users: {users.length}</p>
                        </div>
                        <div><button onClick={this.toggleJobs}>Hide</button></div>
                    </React.Fragment>
                }
                {/* <div className="third">
                    <button onClick={() => this.handleClickButton()}>Click </button>
                </div> */}

            </React.Fragment >
        )
    }
}
export default MyComponent;
