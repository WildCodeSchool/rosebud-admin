import React, { useState } from "react";
import { Admin, Resource } from "react-admin";
import jsonServerProvider from "ra-data-json-server";
//import UserList from './UserList'
import authProvider from "./authProvider";
import Questionnaires from "./Questionnaires";

function App() {

  <Admin
    dataProvider={jsonServerProvider("/api/v1/questionnaires")}
    authProvider={authProvider}
  >
    <Resource name="questionnaires" list={Questionnaires} />
  </Admin>;
}

export default App;
