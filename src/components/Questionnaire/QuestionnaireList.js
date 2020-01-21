import { withStyles } from '@material-ui/core/styles';
import React from 'react';
import {
  Datagrid,
  List,
  Responsive,
  SimpleList,
  TextField,
  ReferenceField,
  ShowButton,
  Filter,
  ReferenceInput,
  SelectInput
} from 'react-admin';

const styles = theme => ({
  title: {
    maxWidth: '20em',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap'
  }
});

const QuestionnairesFilter = (props) => (
  <Filter {...props}>
    <ReferenceInput
      resource="users"
      source="UserId"
      reference="users"
      label="Administrateur"
      alwaysOn
    >
      <SelectInput optionText="username" optionValue="id" />
    </ReferenceInput>
  </Filter>
);

const QuestionnaireList = withStyles(styles)(({ classes, ...props }) => (
  <List {...props} bulkActionButtons={false} exporter={false} filters={<QuestionnairesFilter />}>
    <Responsive
      key={record => record.id}
      small={
        <SimpleList label="Titre" linkType="show" primaryText={record => record.title} />
      }
      medium={
        <Datagrid rowClick="show">
          <TextField label="Titre" source="title" cellClassName={classes.title} />
          <ReferenceField label="Administrateur" source="UserId" reference="users" target="id" linkType={false}>
              <TextField source="username" />
          </ReferenceField>
          <ShowButton />
        </Datagrid>
      }
    />
  </List>
));

export default QuestionnaireList;
