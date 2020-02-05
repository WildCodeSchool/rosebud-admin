import React from 'react';
import {
  Create,
  TextInput,
  SimpleForm,
  SelectInput,
  ReferenceInput,
  TopToolbar,
  BooleanInput,
  required
} from 'react-admin';
import BackButton from '../../BackButton';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  textWarning: {
    color: 'red',
    fontSize: '13px',
    textAlign: 'right',
  },
});

const QuestionnaireCreate = props => {
  const classes = useStyles();
  return (
    <Create {...props} actions={<TopToolbar><BackButton linkBack={`/questionnaires`} titleBack="Annuler"/></TopToolbar>}>
      <SimpleForm 
        redirect="/questionnaires"
      >
        <ReferenceInput
          source="UserId"
          reference="users"
          label="Administrateur" 
          validate={required()}        
          fullWidth
        >
            <SelectInput optionText="username" />
        </ReferenceInput>
        <TextInput autoComplete="off" label="Titre" source="title" fullWidth validate={required()} />
        <TextInput multiline autoComplete="off" label="Texte de présentation du questionnaire" source="participationText" fullWidth validate={required()} />
        <TextInput multiline autoComplete="off" label="Texte de présentation du mur d'images" source="presentationText" fullWidth validate={required()} />
        <BooleanInput label="Privé" source="isPrivate" fullWidth defaultValue={false} />
        <p className={classes.textWarning} fullWidth>Un questionnaire doit contenir au minimum 3 questions pour être rendu public.</p>
      </SimpleForm>
    </Create>
  );
};

export default QuestionnaireCreate;
