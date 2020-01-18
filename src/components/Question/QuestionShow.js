import React, {useEffect, useState} from 'react';
import {
  DeleteButton,
  Show,
  ReferenceManyField,
  SimpleForm,
  TabbedShowLayout,
  Tab,
  Datagrid,
  TextInput,
  ImageField,
  Toolbar,
  TopToolbar,
  TextField
} from 'react-admin';
import { parse } from 'query-string';
import AddImageButton from './AddImageButton';
import EditImageButton from './EditImageButton';
import BackButton from '../../BackButton';

const QuestionShow = props => {

  const { QuestionnaireId: QuestionnaireId_string } = parse(props.location.search);
  const QuestionnaireId = QuestionnaireId_string ? parseInt(QuestionnaireId_string, 10) : '';
  const redirect = QuestionnaireId ? `/questionnaires/${QuestionnaireId}/show/questions` : false;

  const QuestionImagesToolbar = props => (
    <Toolbar {...props}>
      <AddImageButton questionnaireId={QuestionnaireId} />
    </Toolbar>
  );
  
  return (
    <Show {...props} actions={<TopToolbar><BackButton link={redirect} title="Retour aux questions"/></TopToolbar>}>
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
                <ImageField label="Image" source="image_url" />
                <TextField label="Titre" source="title" />
                <EditImageButton questionnaireId={QuestionnaireId} />
                <DeleteButton undoable={false} redirect="" />
              </Datagrid>
            </ReferenceManyField>
          </SimpleForm>
        </Tab>
      </TabbedShowLayout>
    </Show>
  )
};

export default QuestionShow;
