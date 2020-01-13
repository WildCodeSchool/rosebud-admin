import React from "react";
import { useMediaQuery } from "@material-ui/core";
import {
  Filter,
  List,
  SimpleList,
  Datagrid,
  TextField,
  BooleanField,
  BooleanInput,
  EditButton,
  EmailField,
  SimpleForm,
  TextInput,
  ReferenceInput,
  SelectInput,
  Create,
  Edit,
    Pagination,
    FormDataConsumer
} from "react-admin";

const QuestionTitle = ({ record }) => (
  <span> {record ? `"${record.title}"` : ""}</span>
);

export const QuestionsCreate = (props) => (
  <Create title={<QuestionTitle />} {...props}>
      <SimpleForm>
          <TextInput source="title" />
          <BooleanInput source="uploadFormat" />
      </SimpleForm>
  </Create>
);
export const QuestionsList = props => {
  return (
    <List {...props}>
      <Datagrid>
        <TextField source="id" />
          <TextField source="title" />
          <TextField source="QuestionnaireId" />
          <BooleanField source="uploadFormat" />
        <EditButton />
      </Datagrid>
    </List>
  );
};

export const QuestionsEdit = props => (
  <Edit title={<QuestionTitle />} {...props}>
    <SimpleForm>
        <TextInput source="title" />
        <BooleanInput source="uploadFormat" />
        <FormDataConsumer>
            {({ formData }) =>
                !formData.uploadFormat && (
                    <p>Test</p>
                )
            }
        </FormDataConsumer>
    </SimpleForm>
  </Edit>
);

