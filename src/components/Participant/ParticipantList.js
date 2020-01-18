import React from 'react';
import {
  Datagrid,
  List,
  EmailField,
  Responsive,
  SimpleList,
  SelectField,
  Filter,
  ReferenceInput,
  AutocompleteInput,
  SelectInput,
  downloadCSV,
  TextField
} from 'react-admin';
import jsonExport from 'jsonexport/dist';

const ParticipantList = props => {
  
  const exporter = (records, fetchRelatedRecords) => {
  fetchRelatedRecords(records, 'id', 'participants').then(participants => {
    const data = records.map(record => ({
              id: participants[record.id].id,
              prenom: participants[record.id].firstName,
              nom: participants[record.id].lastName,
              statut: participants[record.id].status,
              age: participants[record.id].age,
              ville: participants[record.id].city,
              email: participants[record.id].email,
      }));
      jsonExport(data, {
          headers: ['id', 'prenom', 'nom', 'statut', 'age', 'ville', 'email'],
      }, (err, csv) => {;
          downloadCSV(csv, 'participants');
      });
  });
};

const QuestionsFilter = (props) => (
  <Filter {...props}>
    <ReferenceInput
      resource="questionnaires"
      source="QuestionnaireId"
      reference="questionnaires"
      label="Questionnaire"
    >
      <AutocompleteInput optionText="title" optionValue="id" />
    </ReferenceInput>
    <SelectInput
          source="status"
          choices={[
            { id: 'student', name: 'Élève/étudiant' },
            { id: 'teacher', name: 'Enseignant' },
            { id: 'other', name: 'Autre' },
          ]}
    />
  </Filter>
);
  
  return (
    <List {...props} bulkActionButtons={false} exporter={exporter} filters={<QuestionsFilter />}>
      <Responsive
        small={
          <SimpleList
            linkType={false}
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
          </Datagrid>
        }
      />
    </List>
  )
};

export default ParticipantList;
