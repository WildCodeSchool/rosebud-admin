import React from "react";
import {
  List,
  Datagrid,
  TextField,
  EditButton,
  SimpleForm,
  TextInput,
  ReferenceInput,
  SelectInput,
  Create,
  Edit,
} from "react-admin";

const QuestionnaireTitle = ({ record }) => (
  <span> {record ? `"${record.title}"` : ""}</span>
);

export const QuestionnairesCreate = (props) => (
  <Create {...props}>
      <SimpleForm>
          <ReferenceInput
                label="Utilisateur"
                source="UserId"
                reference="users"
                filterToQuery={searchText => ({ username: searchText })}
            >
              <SelectInput optionText="username" optionValue="id"/>
          </ReferenceInput>
          <TextInput source="title"  autoComplete="off" />
          <TextInput source="participationText" autoComplete="off" />
          <TextInput source="presentationText" autoComplete="off" />
      </SimpleForm>
  </Create>
);

export const QuestionnairesList = props => {
  return (
    <List {...props}>
      <Datagrid>
        <TextField source="id" />
        <TextField source="title" />
        <TextField source="participationText" />
        <TextField source="presentationText" />
        <EditButton />
      </Datagrid>
    </List>
  );
};

export const QuestionnairesEdit = props => (
  <Edit title={<QuestionnaireTitle />} {...props}>
    <SimpleForm>
      <TextInput source="title" />
      <TextInput source="participationText" autoComplete="off" />
      <TextInput source="presentationText" autoComplete="off" />
    </SimpleForm>
  </Edit>
);
