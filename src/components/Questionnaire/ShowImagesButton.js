import React from 'react';
import { Link } from 'react-router-dom';
import ImageIcon from '@material-ui/icons/Image';
import { withStyles } from '@material-ui/core/styles';
import { Button } from 'react-admin';

const styles = {
  button: {
    
  }
};

const ShowImagesButton = ({ QuestionId, classes, record }) => (
  <Button
    className={classes.button}
    component={Link}
    to={`/questions/${QuestionId}/show`}
    label="Images"
    title="Images"
  >
    <ImageIcon />
  </Button>
);

export default withStyles(styles)(ShowImagesButton);
