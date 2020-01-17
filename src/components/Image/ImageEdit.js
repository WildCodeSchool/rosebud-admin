import React from 'react';
import axios from 'axios';
import {
  Edit,
  TextInput,
  ReferenceInput,
  SelectInput,
  SimpleForm,
  Toolbar,
  Button,
  ImageInput,
  ImageField,
  required
} from 'react-admin';
import SaveIcon from '@material-ui/icons/Save';
import { parse } from 'query-string';

const ImageEdit = props => {
  const EditImageButton = props => (
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
  
  const convertAndUpdate = (e) => {
    e.preventDefault();
    const imageId = props.location.pathname.split('/').pop();
    const data = new FormData(e.target);
    axios.put(`/api/back/v1/images/${imageId}`, data);
  };

  const { QuestionId: QuestionId_string } = parse(props.location.search);
  const QuestionId = QuestionId_string ? parseInt(QuestionId_string, 10) : '';
  const redirect = QuestionId ? `/questionnaires/${QuestionId}/show/questions` : false;

  return (
    <Edit  {...props}>
      <SimpleForm
        encType="multipart/form-data"
        onSubmit={convertAndUpdate}
        toolbar={<EditImageButton />}
        redirect={redirect}
        >
        <ReferenceInput
          resource="questions"
          source="QuestionId"
          reference="questions"
          fullWidth
        >
            <SelectInput optionText="title" optionValue="id" defaultValue={QuestionId} disabled />
        </ReferenceInput>
        <TextInput label="Titre" source="title" fullWidth validate={required()} />
        <ImageInput source="image_url" label={false} accept="image/*">
            <ImageField source="src" title="title" />
        </ImageInput>
      </SimpleForm>
    </Edit>
  );
};

export default ImageEdit;
