import React from 'react'
import './Job.css'
// import AppBaar from '../AppBaar';
import Cart from './Cart';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { useTheme } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Zoom from '@mui/material/Zoom';
import Fab from '@mui/material/Fab';
// import AddIcon from '@mui/icons-material/Add';
// import EditIcon from '@mui/icons-material/Edit';
// import UpIcon from '@mui/icons-material/KeyboardArrowUp';
// import { green } from '@mui/material/colors';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { CardActionArea, CardActions } from '@mui/material';
import JobDetails from './JobDetails.json'


function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`action-tabpanel-${index}`}
      aria-labelledby={`action-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `action-tab-${index}`,
    'aria-controls': `action-tabpanel-${index}`,
  };
}

// const fabStyle = {
//   position: 'absolute',
//   bottom: 16,
//   right: 16,
// };

// const fabGreenStyle = {
//   color: 'common.white',
//   bgcolor: green[500],
//   '&:hover': {
//     bgcolor: green[600],
//   },
// };




const Job = () => {
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  const transitionDuration = {
    enter: theme.transitions.duration.enteringScreen,
    exit: theme.transitions.duration.leavingScreen,
  };

  const fabs = [
    // {
    //   color: 'primary',
    //   sx: fabStyle,
    //   icon: <AddIcon />,
    //   label: 'Add',
    // },
    // {
    //   color: 'secondary',
    //   sx: fabStyle,
    //   icon: <EditIcon />,
    //   label: 'Edit',
    // },
    // {
    //   color: 'inherit',
    //   sx: { ...fabStyle, ...fabGreenStyle },
    //   icon: <UpIcon />,
    //   label: 'Expand',
    // },
  ];

  return (
    <div>
      {/* <AppBaar></AppBaar> */}
      <Cart></Cart>
      <h2>JOB BOARD</h2>
      <Box
        sx={{
          bgcolor: 'background.paper',
          width: 1300,
          position: 'relative',
          minHeight: 400,
          margin: 'auto',
          // border: "1px solid black",
          backgroundColor: "#c2c2c2"
        }}
      >
        <div className='MainJob'>

          <AppBar position="static" color="default">
            <Tabs
              value={value}
              onChange={handleChange}
              indicatorColor="primary"
              textColor="primary"
              variant="fullWidth"
              aria-label="action tabs example"
            >
              <Tab label="Mobile Development" {...a11yProps(0)} />
              <Tab label="UI/UX Developer" {...a11yProps(1)} />
              <Tab label="IT Department" {...a11yProps(2)} />
              <Tab label="PHP Programmer" {...a11yProps(2)} />
              <Tab label="Human Resource-Management" {...a11yProps(2)} />
            </Tabs>
          </AppBar>
        </div>
        <SwipeableViews
          axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
          index={value}
          onChangeIndex={handleChangeIndex}
        >
          <TabPanel value={value} index={0} dir={theme.direction}>
            <Card sx={{ maxWidth: 345, boxShadow: 16, display: "inline-block", marginRight: "30px", padding: "10px" }}>
              <CardActionArea >
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Android Developer
                  </Typography>

                  {
                    JobDetails.map(jobsdetail => {
                      return (
                        <Typography variant="body2" color="text.secondary" key={jobsdetail.id}>
                          <strong>Designation</strong>:&nbsp;{jobsdetail.designation}<br/>
                          <strong>Salary</strong>:&nbsp;{jobsdetail.salary}
                        </Typography>                        
                      )
                    })
                  }
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary" variant="contained" >
                  Apply
                </Button>
                <Button size="small" color="primary" variant="contained" >
                  Job Description
                </Button>
              </CardActions>
            </Card>
            {/* Second Job */}
            <Card sx={{ maxWidth: 345, boxShadow: 16, display: "inline-block", marginRight: "30px", padding: "10px" }}>
              <CardActionArea >
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Mobile Developer
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Lizards are a widespread group of squamate reptiles, with over 6,000
                    species, ranging across all continents except Antarctica
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary" variant="contained" >
                  Apply
                </Button>
                <Button size="small" color="primary" variant="contained" >
                  Job Description
                </Button>
              </CardActions>
            </Card>
            {/* Job 3 */}
            <Card sx={{ maxWidth: 345, boxShadow: 16, display: "inline-block", padding: "10px" }}>
              <CardActionArea >
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    IOS Developer
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Lizards are a widespread group of squamate reptiles, with over 6,000
                    species, ranging across all continents except Antarctica
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary" variant="contained" >
                  Apply
                </Button>
                <Button size="small" color="primary" variant="contained" >
                  Job Description
                </Button>
              </CardActions>
            </Card>
          </TabPanel>
          <TabPanel value={value} index={1} dir={theme.direction}>
            Item Two
          </TabPanel>
          <TabPanel value={value} index={2} dir={theme.direction}>
            Item Three
          </TabPanel>
        </SwipeableViews>
        {fabs.map((fab, index) => (
          <Zoom
            key={fab.color}
            in={value === index}
            timeout={transitionDuration}
            style={{
              transitionDelay: `${value === index ? transitionDuration.exit : 0}ms`,
            }}
            unmountOnExit
          >
            <Fab sx={fab.sx} aria-label={fab.label} color={fab.color}>
              {fab.icon}
            </Fab>
          </Zoom>
        ))}

      </Box>
      {/* <Button variant="contained">Apply</Button> */}
    </div>
  )
}

export default Job