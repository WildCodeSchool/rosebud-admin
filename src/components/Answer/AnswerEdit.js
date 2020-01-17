import React from 'react';
import {
  Edit,
  TextInput,
  ReferenceInput,
  SelectInput,
  SimpleForm,
  required
} from 'react-admin';

const AnswerEdit = props => {
    
  return (
    <Edit  {...props}>
      <SimpleForm>
        <ReferenceInput
          resource="participants"
          source="ParticipantId"
          reference="participants"
          fullWidth
        >
            <SelectInput disabled optionText="firstName" />
        </ReferenceInput>
        <TextInput multiline label="Commentaire" source="comment" fullWidth validate={required()} />
      </SimpleForm>
    </Edit>
  );
};

export default AnswerEdit;
