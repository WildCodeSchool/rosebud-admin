import React, { useEffect, useState } from "react";
import api from '../../api';
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
  useMutation,
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

const QuestionsToolbar = props => {
  const [isOffline] = useMutation({
    type: 'update',
    resource: 'questionnaires',
    payload: { id: props.record.id, data: { isOnline: false } }
  });

  const [ questionsCounter, setQuestionsCounter ] = useState(null);

  useEffect(() => {
    const fetchQuestionsCounter = async () => {
      const result = await api.get(`/api/back/v1/metrics/questions/${props.record.id}`);
      setQuestionsCounter(result.data);
      (result.data < 3) && isOffline();
    }
    fetchQuestionsCounter();
  }, [questionsCounter, isOffline, props.record.id])

  const maxQuestions = (nbQuestions) => {
      if(nbQuestions < 5){
        return <AddQuestionButton />
      } else {
        return (
          <p>Nombre maximum de questions : 5</p>
        )
      } 
    }

  return (
  <Toolbar {...props}>
    {questionsCounter !== null && maxQuestions(questionsCounter)}
  </Toolbar>
  )
};

const QuestionnaireTopToolbar = () => (
  <TopToolbar>
    <BackButton linkBack="/questionnaires" titleBack="Questionnaires" />
  </TopToolbar>
);
 
const QuestionnaireShow = props => {  

return (
<Show {...props} actions={<QuestionnaireTopToolbar />}>
    <TabbedShowLayout>
      <Tab label="Configuration">
        <SimpleForm toolbar={<QuestionnaireToolbar />}>
          <ReferenceField label="Administrateur" resource="users" source="UserId" reference="users" link={false}>
            <TextField source="username" />
          </ReferenceField>
          <TextField label="Titre du questionnaire" source="title" />
          <TextField label="Texte de présentation du questionnaire" source="participationText" />
          <TextField label="Texte de présentation du mur d'images" source="presentationText" />
          <BooleanField label="Publié" source="isOnline" defaultValue={false} />
          <BooleanField label="Privé" source="isPrivate" defaultValue={false} />
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
            <Datagrid>
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
            <Datagrid>
              <TextField label="Prénom" source="firstName" />
              <TextField label="Nom" source="lastName" />
              <SelectField
                label="Status"
                source="status"
                choices={[
                  { id: 'student', name: 'Élève/étudiant' },
                  { id: 'teacher', name: 'Enseignant' },
                  { id: 'other', name: 'Autre' },
                ]}
              />
              <TextField label="Âge" source="age" />
              <TextField label="Ville" source="city" />
              <EmailField label="Email" source="email" />
              <BooleanField label="En ligne" source="isApproved" defaulValue />
              <FormDataConsumer>
              {({ record }) => <ModerateButton partipantId={record.id} questionnaireId={props.id} />}
              </FormDataConsumer>
              <DeleteButton undoable={false} redirect="" />
            </Datagrid>
          </ReferenceManyField>
        </SimpleForm>
      </Tab>
    </TabbedShowLayout>
  </Show>
  )
}

export default QuestionnaireShow;
