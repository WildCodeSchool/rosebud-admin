import React from 'react';
import { Link } from 'react-router-dom';
import AssignmentTurnedInIcon from '@material-ui/icons/AssignmentTurnedIn';
import { withStyles } from '@material-ui/core/styles';
import { Button } from 'react-admin';

const styles = {
  button: {
    
  }
};

const ModerateButton = ({ classes, record, partipantId, questionnaireId }) => (
  <Button
    className={classes.button}
    component={Link}
    to={`/participants/${partipantId}/show/?QuestionnaireId=${questionnaireId}`}
    label="Modérer"
    title="Modérer"
  >
    <AssignmentTurnedInIcon />
  </Button>
);

export default withStyles(styles)(ModerateButton);
