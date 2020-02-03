import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Switch from '@material-ui/core/Switch';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

import FolderIcon from '@material-ui/icons/Folder';
import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import NavigationIcon from '@material-ui/icons/Navigation';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
  },
  table: {
    minWidth: 700,
  },
  paper: {
    backgroundColor: 'rgba(0,0,0,0.4)',
    borderStyle: 'groove',
    overflow: "hidden"
  },
}));

export default function Main(props) {
    const initialDate = {
        date: new Date("01/29/19").toDateString(),
        billableTime: 8.0015,
        unbillableTime: 0.75,
        timeBalance:8.00,
    }
    const classes = useStyles();
    const [billableTime, setBillableTime] = React.useState(0);
    const [unbillableTime, setUnbillableTime] = React.useState(0);
    const [date, setDate] = React.useState();
    const [timer, setTimer] = React.useState(false);
    const [sessions, setSessions] = React.useState([initialDate]);
    
    const timerToggle =(on=true) => {
    }

    const timeIn = e => {
        date? timerToggle() : setDate(new Date())
    }
    const timeOut = e => {
        timerToggle(false)
    }
    const goHome = e => {

    }
    
    return(
    <TableContainer component={Paper} className={classes.paper}>
        <Table className={classes.table} aria-label="spanning table">
            <TableHead>
                <TableRow>
                    <TableCell align="center" colSpan={3}>
                        Details
                    </TableCell>
                    <TableCell align="right">Hours</TableCell>
                </TableRow>
                <TableRow>
                <TableCell />
                <TableCell>Date</TableCell>
                <TableCell align="right">Billable</TableCell>
                <TableCell align="right">Unbillable</TableCell>
                <TableCell align="right">Total Billable Balance</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {sessions.map((session, index)=>
                    <TableRow key={index}>
                        <TableCell><TableCell><Switch value={session.selected} size="small" /></TableCell><TableCell><Button>Edit</Button></TableCell></TableCell>
                        <TableCell>{session.date}</TableCell>
                        <TableCell align="right">{session.billableTime}</TableCell>
                        <TableCell align="right">{session.unbillableTime}</TableCell>
                        <TableCell align="right">{session.timeBalance}</TableCell>
                    </TableRow>
                )}
                <TableRow id="new-timekey" active>
                    <TableCell><TableCell><Switch size="small" disabled /></TableCell><TableCell><Button>Go Home</Button></TableCell></TableCell>
                    <TableCell>{date ||new Date().toDateString()}</TableCell>
                    <TableCell align="right">{billableTime.toFixed(5)}</TableCell>
                    <TableCell align="right">{unbillableTime.toFixed(2)}</TableCell>
                    <TableCell align="right">{}</TableCell>
                </TableRow>    
            </TableBody>
        </Table>
        <Grid container item spacing={4} xs={12} component={Paper}>
            <Grid item container md={3} xs={6}>
                <Grid item xs md={6}>
                    <Button variant="outlined" color="primary" disabled>Button1</Button>
                </Grid>
                <Grid item xs md={6}>
                    <Button color="primary">Button2</Button>
                </Grid>
            </Grid>
            <Grid item md={6} xs={12} />
            <Grid item md={3} xs={6}>
                <Button color="secondary">Cancel Selection</Button>
            </Grid>
        </Grid>
    </TableContainer>
  )
}