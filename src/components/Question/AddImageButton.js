import React from 'react';
import { Link } from 'react-router-dom';
import AddIcon from '@material-ui/icons/Add';
import { withStyles } from '@material-ui/core/styles';
import { Button } from 'react-admin';

const styles = {
  button: {
    
  }
};

const AddImageButton = ({ classes, record, questionnaireId }) => (
  <Button
    className={classes.button}
    component={Link}
    to={`/images/create?QuestionId=${record.id}&QuestionnaireId=${questionnaireId}`}
    label="Ajouter une image"
    title="Ajouter une image"
  >
    <AddIcon />
  </Button>
);

export default withStyles(styles)(AddImageButton);
