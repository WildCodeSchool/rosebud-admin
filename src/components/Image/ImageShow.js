import React from 'react';
import {
  Show,
  SimpleShowLayout,
  ReferenceField,
  ImageField,
  TextField
} from 'react-admin';

const ImageShow = props => {
  return (
    <Show {...props}>
    <SimpleShowLayout>
      <ReferenceField resource="questions" source="QuestionId" reference="questions">
        <TextField source="title" />
      </ReferenceField>
      <TextField label="Titre" source="title" fullWidth />
      <ImageField label="Image" source="image_url" />
    </SimpleShowLayout>
    </Show>
  )
};

export default ImageShow;
