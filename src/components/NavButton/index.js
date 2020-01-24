import React from 'react';

//import {useHistory} from 'react-router-dom';
import history from '../../utils/history';

import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import SpeedDial from '@material-ui/lab/SpeedDial';
import EjectOutlinedIcon from '@material-ui/icons/EjectOutlined';
import SpeedDialAction from '@material-ui/lab/SpeedDialAction';
import FileCopyIcon from '@material-ui/icons/FileCopyOutlined';
import SaveIcon from '@material-ui/icons/Save';
import SettingsIcon from '@material-ui/icons/Settings';
import ShareIcon from '@material-ui/icons/Share';
import FavoriteIcon from '@material-ui/icons/Favorite';
import Divider from '@material-ui/core/Divider';

const useStyles = makeStyles(theme => ({
  root: {
    height: "50vh",
    transform: 'translateZ(0px)',
    flexGrow: 1,
    //zIndex: 5000,
  },
  speedDial: {
    position: "absolute",
    bottom: '-3vh', //theme.spacing(2),
    left: '10vw', //theme.spacing(2),
  },
}));

const actions = [

  { icon: <FileCopyIcon />, name: 'Settings' },
  { icon: <Divider />},
  { icon: <SaveIcon />, name: 'Market' },
  { icon: <FileCopyIcon />, name: 'Timekey' },
];

export default function SpeedDialTooltipOpen({setOpen, open}) {
  const classes = useStyles();
  
  const [hidden, setHidden] = React.useState(false);

  //let history = useHistory();

  const handleVisibility = () => {
    setHidden(prevHidden => !prevHidden);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleNavigation = (slug) => {
    console.log(`${slug}`);
    history.push(`/${slug}`);
    setOpen(false);
  }

  return (
    <div className={classes.root}>
      
      <SpeedDial
        ariaLabel="SpeedDial tooltip example"
        className={classes.speedDial}
        hidden={hidden}
        icon={<EjectOutlinedIcon />}
        onClose={handleClose}
        onOpen={handleOpen}
        open={open}
      >
        {actions.map(action => (
          <SpeedDialAction
            key={action.name}
            icon={action.icon}
            tooltipTitle={action.name}
            tooltipOpen
            onClick={()=>handleNavigation(action.name)}
          />
        ))}
      </SpeedDial>
    </div>
  );
}
