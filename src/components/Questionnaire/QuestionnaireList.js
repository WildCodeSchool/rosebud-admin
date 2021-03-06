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
  BooleanField,
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
      small={
        <SimpleList label="Titre" linkType="show" primaryText={record => record.title} />
      }
      medium={
        <Datagrid rowClick="show">
          <TextField label="Titre" source="title" cellClassName={classes.title} />
          <ReferenceField label="Administrateur" source="UserId" reference="users" target="id" link={false}>
              <TextField source="username" />
          </ReferenceField>
          <BooleanField label="En ligne" source="isOnline" />
          <BooleanField label="Privé" source="isPrivate" />
          <ShowButton />
        </Datagrid>
      }
    />
  </List>
));

export default QuestionnaireList;
