import React from 'react';
import {
  Edit,
  TextInput,
  ReferenceInput,
  SelectInput,
  SimpleForm,
  required
} from 'react-admin';

const ParticipantEdit = props => {
    
  return (
    <Edit  {...props}>
      <SimpleForm>
        <ReferenceInput
          resource="questionnaires"
          source="QuestionnaireId"
          reference="questionnaires"
          fullWidth
        >
            <SelectInput disabled optionText="title" />
        </ReferenceInput>
        <TextInput label="Prénom" source="firstName" fullWidth validate={required()} />
        <TextInput label="Nom" source="lastName" fullWidth validate={required()} />
        <SelectInput
          label="Status"
          source="status"
          choices={[
            { id: 'student', name: 'Élève/étudiant' },
            { id: 'teacher', name: 'Enseignant' },
            { id: 'other', name: 'Autre' },
          ]}
          fullWidth
          validate={required()}
        />
        <TextInput label="Âge" source="age" fullWidth validate={required()} />
        <TextInput label="Ville" source="city" fullWidth validate={required()} />
        <TextInput label="Email" source="email" fullWidth validate={required()} />
      </SimpleForm>
    </Edit>
  );
};

export default ParticipantEdit;
