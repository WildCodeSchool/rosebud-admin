import React, { Component } from "react";
import {fetchUtils, Admin, Resource } from "react-admin";
import jsonServerProvider from "ra-data-json-server";
import { QuestionnairesList, QuestionnairesEdit, QuestionnairesCreate } from './components/Questionnaire/Questionnaire';
import { QuestionsList, QuestionsEdit, QuestionsCreate } from './components/Question/Question';
import { ImagesList, ImagesEdit, ImagesCreate } from './components/Image/Image';
import { AnswersList, AnswersEdit } from './components/Answer/Answer';
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
        <Resource name="answers" list={AnswersList} edit={AnswersEdit} />
        <Resource name="users" />
      </Admin>
    );
  }
}

export default App;
