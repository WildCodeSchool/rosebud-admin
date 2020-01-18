import React from 'react';
import { Link } from 'react-router-dom';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { withStyles } from '@material-ui/core/styles';
import { Button } from 'react-admin';

const styles = {
  button: {
    
  }
};

const BackButton = ({ classes, record, link, title }) => (
  <Button
    className={classes.button}
    component={Link}
    to={link}
    label={title}
    title={title}
  >
    <ArrowBackIcon />
  </Button>
);

export default withStyles(styles)(BackButton);
