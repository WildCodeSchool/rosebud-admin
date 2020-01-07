import React, {useState} from 'react';
import { Admin, Resource } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';
import UserList from './UserList'
import authProvider from './authProvider';
import axios from 'axios'

console.log(authProvider)
const App = () => (
  <Admin dataProvider={jsonServerProvider('http://localhost:3001')} authProvider={authProvider} >
      <Resource name="users" list={UserList} />
  </Admin>
);
const [questionList, setquestionList] = useState()

axios.get ('api/v1/questionnaires')
  .then(res => )

export default App;
