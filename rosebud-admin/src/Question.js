import React from "react";
import {
  List,
  Datagrid,
  TextField,
  BooleanField,
  BooleanInput,
  EditButton,
  SimpleForm,
  TextInput,
  ImageInput,
  ImageField,
  ReferenceInput,
  SelectInput,
  Create,
  Edit,
  FormDataConsumer
} from "react-admin";

const QuestionTitle = ({ record }) => (
  <span> {record ? `"${record.title}"` : ""}</span>
);

export const QuestionsCreate = (props) => (
  <Create title={<QuestionTitle />} {...props}>
      <SimpleForm>
          <ReferenceInput
                label="Questionnaire"
                source="QuestionnaireId"
                reference="questionnaires"
                filterToQuery={searchText => ({ title: searchText })}
            >
                <SelectInput optionText="title" optionValue="id"/>
            </ReferenceInput>
          <TextInput source="title" autoComplete="off" />
          <BooleanInput source="uploadFormat" defaultValue="true"/>
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

export const QuestionsEdit = props => {
    return (
        <Edit title={<QuestionTitle />} {...props}>
            <SimpleForm>
                <TextInput source="title" autoComplete="off" />
                <BooleanInput source="uploadFormat" />
                <FormDataConsumer>
                    {({ formData }) =>
                        !formData.uploadFormat && (
                            <ReferenceInput
                                source="id"
                                reference="questionnaires"
                            >
                                <ImageInput source="images_url" multiple={true} label="Related pictures" accept="image/*" placeholder={<p>Drop your file here</p>}>
                                    <ImageField source="src" title="title" />
                                </ImageInput>
                            </ReferenceInput>
                        )
                    }
                </FormDataConsumer>
            </SimpleForm>
            </Edit>
        )
};
