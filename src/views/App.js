import logo from './logo.svg';
import React from 'react';
// import ReactDOM from 'react-dom';
import './App.css';
import TestComponent from './Example/TestComponent';
import { Link, Routes, Route } from 'react-router-dom'
// import MyComponent from './Example/MyComponent';
import ItemDetail from './Example/ItemDetail';

function App() {
  return (

    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          HELLO TRAN KIM THAT ĐẾN VỚI ÁC MỘNG REACTJS
        </p>

        {/* <li>
          <Link to='/user'>User</Link>
        </li> */}
        <li>
          <Link to='/create-user'>Create User</Link>
        </li>

        <Routes>
          {/* <Route path="/user" element={<MyComponent />} /> */}
          <Route path="/create-user" element={<TestComponent />} />
          <Route path="/users/:userID/edit" element={<ItemDetail />} />
        </Routes>
      </header>
    </div>

  );
}
// const container = document.getElementById('root');
// ReactDOM.render(<App />, container);

export default App;


// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import './App.css';
// import MyComponent from './Example/MyComponent';

// function App() {

//   // const App = () => {
//   const [users, setUsers] = useState([]);

//   useEffect(() => {
//     axios.get('http://localhost:3000/users.json')
//       .then(response => {
//         console.log(response)
//         setUsers(response.data);
//       })
//       .catch(error => {
//         console.error(error);
//       });
//   }, []);

//   return (
//     <div>
//       <table id="customers">
//         <thead>
//           <tr>
//             <th>ID</th>
//             <th>Name</th>
//             <th>Email</th>
//           </tr>
//         </thead>
//         <tbody>
//           {users.map(user => (
//             <tr key={user.id}>
//               <td>{user.id}</td>
//               <td>{user.username}</td>
//               <td>{user.email}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//       <MyComponent />
//     </div>
//   );
// };
// export default App;
