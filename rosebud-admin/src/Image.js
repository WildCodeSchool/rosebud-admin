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

const convertFormData = (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    axios.post('/api/back/v1/images', data);
    console.log(...data);
};
  
const ButtonSubmit = () => {
    return(
        <button type="submit">Envoyer</button> 
    )
}

export const ImagesCreate = (props) => (
  <Create {...props}>
  <SimpleForm encType="multipart/form-data" onSubmit={convertFormData}>
            <ReferenceInput
                label="Question"
                source="QuestionId"
                reference="questions"
                filterToQuery={searchText => ({ title: searchText })}
            >
                <SelectInput optionText="title" optionValue="id"/>
            </ReferenceInput>
            <TextInput source="title" />
            <ImageInput source="image_url" multiple={false} label="Related pictures" accept="image/*" placeholder={<p>Drop your file here</p>}>
                <ImageField source="src" title="title" />
            </ImageInput>
            <ButtonSubmit />
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
    <SimpleForm>
      <TextInput source="title" />
    </SimpleForm>
  </Edit>
);

