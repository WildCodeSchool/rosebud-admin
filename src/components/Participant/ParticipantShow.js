import React from 'react';
import {
  Show,
  TabbedShowLayout,
  Tab,
  ReferenceManyField,
  ReferenceField,
  SimpleForm,
  Datagrid,
  TopToolbar,
  FormDataConsumer,
  Toolbar,
  TextField
} from 'react-admin';
import { parse } from 'query-string';
import BackButton from '../../BackButton';
import ApproveButton from './ApproveButton';
import DisapproveButton from './DisapproveButton.js';

const ParticipantShow = props => {

  const { QuestionnaireId: QuestionnaireId_string } = parse(props.location.search);
  const QuestionnaireId = QuestionnaireId_string ? parseInt(QuestionnaireId_string, 10) : '';
  const redirect = QuestionnaireId ? `/questionnaires/${QuestionnaireId}/show/participations` : false;

  const ModerateToolbar = props => (
    <Toolbar {...props}>
      <FormDataConsumer>
        {({ record }) => record.isApproved ? <DisapproveButton participantId={record.id} redirect={redirect} /> : <ApproveButton participantId={record.id} redirect={redirect} />}
      </FormDataConsumer>
    </Toolbar>
  );

  const baseURL = process.env.REACT_APP_API_URL || '';

  return (
    <Show {...props} actions={<TopToolbar><BackButton linkBack={`/questionnaires/${QuestionnaireId}/show/participations`} titleBack="Annuler"/></TopToolbar>}>
      <TabbedShowLayout>
        <Tab label="Réponses">
          <SimpleForm toolbar={<ModerateToolbar/>}>
            <ReferenceManyField
              addLabel={false}
              reference="answers"
              target="ParticipantId"
              fullWidth
            >
              <Datagrid
                fullWidth
              >
                <ReferenceField label="Question" source="QuestionId" reference="questions" target="id" linkType={false}>
                  <TextField source="title" />
                </ReferenceField>
                <FormDataConsumer>
                    {({ record }) =>
                    <img src={baseURL + record.image_url} alt="Answer" width="200px" />
                    }
                </FormDataConsumer>
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
