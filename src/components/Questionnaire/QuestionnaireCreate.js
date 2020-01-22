import React from 'react';
import {
  Create,
  TextInput,
  SimpleForm,
  SelectInput,
  ReferenceInput,
  TopToolbar,
  required
} from 'react-admin';
import BackButton from '../../BackButton';

const QuestionnaireCreate = props => {
  
  return (
    <Create {...props} actions={<TopToolbar><BackButton linkBack={`/questionnaires`} titleBack="Annuler"/></TopToolbar>}>
      <SimpleForm 
        redirect="/questionnaires"
      >
        <ReferenceInput
          source="UserId"
          reference="users"
          label="Administrateur" 
          validate={required()}        
          fullWidth
        >
            <SelectInput optionText="username" />
        </ReferenceInput>
        <TextInput label="Titre" source="title" fullWidth validate={required()} />
        <TextInput multiline label="Texte de participation" source="participationText" fullWidth validate={required()} />
        <TextInput multiline label="Texte de présentation" source="presentationText" fullWidth validate={required()} />
      </SimpleForm>
    </Create>
  );
};

export default QuestionnaireCreate;
