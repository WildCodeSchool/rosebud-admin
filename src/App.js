import React, { Component } from "react";
import {fetchUtils, Admin, Resource } from "react-admin";
import jsonServerProvider from "ra-data-json-server";
import questionnaires from './components/Questionnaire/';
import questions from './components/Question/';
import images from './components/Image/';
import participants from './components/Participant/';
import answers from './components/Answer/';
import users from './components/User/';
import Dashboard from './components/Dashboard';
import MyLayout from './MyLayout';
import { Login } from 'react-admin';

import authProvider from "./authProvider";

const httpClient = (url, options = {}) => {
  if (!options.headers) {
    options.headers = new Headers({ Accept: 'application/json' });
}
const token = localStorage.getItem('token');
options.headers.set('Authorization', `Bearer ${token}`);
return fetchUtils.fetchJson(url, options);
};
const MyLoginPage = () => <Login backgroundImage="https://upopi.ciclic.fr/sites/default/files/a-essential-killing5.jpg" />;

class App extends Component {
  render() {
    return (
      <Admin
        dataProvider={jsonServerProvider("/api/back/v1", httpClient)}
        authProvider={authProvider}
        title="Rosebud"
        dashboard={Dashboard}
        layout={MyLayout}
        loginPage={MyLoginPage}
      >
        <Resource name="questionnaires" {...questionnaires} />
        <Resource name="questions" {...questions} />
        <Resource name="images" {...images} />
        <Resource name="participants" {...participants} />
        <Resource name="answers" {...answers} />
        <Resource name="users" {...users} />
      </Admin>
    );
  }
}

export default App;
