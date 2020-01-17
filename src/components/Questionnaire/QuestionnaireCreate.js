import React from 'react';
import {
  Create,
  TextInput,
  SimpleForm,
  SelectInput,
  ReferenceInput,
  required
} from 'react-admin';
import { parse } from 'query-string';

const QuestionnaireCreate = props => {

  const { QuestionnaireId: QuestionnaireId_string } = parse(props.location.search);
  const QuestionnaireId = QuestionnaireId_string ? parseInt(QuestionnaireId_string, 10) : '';
  const redirect = QuestionnaireId ? `/questionnaires/${QuestionnaireId}/show/questions` : false;
  
  return (
    <Create {...props}>
      <SimpleForm required="/">
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
