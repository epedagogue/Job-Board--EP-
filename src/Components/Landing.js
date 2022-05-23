import React from 'react'
import './Landing.css'
import Card from '@mui/material/Card';
// import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
// import IconButton from '@mui/material/IconButton';
import imgWallet from '../images/magento2-job-board-webkul.jpg'
// import FavoriteIcon from '@mui/icons-material/Favorite';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';




const theme = createTheme({
    palette: {
        secondary: {
            main: '#0000FF',
        },
    },
});

const Landing = () => {
    return (
        <div className='container'>
            <div>
                <Card sx={{ maxWidth: 400 }}>
                    <CardMedia
                        component="img"
                        height="150"
                        image={imgWallet}
                        alt="green iguana"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Job Board
                        </Typography>
                        <Typography className='testAlign' variant="body2" color="text.secondary">
                            Using the Magento 2 Job Board extension, the admin of the webstore can manage the job categories, jobs, and applications form the admin backend. The applicants have to browse the jobs from the frontend and can upload their resume along with the respective job application. Email Notifications are sent out to the admin and the customers.
                        </Typography>
                    </CardContent>

                </Card>
            </div>
            <div className='AllBtn'>
                <ThemeProvider theme={theme}>
                    <Button variant="outlined" color="secondary" size="large" className='BtnGrp' endIcon={<OpenInNewIcon />}>
                        LIVE DEMO
                    </Button><br />
                    <Button variant="outlined" color="secondary" size="large" className='BtnGrp' endIcon={<OpenInNewIcon />}>
                        USER GUIDE
                    </Button><br />
                    <Button variant="outlined" color="secondary" size="large" className='BtnGrp' endIcon={<OpenInNewIcon />}>
                        LIVE CHAT
                    </Button><br />
                </ThemeProvider>
            </div>
        </div>
    )
}

export default Landing