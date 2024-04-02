import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import UserList from "./components/UserCard/UserList/UserList";

const App = () => {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>Список пользователей</h1>
        <UserList />
      </div>
    </Provider>
  );
};

export default App;