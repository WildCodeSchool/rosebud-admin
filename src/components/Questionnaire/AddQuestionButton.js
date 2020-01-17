import React from 'react';
import { Link } from 'react-router-dom';
import AddIcon from '@material-ui/icons/Add';
import { withStyles } from '@material-ui/core/styles';
import { Button } from 'react-admin';

const styles = {
  button: {
    
  }
};

const AddCommentButton = ({ classes, record }) => (
  <Button
    className={classes.button}
    component={Link}
    to={`/questions/create?QuestionnaireId=${record.id}`}
    label="Ajouter une question"
    title="Ajouter une question"
  >
    <AddIcon />
  </Button>
);

export default withStyles(styles)(AddCommentButton);
