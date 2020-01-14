import React from "react";
import {
  List,
  Datagrid,
  TextField,
  EditButton,
  SimpleForm,
  TextInput,
  Create,
  Edit,
} from "react-admin";

const UserTitle = ({ record }) => (
  <span> {record ? `"${record.username}"` : ""}</span>
);

export const UsersCreate = (props) => (
  <Create title={<UserTitle />} {...props}>
      <SimpleForm>
          <TextInput source="username"  autoComplete="off" />
          <TextInput source="email" autoComplete="off" />
          <TextInput source="password" autoComplete="off" value="" />
      </SimpleForm>
  </Create>
);

export const UsersList = props => {
  return (
    <List {...props}>
      <Datagrid>
        <TextField source="id" />
        <TextField source="username" />
        <TextField source="email" />
        <EditButton />
      </Datagrid>
    </List>
  );
};

export const UsersEdit = props => (
  <Edit title={<UserTitle />} {...props}>
    <SimpleForm>
        <TextInput source="username"  autoComplete="off" />
        <TextInput source="email" autoComplete="off" />
        <TextInput source="password" autoComplete="off" value="" />
    </SimpleForm>
  </Edit>
);
