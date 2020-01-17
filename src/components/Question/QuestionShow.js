import React from 'react';
import {
  ReferenceField,
  EditButton,
  DeleteButton,
  Show,
  ReferenceManyField,
  SimpleForm,
  TabbedShowLayout,
  Tab,
  Datagrid,
  TextInput,
  ImageField,
  Toolbar,
  TextField
} from 'react-admin';
import AddImageButton from './AddImageButton';

const QuestionShow = props => {

const QuestionImagesToolbar = props => (
  <Toolbar {...props}>
    <AddImageButton />
  </Toolbar>
);
  
  return (
    <Show {...props}>
      <TabbedShowLayout>
        <Tab label="Images en séléction">
          <SimpleForm toolbar={<QuestionImagesToolbar />}>
            <TextInput source="title" label="Question" fullWidth disabled />
            <ReferenceManyField
              addLabel={false}
              reference="images"
              target="QuestionId"
              fullWidth
            >
              <Datagrid fullWidth>
                <ImageField label="Image" source="image_url" />
                <TextField label="Titre" source="title" />
                <EditButton />
                <DeleteButton />
              </Datagrid>
            </ReferenceManyField>
          </SimpleForm>
        </Tab>
      </TabbedShowLayout>
    </Show>
  )
};

export default QuestionShow;
