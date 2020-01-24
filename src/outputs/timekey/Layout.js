import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import Button from '@material-ui/core/Button';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Fab from '@material-ui/core/Fab';
import Paper from '@material-ui/core/Paper';
import Divider from '@material-ui/core/Divider'
import Avatar from '@material-ui/core/Avatar'

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
  },
  table: {
    minWidth: 700,
  },
}));


export default function Layout({children, handleNav}) {
  
    const classes = useStyles();
    const [value, setValue] = React.useState(0);
  
    const handleChange = (event, newValue) => {
      setValue(newValue);
      handleNav(newValue);
    };

    function a11yProps(index) {
      return {
        id: `action-tab-${index}`,
        'aria-controls': `action-tabpanel-${index}`,
      };
    }

  return (
    <Grid container spacing={3} style={{marginTop: '12vh', overflow: 'hidden'}}>
      <Grid item xs={12}>
        <Grid container alignItems="space-between" spacing={8}>
          <Grid container item xs md={4} spacing={4}>
            <Grid item xs>
              <Avatar />
            </Grid>
            <Grid item xs>
            <Typography variant="h1" component="h2">
               Timekey Main
            </Typography>
            </Grid>
          </Grid>
          <Grid item xs>
            <Button variant="outlined">Time In</Button>
          </Grid>
        </Grid>
        <Divider />
      </Grid>
      <Grid item md={12} xs={12}>
          {children}
      </Grid>
      <Grid container item spacing={4} xs={12}>
        <Grid item container md={3} xs={6}>
          <Grid item xs md={6}>
            <Paper>
              <Button disabled>Button1</Button>
            </Paper>
          </Grid>
          <Grid item xs md={6}>
          <Paper>
            <Button>Button2</Button>
          </Paper>
          </Grid>
        </Grid>
        <Grid item md={6} xs={12} />
        <Grid item md={3} xs={6}>
          <Paper>
            <Button>Cancel Selection</Button>
          </Paper>
        </Grid>
      </Grid>
      <Grid item xs={12}>
      <Tabs value={value} onChange={handleChange}>
        <Tab label="Main"/>
        <Tab label="Timesheets"/>
        <Tab label="Pay Advice" />
      </Tabs>
      </Grid>
    </Grid>    
  );
}