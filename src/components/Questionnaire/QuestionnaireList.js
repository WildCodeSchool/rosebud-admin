import { withStyles } from '@material-ui/core/styles';
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

const styles = theme => ({
  title: {
    maxWidth: '20em',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap'
  }
});

const QuestionnaireList = withStyles(styles)(({ classes, ...props }) => (
  <List {...props} sort={{ field: 'id', order: 'DESC' }}>
    <Responsive
      small={
        <SimpleList label="Titre" linkType="show" primaryText={record => record.title} />
      }
      medium={
        <Datagrid>
          <TextField label="Titre" source="title" cellClassName={classes.title} />
          <ShowButton />
          <DeleteButton undoable={false} redirect="" />
        </Datagrid>
      }
    />
  </List>
));

export default QuestionnaireList;
