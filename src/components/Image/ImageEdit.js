import React, {useState} from 'react';
import axios from 'axios';
import {
  Edit,
  TextInput,
  ReferenceInput,
  SelectInput,
  SimpleForm,
  FormDataConsumer,
  Toolbar,
  Button,
  ImageInput,
  ImageField,
  TopToolbar,
  required
} from 'react-admin';
import {Redirect} from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import SaveIcon from '@material-ui/icons/Save';
import { parse } from 'query-string';
import BackButton from '../../BackButton';


const styles = {
  hidden: {
    display: 'none',
  }
};

const ImageEdit = withStyles(styles)(({ classes, ...props }) => {

  const UpdateImageButton = props => (
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
    console.log(...data)
    setRedirectAction(true)
  };

  const { QuestionId: QuestionId_string } = parse(props.location.search);
  const QuestionId = QuestionId_string ? parseInt(QuestionId_string, 10) : '';
  const { QuestionnaireId: QuestionnaireId_string } = parse(props.location.search);
  const QuestionnaireId = QuestionnaireId_string ? parseInt(QuestionnaireId_string, 10) : '';
  const redirect = QuestionId ? `/questions/${QuestionId}/show/?QuestionnaireId=${QuestionnaireId}` : false;
  
  const [redirectAction, setRedirectAction] = useState(false);
  const [currentImage, setCurrentImage] = useState(true);
  const [currentImageUrl, setCurrentImageUrl] = useState(null);

  return (
    (QuestionId && QuestionnaireId) ? (
      <Edit  {...props} actions={<TopToolbar><BackButton link={redirect} title="Annuler" /></TopToolbar>}>
        <SimpleForm
          encType="multipart/form-data"
          onSubmit={convertAndUpdate}
          toolbar={<UpdateImageButton />}
        >
          <ReferenceInput
            resource="questions"
            source="QuestionId"
            reference="questions"
            fullWidth
          >
            <SelectInput optionText="title" optionValue="id" value={QuestionId} disabled />
          </ReferenceInput>
          <TextInput label="Titre" source="title" fullWidth validate={required()} />
          <ImageInput source="image_url" label={false} accept="image/*">
            <ImageField source="src" title="title" />
          </ImageInput>
          <FormDataConsumer>
            {({ formData }) => formData.image_url.src ? setCurrentImage(false) : setCurrentImageUrl(formData.image_url)}
          </FormDataConsumer>
          {currentImage && (
            <ImageField source="image_url" label={false} />
          )}
          {currentImageUrl && currentImage && (
            <TextInput source="currentImage" value={currentImageUrl} label={false} className={classes.hidden} />
          )}
          {redirectAction && <Redirect to={redirect} />}
        </SimpleForm>
      </Edit>
    ) : (
      <Redirect to="/" />
    )
  );
});

export default ImageEdit;
