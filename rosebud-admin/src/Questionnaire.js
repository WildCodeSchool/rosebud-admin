import React from "react";
import { useMediaQuery } from "@material-ui/core";
import {
  Filter,
  List,
  SimpleList,
  Datagrid,
  TextField,
  EditButton,
  EmailField,
  SimpleForm,
  TextInput,
  ReferenceInput,
  SelectInput,
  Create,
  Edit,
  Pagination,
  DateInput
} from "react-admin";

const QuestionnaireTitle = ({ record }) => (
  console.log(record),
  
  <span> {' '} {record ? `Modifier le Questionnaire "${record.title}"` : ""}</span>
);

export const QuestionnairesCreate = (props) => (
  <Create title={"Creer un nouveaux Questionnaire"} {...props}>
      <SimpleForm>
          <TextInput source="title" />
          <TextInput source="description_participate"/>
          <TextInput source="description_consult"/>
          <DateInput label="Publication date" source="createdAt" defaultValue={new Date()} />
      </SimpleForm>
  </Create>
);
export const QuestionnairesList = (props) => {
  return (
    <List {...props}>
      <Datagrid>
        <TextField source="id" />
        <TextField source="title" />
        <TextField source="description_participate" />
        <TextField source="description_consult" />
        <EditButton />
      </Datagrid>
    </List>
  );
};
export const QuestionnairesEdit = (props) => (
  <Edit title={<QuestionnaireTitle />} {...props}>
    <SimpleForm>
      <TextInput source="title" />
      <TextInput source="description_participate" />
      <TextInput source="description_consult" />
    </SimpleForm>
  </Edit>
);

