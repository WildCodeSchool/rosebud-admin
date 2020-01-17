import React from 'react';
import {
  Datagrid,
  List,
  Responsive,
  ShowButton,
  DeleteButton,
  SimpleList,
  TextField
} from 'react-admin';

const AnswerList = props => (
  <List {...props}>
    <Responsive
      small={
        <SimpleList
          linkType="show"
          primaryText={record => record.comment}
        />
      }
      medium={
        <Datagrid>
          <TextField label="Commentaire" source="comment" fullWidth />
          <ShowButton />
          <DeleteButton />
        </Datagrid>
      }
    />
  </List>
);

export default AnswerList;
