import React from 'react'
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import './Cart.css'
import logo from '../../images/logo.png'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';




const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
        right: -3,
        top: 13,
        border: `2px solid ${theme.palette.background.paper}`,
        padding: '0 4px',
    },
}));


const Cart = () => {
    return (
        <div>            
            <div className='mainCartpage'>
                <div className='logo'>
                    <img src={logo} />
                </div>
                <IconButton aria-label="cart" className='cartItem'>
                    <StyledBadge badgeContent={4} color="secondary">
                        <ShoppingCartIcon />
                    </StyledBadge>
                </IconButton>
            </div>
            <Box
                component="form"
                sx={{
                    '& .MuiTextField-root': { m: 1, width: '40ch' },
                }}
                noValidate
                autoComplete="off"
            >
                <div>
                    <TextField
                        label="Search"
                        id="outlined-size-small"
                        size="small"
                        InputProps={{
                            startAdornment: (
                              <InputAdornment position="start">
                                <SearchIcon />
                              </InputAdornment>
                            ),
                          }}
                    />

                </div>

            </Box>
        </div>
    )
}

export default Cart