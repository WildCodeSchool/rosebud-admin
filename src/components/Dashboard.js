import React, {useEffect, useState} from 'react';
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import AssignmentIcon from '@material-ui/icons/Assignment';
import AssignmentTurnedInIcon from '@material-ui/icons/AssignmentTurnedIn';
import AssignmentIndIcon from '@material-ui/icons/AssignmentInd';
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

export default function Dashboard() {
    
    const [metricParticipants, setMetricParticipants] = useState(0);
    const [metricParticipantsApproved, setMetricParticipantsApproved] = useState(0);
    const [metricParticipantsDisapproved, setMetricParticipantsDisapproved] = useState(0);

    useEffect(() => {
          
        const fetchMetricParticipants = async () => {
              const result = await axios.get(`/api/back/v1/metrics/participants`);
              setMetricParticipants(result.data);
            };
        fetchMetricParticipants();
        
        const fetchMetricParticipantsApproved = async () => {
            const result = await axios.get(`/api/back/v1/metrics/participants/approve`);
            setMetricParticipantsApproved(result.data);
          };
        fetchMetricParticipantsApproved();
        
        const fetchMetricParticipantsDisapproved = async () => {
            const result = await axios.get(`/api/back/v1/metrics/participants/disapprove`);
            setMetricParticipantsDisapproved(result.data);
          };
          fetchMetricParticipantsDisapproved();
    })

    const classes = useStyles();
    
    return (
        <Grid container spacing={3} className={classes.root}>
        <Title title="Rosebud" />
            <Grid item md={4} xs={12} className={classes.paper}>
                <Paper>
                <ListItem>
                    <ListItemAvatar>
                    <Avatar>
                        <AssignmentIndIcon />
                    </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary={metricParticipants} secondary={metricParticipants > 1 ? 'participations' : 'participation'} />
                </ListItem>
                </Paper>
            </Grid>
            <Grid item md={4} xs={12} className={classes.paper}>
                <Paper>
                <ListItem>
                    <ListItemAvatar>
                    <Avatar>
                        <AssignmentTurnedInIcon />
                    </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary={metricParticipantsApproved} secondary={metricParticipantsApproved > 1 ? 'participations en lignes' : 'participation en ligne'} />
                </ListItem>
                </Paper>
            </Grid>
            <Grid item md={4} xs={12} className={classes.paper}>
                <Paper>
                <ListItem>
                    <ListItemAvatar>
                    <Avatar>
                        <AssignmentIcon />
                    </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary={metricParticipantsDisapproved} secondary={metricParticipantsDisapproved > 1 ? 'participations en attentes' : 'participation en attente'} />
                </ListItem>
                </Paper>
            </Grid>
        </Grid>
  );
}