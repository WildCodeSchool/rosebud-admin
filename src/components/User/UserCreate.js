import React from 'react';
import {
  Create,
  TextInput,
  SimpleForm,
  TopToolbar,
  required
} from 'react-admin';
import BackButton from '../../BackButton';

const UserCreate = props => {

  return (
    <Create  {...props} actions={<TopToolbar><BackButton link="/users" title="Annuler"/></TopToolbar>}>
      <SimpleForm
        redirect="/users"
      >
        <TextInput source="username"  autoComplete="off" fullWidth validate={required()} />
        <TextInput source="email" autoComplete="off" fullWidth validate={required()} />
        <TextInput source="password" autoComplete="off" type="password" fullWidth validate={required()} />
      </SimpleForm>
    </Create>
  );
};

export default UserCreate;
