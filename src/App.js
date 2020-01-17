import React, { Component } from "react";
import {fetchUtils, Admin, Resource } from "react-admin";
import jsonServerProvider from "ra-data-json-server";
import questionnaires from './components/Questionnaire/';
import questions from './components/Question/';
import images from './components/Image/';
import participants from './components/Participant/';
import answers from './components/Answer/';
import { UsersList, UsersEdit, UsersCreate } from './components/User/User';

import authProvider from "./authProvider";
import Dashboard from './components/Dashboard';
import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    type: 'light', 
  },
});

const httpClient = (url, options = {}) => {
  if (!options.headers) {
    options.headers = new Headers({ Accept: 'application/json' });
}
const token = localStorage.getItem('token');
options.headers.set('Authorization', `Bearer ${token}`);
return fetchUtils.fetchJson(url, options);
};

class App extends Component {
  render() {
    return (
      <Admin
        dataProvider={jsonServerProvider("/api/back/v1", httpClient)}
        authProvider={authProvider}
        title="Rosebud Admin"
        dashboard={Dashboard}
        theme={theme}
      >
        <Resource name="questionnaires" {...questionnaires} />
        <Resource name="questions" {...questions} />
        <Resource name="images" {...images} />
        <Resource name="participants" {...participants} />
        <Resource name="answers" {...answers} />
        <Resource name="users" list={UsersList} edit={UsersEdit} create={UsersCreate} />
      </Admin>
    );
  }
}

export default App;
