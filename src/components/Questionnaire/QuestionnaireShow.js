import React from "react";
import {
  Datagrid,
  TextField,
  ReferenceManyField,
  BooleanField,
  SelectField,
  EmailField,
  DeleteButton,
  EditButton,
  ShowButton,
  Toolbar,
  Show,
  Tab,
  TabbedShowLayout,
  FormDataConsumer,
  SimpleForm,
} from "react-admin";

import AddQuestionButton from './AddQuestionButton';
import EditQuestionButton from './EditQuestionButton';
import ShowImagesButton from './ShowImagesButton';

const QuestionnaireToolbar = props => (
  <Toolbar {...props}>
      <EditButton />
  </Toolbar>
);

const QuestionsToolbar = props => (
  <Toolbar {...props}>
    <AddQuestionButton />
  </Toolbar>
);

const QuestionnaireShow = props => {  
return (
<Show {...props}>
    <TabbedShowLayout>
      <Tab label="Descriptions">
        <SimpleForm toolbar={<QuestionnaireToolbar />}>
          <TextField multiline label="Texte de participation" source="participationText" fullWidth />
          <TextField multiline label="Texte de présenation" source="presentationText" fullWidth />
        </SimpleForm>
      </Tab>
      <Tab label="Questions" path="questions">
        <SimpleForm toolbar={<QuestionsToolbar />}>
          <ReferenceManyField
            addLabel={false}
            reference="questions"
            target="QuestionnaireId"
            fullWidth
          >
            <Datagrid fullWidth>
              <TextField label={false} source="title" />
              <BooleanField label="Upload" source="uploadFormat" />
              <FormDataConsumer>
              {({ record }) => record.uploadFormat ? "" : <ShowImagesButton QuestionId={record.id} />}
              </FormDataConsumer>
              <EditQuestionButton path={props.location.pathname} />
              <DeleteButton undoable={false} redirect="" />
            </Datagrid>
          </ReferenceManyField>
        </SimpleForm>
      </Tab>
      <Tab label="Participations" path="participations">
          <ReferenceManyField
            addLabel={false}
            reference="participants"
            target="QuestionnaireId"
            fullWidth
          >
            <Datagrid fullWidth>
              <TextField label="Prénom" source="firstName" fullWidth />
              <TextField label="Nom" source="lastName" fullWidth />
              <SelectField
                label="Status"
                source="status"
                choices={[
                  { id: 'student', name: 'Élève/étudiant' },
                  { id: 'teacher', name: 'Enseignant' },
                  { id: 'other', name: 'Autre' },
                ]}
              />
              <TextField label="Âge" source="age" fullWidth />
              <TextField label="Ville" source="city" fullWidth />
              <EmailField label="Email" source="email" fullWidth />
              <BooleanField label="Approuvée" source="isApproved" defaulValue />
              <ShowButton />
            </Datagrid>
          </ReferenceManyField>
      </Tab>
    </TabbedShowLayout>
  </Show>
  )
}

export default QuestionnaireShow;
