import React, { useState, useEffect } from 'react';
import api from '../../api';
import {
  Edit,
  TextInput,
  SimpleForm,
  ReferenceInput,
  SelectInput,
  required,
  BooleanInput,
  TopToolbar
} from 'react-admin';
import BackButton from '../../BackButton';

const QuestionnaireEdit = props => {
  const [ questionsCounter, setQuestionsCounter ] = useState(null);

  useEffect(() => {
    const fetchQuestionsCounter = async () => {
      const result = await api.get(`/api/back/v1/metrics/questions/${props.id}`);
      setQuestionsCounter(result.data);
    }
    fetchQuestionsCounter();
  }, [props.id])

  const questionsCondition = (nbQuestions) => {
    if(nbQuestions >= 3 && nbQuestions <= 5){
      return <BooleanInput label="Publié" source="isOnline" fullWidth defaultValue={false} />
    } else {
      return (
        <p fullWidth>Ce questionnaire doit contenir au minimum 3 questions pour être rendu public.</p>
      )
    } 
  }

  return (
    <Edit {...props} actions={<TopToolbar><BackButton linkBack={`${props.location.pathname}/show`} titleBack="Annuler"/></TopToolbar>}>
      <SimpleForm
        redirect={`${props.location.pathname}/show`}
      >
        <ReferenceInput
          source="UserId"
          reference="users"
          label="Administrateur" 
          validate={required()}        
          fullWidth
        >
            <SelectInput optionText="username" defaultValue />
        </ReferenceInput>
          <TextInput autoComplete="off" multiline label="Titre du questionnaire" source="title" fullWidth validate={required()}  />
          <TextInput autoComplete="off" multiline label="Texte de présentation du questionnaire" source="participationText" fullWidth validate={required()} />
          <TextInput autoComplete="off" multiline label="Texte de présentation du mur d'images" source="presentationText" fullWidth validate={required()} />
          {questionsCondition && questionsCondition(questionsCounter)}
      </SimpleForm>
    </Edit>
  );
};

export default QuestionnaireEdit;
