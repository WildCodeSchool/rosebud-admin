import React from 'react';
import {
  Edit,
  TextInput,
  SimpleForm,
  ReferenceInput,
  SelectInput,
  required,
} from 'react-admin';

const QuestionnaireEdit = props => {
  return (
    <Edit  {...props}>
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
        <TextInput label="Titre" source="title" fullWidth validate={required()} />
        <TextInput multiline label="Texte de participation" source="participationText" fullWidth validate={required()} />
        <TextInput multiline label="Texte de présentation" source="presentationText" fullWidth validate={required()} />
      </SimpleForm>
    </Edit>
  );
};

export default QuestionnaireEdit;
