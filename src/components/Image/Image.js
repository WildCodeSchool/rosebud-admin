import React from "react";
import axios from 'axios';
import {
  List,
  Datagrid,
  TextField,
  EditButton,
  SimpleForm,
  TextInput,
  ReferenceInput,
  SelectInput,
  ImageInput, 
  ImageField,
  Create,
  Edit,
} from "react-admin";

const ImageTitle = ({ record }) => (
  <span> {record ? `"${record.title}"` : ""}</span>
);

const ButtonCreate = () => {
    return(
        <button type="submit">Envoyer</button> 
    )
}
const convertAndSubmit = (e) => {
  e.preventDefault();
  const data = new FormData(e.target);
  axios.post('/api/back/v1/images', data);
};

const ButtonEdit = () => {
    return(
        <button type="submit">Modifier</button> 
    )
}
const convertAndUpdate = (e) => {
  e.preventDefault();
  const data = new FormData(e.target);
  axios.put(`/api/back/v1/images`, data);
};

export const ImagesCreate = (props) => (
  <Create {...props}>
    <SimpleForm encType="multipart/form-data" onSubmit={convertAndSubmit}>
            <ReferenceInput
                label="Question"
                source="QuestionId"
                reference="questions"
                filterToQuery={searchText => ({ title: searchText })}
            >
                <SelectInput optionText="title" optionValue="id"/>
            </ReferenceInput>
            <TextInput source="title" autoComplete="off" />
            <ImageInput source="image_url" label="Related pictures" accept="image/*" placeholder={<p>Drop your file here</p>}>
                <ImageField source="src" title="title" />
            </ImageInput>
            <ButtonCreate />
    </SimpleForm> 
  </Create>
);

export const ImagesList = props => {
  return (
    <List {...props}>
      <Datagrid>
        <TextField source="id" />
        <TextField source="title" />
        <ImageField source="image_url" title="title" />
        <EditButton />
      </Datagrid>
    </List>
  );
};

export const ImagesEdit = props => (
  <Edit title={<ImageTitle />} {...props}>
    <SimpleForm encType="multipart/form-data" onSubmit={convertAndUpdate}>
          <TextInput source="id" disabled />
          <ReferenceInput
              label="Question"
              source="QuestionId"
              reference="questions"
              filterToQuery={searchText => ({ title: searchText })}
          >
              <SelectInput optionText="title" optionValue="id"/>
          </ReferenceInput>
          <TextInput source="title" autoComplete="off" />
          <ImageInput source="image_url" accept="image/*">
          <ImageField source="src" title="title" />
        </ImageInput>
          <ButtonEdit />
    </SimpleForm>
  </Edit>
);

