import React from 'react';
import {
  Show,
  TabbedShowLayout,
  Tab,
  ReferenceManyField,
  ReferenceField,
  SimpleForm,
  Datagrid,
  ImageField,
  TextField
} from 'react-admin';

const ParticipantShow = props => {
  return (
    <Show {...props}>
      <TabbedShowLayout>
        <Tab label="Réponses participant">
          <SimpleForm>
            <ReferenceManyField
              addLabel={false}
              reference="answers"
              target="ParticipantId"
              fullWidth
            >
              <Datagrid fullWidth>
                <ReferenceField label="Question" source="QuestionId" reference="questions" target="id" linkType={false}>
                  <TextField source="title" />
                </ReferenceField>
                <ImageField source="image_url" label="Image" />
                <TextField source="comment" label="Commentaire" />
              </Datagrid>
            </ReferenceManyField>
          </SimpleForm>
      </Tab>
      </TabbedShowLayout>
    </Show>
  )
};

export default ParticipantShow;
