import React from 'react';
import UserList from '../container/user_list';
import '../../scss/main.scss';
const App = () => (
    <div>
        <h2>Username List:</h2>
        <UserList/>
        <hr/>
        <h2>User Details:</h2>
    </div>
);

export default App;