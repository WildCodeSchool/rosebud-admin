import React, { Component } from "react";
import {fetchUtils, Admin, Resource } from "react-admin";
import jsonServerProvider from "ra-data-json-server";
import { QuestionnairesList, QuestionnairesEdit, QuestionnairesCreate } from './Questionnaire';
import authProvider from "./authProvider";

const httpClient = (url, options = {}) => {
  options.user = {
      authenticated: true,
      token: 'k6e9v2j5r4f3yjbt8ht1fe7htht67fefu82gt6e3fe1ngd2dgrr54eez24fzgr10'
  };
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
      </Admin>
    );
  }
}

export default App;
