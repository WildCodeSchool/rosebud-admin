import React from 'react';
import { Link } from 'react-router-dom';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { withStyles } from '@material-ui/core/styles';
import { Button } from 'react-admin';

const styles = {
  button: {
    
  }
};

const BackButton = ({ classes, record, linkBack, titleBack }) => (
  <Button
    className={classes.button}
    component={Link}
    to={linkBack}
    label={titleBack}
    title={titleBack}
  >
    <ArrowBackIcon />
  </Button>
);

export default withStyles(styles)(BackButton);
