import React, { Component } from "react";
import {fetchUtils, Admin, Resource } from "react-admin";
import jsonServerProvider from "ra-data-json-server";
import { QuestionnairesList, QuestionnairesEdit, QuestionnairesCreate } from './Questionnaire';
import { QuestionsList, QuestionsEdit, QuestionsCreate } from './Question';
import { ImagesList, ImagesEdit, ImagesCreate } from './Image';
import { UsersList, UsersEdit, UsersCreate } from './User';
import authProvider from "./authProvider";

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
      >
        <Resource name="questionnaires" create={QuestionnairesCreate} list={QuestionnairesList} edit={QuestionnairesEdit}  />
        <Resource name="questions" create={QuestionsCreate} list={QuestionsList} edit={QuestionsEdit} />
        <Resource name="images" create={ImagesCreate} list={ImagesList} edit={ImagesEdit} />
        <Resource name="users" />
      </Admin>
    );
  }
}

export default App;
