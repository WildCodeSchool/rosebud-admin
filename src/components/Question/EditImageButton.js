import React from 'react';
import { Link } from 'react-router-dom';
import EditIcon from '@material-ui/icons/Edit';
import { withStyles } from '@material-ui/core/styles';
import { Button } from 'react-admin';

const styles = {
  button: {
    
  }
};

const EditImageButton = ({ classes, record, questionnaireId }) => (
  <Button
    className={classes.button}
    component={Link}
    to={`/images/${record.id}?QuestionId=${record.QuestionId}&QuestionnaireId=${questionnaireId}`}
    label="Modifier"
    title="Modifier"
  >
    <EditIcon />
  </Button>
);

export default withStyles(styles)(EditImageButton);
