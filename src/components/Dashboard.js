import React, {useEffect, useState} from 'react';
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import ImageIcon from '@material-ui/icons/Image';
import BookIcon from '@material-ui/icons/Book';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import { Title } from 'react-admin';

const useStyles = makeStyles(theme => ({
    root: {
        width: '100%',
        marginTop: 15,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
}));

export default function InsetDividers() {
    const [metricQuestionnaires, setMetricQuestionnaires] = useState(0);
    const [metricParticipants, setMetricParticipants] = useState(0);
    const [metricAnswers, setMetricAnswers] = useState(0);
    useEffect(() => {
        const fetchMetricQuestionnaires = async () => {
            const result = await axios.get(`/api/back/v1/metrics/questionnaires`);
            setMetricQuestionnaires(result.data);
          };
          fetchMetricQuestionnaires();
          const fetchMetricParticipants = async () => {
              const result = await axios.get(`/api/back/v1/metrics/participants`);
              setMetricParticipants(result.data);
            };
            fetchMetricParticipants();
          const fetchMetricAnswers = async () => {
              const result = await axios.get(`/api/back/v1/metrics/answers`);
              setMetricAnswers(result.data);
            };
            fetchMetricAnswers();
    })
    const classes = useStyles();
    return (
    <>
        <Title title="Rosebud" />
        <Grid container spacing={3} className={classes.root}>
            <Grid item xs={4} className={classes.paper}>
                <Paper>
                <ListItem>
                    <ListItemAvatar>
                    <Avatar>
                        <BookIcon />
                    </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary={metricQuestionnaires} secondary={metricQuestionnaires > 1 ? 'questionnaires' : 'questionnaire'} />
                </ListItem>
                </Paper>
            </Grid>
            <Grid item xs={4} className={classes.paper}>
                <Paper>
                <ListItem>
                    <ListItemAvatar>
                    <Avatar>
                        <AccountBoxIcon />
                    </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary={metricParticipants} secondary={metricParticipants > 1 ? 'participants' : 'participant'} />
                </ListItem>
                </Paper>
            </Grid>
            <Grid item xs={4} className={classes.paper}>
                <Paper>
                <ListItem>
                    <ListItemAvatar>
                    <Avatar>
                        <ImageIcon />
                    </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary={metricAnswers} secondary={metricAnswers > 1 ? 'images' : 'image'} />
                </ListItem>
                </Paper>
            </Grid>
        </Grid>
    </>
  );
}