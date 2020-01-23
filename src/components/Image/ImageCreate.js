import React, {useState} from 'react';
import api from '../../api';
import {
  Create,
  TextInput,
  SimpleForm,
  SelectInput,
  ReferenceInput,
  ImageInput,
  ImageField,
  Button,
  Toolbar,
  TopToolbar,
  required
} from 'react-admin';
import {Redirect} from 'react-router-dom';
import SaveIcon from '@material-ui/icons/Save';
import { parse } from 'query-string';
import BackButton from '../../BackButton';

const ImageCreate = props => {

  const { QuestionId: QuestionId_string } = parse(props.location.search);
  const QuestionId = QuestionId_string ? parseInt(QuestionId_string, 10) : '';
  const { QuestionnaireId: QuestionnaireId_string } = parse(props.location.search);
  const QuestionnaireId = QuestionnaireId_string ? parseInt(QuestionnaireId_string, 10) : '';
  const redirect = QuestionId ? `/questions/${QuestionId}/show/?QuestionnaireId=${QuestionnaireId}` : false;
  
  const [redirectAction, setRedirectAction] = useState(false);

  const AddImageButton = props => (
    <Toolbar>
      <Button 
      label="Save"
        type="submit"
      icon={SaveIcon}
      >
        <SaveIcon />
      </Button>
    </Toolbar>
  );
  
  const convertAndSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    api.post('/api/back/v1/images', data);
    console.log(...data)
    setRedirectAction(true)
  };
  
  return (
    (QuestionId && QuestionnaireId) ? (
    <Create {...props} actions={<TopToolbar><BackButton linkBack={redirect} titleBack="Annuler"/></TopToolbar>}>
        <SimpleForm
          encType="multipart/form-data"
          onSubmit={convertAndSubmit}
          toolbar={<AddImageButton />}
        >
          <ReferenceInput
            source="QuestionId"
            reference="questions"
            fullWidth
          >
            <SelectInput optionText="title" optionValue="id" value={QuestionId} defaultValue={QuestionId} disabled />
          </ReferenceInput>
          <TextInput label="Titre de l'image" source="title" fullWidth validate={required()} />
          <ImageInput source="image_url" label={false} accept="image/*">
            <ImageField source="src" title="title" />
          </ImageInput>
          {redirectAction && <Redirect to={redirect} />}
        </SimpleForm>
      </Create>
    ) : (
      <Redirect to="/" />
    )
  );
};

export default ImageCreate;
