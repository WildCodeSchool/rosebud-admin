import React from "react";
import {
  List,
  Datagrid,
  TextField,
  ImageField,
  SimpleForm,
  TextInput,
  Button,
  useUpdate,
  Create,
  Edit,
} from "react-admin";

const ApproveButton = ({ record }) => {
  const [approve, { loading }] = useUpdate('comments', record.id, { isApproved: true }, record);
  return <Button label="Approve" onClick={approve} disabled={loading} />;
};

const AnswerTitle = ({ record }) => (
  <span> {record ? `"${record.title}"` : ""}</span>
);

export const AnswersCreate = (props) => (
  <Create {...props}>
      <SimpleForm>
          <TextInput source="comment" autoComplete="off" />
      </SimpleForm>
  </Create>
);

export const AnswersList = props => {
  return (
    <List {...props}>
      <Datagrid>
        <TextField source="id" />
        <TextField source="QuestionId" />
        <ImageField source="image_url" />
        <TextField source="comment" />
        <ApproveButton />
      </Datagrid>
    </List>
  );
};

export const AnswersEdit = props => (
  <Edit title={<AnswerTitle />} {...props}>
    <SimpleForm>
      <TextInput source="comment" autoComplete="off" />
    </SimpleForm>
  </Edit>
);
