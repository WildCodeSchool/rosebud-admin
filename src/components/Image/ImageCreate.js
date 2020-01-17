import React from 'react';
import axios from 'axios';
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
  required
} from 'react-admin';
import SaveIcon from '@material-ui/icons/Save';
import { parse } from 'query-string';

const ImageCreate = props => {

  const { QuestionId: QuestionId_string } = parse(props.location.search);
  const QuestionId = QuestionId_string ? parseInt(QuestionId_string, 10) : '';
  const redirect = QuestionId ? `/questionnaires/${QuestionId}/show/questions` : false;
  
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
    axios.post('/api/back/v1/images', data);
  };

  return (
    <Create {...props}>
      <SimpleForm
        encType="multipart/form-data"
        onSubmit={convertAndSubmit}
        redirect={redirect}
        toolbar={<AddImageButton />}
      >
      <ReferenceInput
        source="QuestionId"
        reference="questions"
        fullWidth
      >
          <SelectInput optionText="title" optionValue="id" defaultValue={QuestionId} disabled />
      </ReferenceInput>
        <TextInput label="Titre de l'image" source="title" fullWidth validate={required()} />
        <ImageInput source="image_url" label={false} accept="image/*">
            <ImageField source="src" title="title" />
        </ImageInput>
      </SimpleForm>
    </Create>
  );
};

export default ImageCreate;
