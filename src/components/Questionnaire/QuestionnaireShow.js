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
  Toolbar,
  TopToolbar,
  Show,
  Tab,
  TabbedShowLayout,
  FormDataConsumer,
  ReferenceField,
  SimpleForm,
} from "react-admin";

import AddQuestionButton from './AddQuestionButton';
import EditQuestionButton from './EditQuestionButton';
import ShowImagesButton from './ShowImagesButton';
import ModerateButton from './ModerateButton';

import BackButton from '../../BackButton';

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

const QuestionnaireTopToolbar = () => (
  <TopToolbar>
    <BackButton link="/questionnaires" title="Questionnaires" />
  </TopToolbar>
);
 
const QuestionnaireShow = props => {  
return (
<Show {...props} actions={<QuestionnaireTopToolbar />}>
    <TabbedShowLayout>
      <Tab label="Configuration">
        <SimpleForm toolbar={<QuestionnaireToolbar />}>
          <ReferenceField label="Administrateur" resource="users" source="UserId" reference="users" linkType={false}>
            <TextField source="username" />
          </ReferenceField>
          <TextField label="Titre du questionnaire" source="title" fullWidth />
          <TextField multiline label="Texte de présentation du questionnaire" source="participationText" fullWidth />
          <TextField multiline label="Texte de présentation du mur d'images" source="presentationText" fullWidth />
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
              <TextField addLabel={false} source="title" />
              <BooleanField label="Upload" source="uploadFormat" />
              <FormDataConsumer>
              {({ record }) => record.uploadFormat ? "" : <ShowImagesButton QuestionId={record.id} questionnaireId={props.id} />}
              </FormDataConsumer>
              <EditQuestionButton path={props.location.pathname} />
              <DeleteButton undoable={false} redirect="" />
            </Datagrid>
          </ReferenceManyField>
        </SimpleForm>
      </Tab>
      <Tab label="Participations" path="participations">
        <SimpleForm toolbar={false}>
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
              <BooleanField label="En ligne" source="isApproved" defaulValue />
              <FormDataConsumer>
              {({ record }) => <ModerateButton partipantId={record.id} questionnaireId={props.id} />}
              </FormDataConsumer>
            </Datagrid>
          </ReferenceManyField>
        </SimpleForm>
      </Tab>
    </TabbedShowLayout>
  </Show>
  )
}

export default QuestionnaireShow;
