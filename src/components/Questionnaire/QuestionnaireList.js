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
  <List {...props}>
    <Responsive
      small={
        <SimpleList label="Titre" linkType="show" primaryText={record => record.title} />
      }
      medium={
        <Datagrid rowClick="show">
          <TextField label="Titre" source="title" cellClassName={classes.title} />
        </Datagrid>
      }
    />
  </List>
));

export default QuestionnaireList;
