import React from 'react';
import {
  Datagrid,
  List,
  EmailField,
  Responsive,
  ShowButton,
  DeleteButton,
  SimpleList,
  SelectField,
  TextField
} from 'react-admin';

const ParticipantList = props => (
  <List {...props}>
    <Responsive
      small={
        <SimpleList
          linkType="show"
          primaryText={record => `${record.firstName} ${record.lastName}`}
        />
      }
      medium={
        <Datagrid>
          <TextField label="Prénom" source="firstName" fullWidth />
          <TextField label="Nom" source="lastName" fullWidth />
          <SelectField
            label="Status"
            source="status"
            choices={[
              { id: 'student', name: 'Élève/étudiant' },
              { id: 'teacher', name: 'Enseignant' },
              { id: 'other', name: 'Autre' },
            ]}
          />
          <TextField label="Âge" source="age" fullWidth />
          <TextField label="Ville" source="city" fullWidth />
          <EmailField label="Email" source="email" fullWidth />
          <ShowButton />
          <DeleteButton />
        </Datagrid>
      }
    />
  </List>
);

export default ParticipantList;
