import React from 'react';
import {
  DeleteButton,
  Show,
  ReferenceManyField,
  SimpleForm,
  TabbedShowLayout,
  Tab,
  Datagrid,
  TextInput,
  FormDataConsumer,
  Toolbar,
  TopToolbar,
  TextField
} from 'react-admin';
import { Redirect } from 'react-router-dom';
import { parse } from 'query-string';
import AddImageButton from './AddImageButton';
import EditImageButton from './EditImageButton';
import BackButton from '../../BackButton';

const QuestionShow = props => {

  const { QuestionnaireId: QuestionnaireId_string } = parse(props.location.search);
  const QuestionnaireId = QuestionnaireId_string ? parseInt(QuestionnaireId_string, 10) : '';
  const redirect = `/questionnaires/${QuestionnaireId}/show/questions`;

  const QuestionImagesToolbar = props => (
    <Toolbar {...props}>
      <AddImageButton questionnaireId={QuestionnaireId} />
    </Toolbar>
  );
  
  const baseURL = process.env.REACT_APP_API_URL || '';

  return (
    QuestionnaireId ? (
    <Show {...props} actions={<TopToolbar><BackButton linkBack={redirect} titleBack="Retour aux questions"/></TopToolbar>}>
      <TabbedShowLayout>
        <Tab label="Images">
          <SimpleForm toolbar={<QuestionImagesToolbar />}>
            <TextInput source="title" label="Question" fullWidth disabled />
            <ReferenceManyField
              addLabel={false}
              reference="images"
              target="QuestionId"
              fullWidth
            >
              <Datagrid fullWidth>
              <FormDataConsumer>
                  {({ record }) =>
                  <img src={baseURL + record.image_url} alt="Answer" width="200px" />
                  }
              </FormDataConsumer>
                <TextField label="Titre" source="title" />
                <EditImageButton questionnaireId={QuestionnaireId} />
                <DeleteButton undoable={false} redirect="" />
              </Datagrid>
            </ReferenceManyField>
          </SimpleForm>
        </Tab>
      </TabbedShowLayout>
      </Show>
    ) : (
      <Redirect to="/" />
    )
  )
};

export default QuestionShow;
