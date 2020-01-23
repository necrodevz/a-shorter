function Layout() {
  
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
    <Grid container spacing={3} style={{marginTop: '10vh'}}>
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
          {children}
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