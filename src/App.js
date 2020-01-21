import React from 'react';

import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import Button from '@material-ui/core/Button';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
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
import Fab from '@material-ui/core/Fab';
import Paper from '@material-ui/core/Paper';

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
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: '33.33%',
    flexShrink: 0,
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
}));

function ControlledExpansionPanels({date, billableHours, nonBillableHours, totalHours, children}) {

  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = panel => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
      <ExpansionPanel expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <TableCell rowSpan={3} />
          <TableCell className={classes.heading} colSpan={2}>{date}</TableCell>
          <TableCell className={classes.secondaryHeading}>{billableHours}</TableCell>
          <TableCell className={classes.secondaryHeading}>{nonBillableHours}</TableCell>
          <TableCell className={classes.secondaryHeading}>{totalHours}</TableCell>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          {children}
        </ExpansionPanelDetails>
      </ExpansionPanel>
  );
}

function App() {
  
    const classes = useStyles();
    const [value, setValue] = React.useState('recents');
  
    const handleChange = (event, newValue) => {
      setValue(newValue);
    };

    function a11yProps(index) {
      return {
        id: `action-tab-${index}`,
        'aria-controls': `action-tabpanel-${index}`,
      };
    }

  return (
    <Grid container spacing={3}>
      <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="fullWidth"
          aria-label="action tabs example"
        >
          <Tab label="Item One" {...a11yProps(0)} />
          <Tab label="Item Two" {...a11yProps(1)} />
          <Tab label="Item Three" {...a11yProps(2)} />
        </Tabs>
      </AppBar>
      <Grid item md={12} xs={12}>
        <TableContainer component={Paper}>
          <Table className={classes.table} aria-label="spanning table">
            <TableHead>
              <TableRow>
                <TableCell align="center" colSpan={3}>
                  Details
                </TableCell>
                <TableCell align="right">Price</TableCell>
              </TableRow>
              <TableRow>
                <TableCell />
                <TableCell>Date</TableCell>
                <TableCell align="right">Billable</TableCell>
                <TableCell align="right">Unbillable</TableCell>
                <TableCell align="right">Total Billable</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell><TableCell><Switch size="small" /></TableCell><TableCell></TableCell></TableCell>
                <TableCell>{new Date().toDateString()}</TableCell>
                <TableCell align="right">8.0015</TableCell>
                <TableCell align="right">.75</TableCell>
                <TableCell align="right">8</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>
      <Grid container item spacing={4} xs={12}>
        <Grid item container md={3} xs={6}>
          <Grid item xs md={6}>
            <Paper>
              <Button>Button1</Button>
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
            <Button>Button3</Button>
          </Paper>
        </Grid>
      </Grid>
      <Fab variant="extended" float="right">
        <NavigationIcon className={classes.extendedIcon} />
          Navigate
      </Fab>
    </Grid>    
  );
}

export default App;
