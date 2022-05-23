import React from 'react'
import './HireUs.css'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import FileUploadIcon from '@mui/icons-material/FileUpload';



const Input = styled('input')({
    display: 'none',
});

const HireUs = () => {
    return (
          <div>
            <div className='HireUS'>
                <h2>HIRE US</h2>

            </div>
            <Box
                component="form"
                sx={{
                    '& > :not(style)': { m: 1, width: '50ch', margin:"auto" },
                }}
                noValidate
                autoComplete="off"
            >
                <TextField label="Name" variant="outlined" /><br /><br />
                <TextField label="Email" variant="outlined" /><br /><br />
                <TextField label="Phone No." variant="outlined" /><br /><br />
                <TextField label="Current Address" variant="outlined" /><br /><br />
                <Stack direction="row" alignItems="center" spacing={2}>
                    <label htmlFor="contained-button-file">
                        <Input accept="image/*" id="contained-button-file" multiple type="file" />
                        <Button variant="contained" component="span" startIcon={<FileUploadIcon />}>
                            Resume Upload
                        </Button>&nbsp; &nbsp;
                        <Button variant="contained"> 
                            Submit
                        </Button>
                    </label>
                </Stack>
            </Box>

        </div>
    )
}

export default HireUs