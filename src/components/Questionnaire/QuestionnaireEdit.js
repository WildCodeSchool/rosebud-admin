import React from 'react';
import {
  Edit,
  TextInput,
  SimpleForm,
  ReferenceInput,
  SelectInput,
  required,
  BooleanInput,
  TopToolbar
} from 'react-admin';
import BackButton from '../../BackButton';

const QuestionnaireEdit = props => {
  return (
    <Edit {...props} actions={<TopToolbar><BackButton linkBack={`${props.location.pathname}/show`} titleBack="Annuler"/></TopToolbar>}>
      <SimpleForm
        redirect={`${props.location.pathname}/show`}
      >
        <ReferenceInput
          source="UserId"
          reference="users"
          label="Administrateur" 
          validate={required()}        
          fullWidth
        >
            <SelectInput optionText="username" defaultValue />
        </ReferenceInput>
          <TextInput autoComplete="off" multiline label="Titre du questionnaire" source="title" fullWidth validate={required()}  />
          <TextInput autoComplete="off" multiline label="Texte de présentation du questionnaire" source="participationText" fullWidth validate={required()} />
          <TextInput autoComplete="off" multiline label="Texte de présentation du mur d'images" source="presentationText" fullWidth validate={required()} />
          <BooleanInput label="Publié" source="isOnline" fullWidth defaultValue={false} />
          <BooleanInput label="Privé" source="isPrivate" fullWidth defaultValue={false} />
      </SimpleForm>
    </Edit>
  );
};

export default QuestionnaireEdit;
