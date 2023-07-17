// import React from 'react';
// import axios from 'axios';
// // import MyComponent from './MyComponent';

// class TestComponent extends React.Component {

//     constructor(props) {

//         super(props);
//         this.state = {
//             userName: '',
//             email: '',
//             password: '',
//         };
//     }


//     handleUserName = (event) => {
//         this.setState({
//             userName: event.target.value,
//         });
//     }

//     handleEmail = (event) => {
//         this.setState({
//             email: event.target.value,
//         });
//     }

//     handlePassword = (event) => {
//         this.setState({
//             password: event.target.value,
//         });
//     }
//     handleSubmit = (event) => {
//         event.preventDefault();

//         const userData = {
//             username: this.state.userName,
//             email: this.state.email,
//             password: this.state.password,
//         };

//         axios.post('http://localhost:3000/users', { user: userData })

//             .then(response => {
//                 console.log(response.data);
//                 alert(response.data.message);

//             })
//             .catch(error => {
//                 // Xử lý lỗi
//                 console.error(error);
//                 alert('Đã xảy ra lỗi khi gửi dữ liệu');
//             });
//     }

//     render() {
//         return (
//             <React.Fragment>
//                 <div>
//                     <form>
//                         <label htmlFor="username">Username:</label><br />
//                         <input type="text" value={this.state.userName} onChange={this.handleUserName} /><br />
//                         <label htmlFor="email">Email:</label><br />
//                         <input type="text" value={this.state.email} onChange={this.handleEmail} /><br /><br />
//                         <label htmlFor="password">Password:</label><br />
//                         <input type="password" value={this.state.password} onChange={this.handlePassword} /><br /><br />
//                         <input type="submit" onClick={this.handleSubmit} />
//                     </form>

//                 </div>
//             </React.Fragment>
//         );
//     }
// }
// export default TestComponent;
// import ChildeComponent from './ChildeComponent';
// import axios from 'axios';
import React from 'react';
// import AddComponent from './AddComponent';
import MyComponent from './MyComponent';
// import ChildComponent from './ChildeComponent';


class TestComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            array: [
                { id: '1', Ho: 'Tran', Ten: 'kim that' },
                { id: '2', Ho: 'Tran', Ten: 'tien dat' }
            ],
            users: [],
        };

    }

    render() {
        // const { users } = this.state;
        return (
            <React.Fragment>
                <MyComponent
                    name={'that'}
                    age={'25'}
                    hovaten={this.state.array}
                />
            </React.Fragment>
        );
    }
}

export default TestComponent;

