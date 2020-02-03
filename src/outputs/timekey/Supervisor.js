import React from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
//import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';

import ExpansionNode from '../../components/ExpansionNode';

const teamMembers = [
    {
        Id: '0001',
        displayName: "Devroy Blake",
    },
    {
        Id: '0002',
        displayName: "Devroy Blake",
    },
    {
        Id: '0003',
        displayName: "Devroy Blake",
    },
    {
        Id: '0004',
        displayName: "Devroy Blake",
    },
    {
        Id: '0005',
        displayName: "Yorved",
    },
]

const initialDate = [{
    date: new Date("01/29/19").toDateString(),
    teamTimes: [
        {
            teamMemberId: '0001',
            billableTime: 8.0015,
            unbillableTime: 0.75,
            timeBalance:8.0000,
        },
        {
            teamMemberId: '0005',
            billableTime: 6.0104,
            unbillableTime: 0.00,
            timeBalance: 42.0000,
        }
    ]
}]
export default function Supervisor() 
{
    const [sessions, setSessions] = React.useState([initialDate]);
    return (
        <Grid container spacing={2} >
            <Grid item xs={12}>
                <Grid container spacing={4}>
                    <Grid item md={3} component={Paper}>
                        <List>
                            <ListItem>
                                <h5>Team Members</h5>
                            </ListItem>
                            <Divider />
                            {teamMembers.map(t=>
                                <ListItem>
                                    <ListItemText primary={t.displayName} />
                                </ListItem>    
                            )}
                        </List>
                    </Grid>
                    <Grid item md={9}>
                    <List>
                            <ListItem>
                                <h4>Unsubmitted Timesheets</h4>
                            </ListItem>
                            <Divider />
                            <ExpansionNode>
                                
                            </ExpansionNode>
                        </List>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}