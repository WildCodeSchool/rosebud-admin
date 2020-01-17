import React from 'react';
import { Link } from 'react-router-dom';
import EditIcon from '@material-ui/icons/Edit';
import { withStyles } from '@material-ui/core/styles';
import { Button } from 'react-admin';

const styles = {
  button: {
    
  }
};

const EditQuestionButton = ({ classes, record, path }) => (
  <Button
    className={classes.button}
    component={Link}
    to={`${path.replace(`questionnaires/${record.QuestionnaireId}/show/questions`, `questions/${record.id}`)}?QuestionnaireId=${record.QuestionnaireId}`}
    label="Modifier"
    title="Modifier"
  >
    <EditIcon />
  </Button>
);

export default withStyles(styles)(EditQuestionButton);
