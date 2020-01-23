import React from 'react';
import {
  ReferenceField,
  Show,
  SimpleShowLayout,
  TextField
} from 'react-admin';

const AnswerShow = props => (
  <Show {...props}>
    <SimpleShowLayout>
      <ReferenceField resource="participants" source="ParticipantId" reference="participants">
        <TextField source="firstName" />
      </ReferenceField>
      <TextField label="Commentaire" source="comment" fullWidth />
    </SimpleShowLayout>
  </Show>
);

export default AnswerShow;
