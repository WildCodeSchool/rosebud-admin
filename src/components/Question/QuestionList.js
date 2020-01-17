import React from 'react';
import {
  Datagrid,
  List,
  ReferenceField,
  Responsive,
  ShowButton,
  DeleteButton,
  SimpleList,
  TextField
} from 'react-admin';

const QuestionList = props => (
  <List {...props}>
    <Responsive
      small={
        <SimpleList
          linkType="show"
          primaryText={record => record.title}
        />
      }
      medium={
        <Datagrid>
          <TextField source="id" />
          <ReferenceField
            resource="questionnaires"
            source="QuestionnaireId"
            reference="questionnaires"
          >
            <TextField source="title" />
          </ReferenceField>
          <TextField source="title" />
          <ShowButton />
          <DeleteButton />
        </Datagrid>
      }
    />
  </List>
);

export default QuestionList;
