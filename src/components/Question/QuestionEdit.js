import React from 'react';
import {
  Edit,
  TextInput,
  ReferenceInput,
  SelectInput,
  SimpleForm,
  BooleanInput,
  required
} from 'react-admin';
import { parse } from 'query-string';

const QuestionEdit = props => {
    
  const { QuestionnaireId: QuestionnaireId_string } = parse(props.location.search);
  const QuestionnaireId = QuestionnaireId_string ? parseInt(QuestionnaireId_string, 10) : '';
  const redirect = QuestionnaireId ? `/questionnaires/${QuestionnaireId}/show/questions` : false;

  return (
    <Edit  {...props}>
      <SimpleForm
        redirect={redirect}
      >
        <ReferenceInput
          source="QuestionnaireId"
          reference="questionnaires"
          fullWidth
        >
            <SelectInput optionText="title" optionValue="id" defaultValue={QuestionnaireId} disabled />
        </ReferenceInput>
        <TextInput label="Question" source="title" fullWidth validate={required()} />
        <BooleanInput label="Upload format" source="uploadFormat" fullWidth defaultValue />
      </SimpleForm>
    </Edit>
  );
};

export default QuestionEdit;
