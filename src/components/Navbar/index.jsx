import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import logo from '../../img/logo.png';
import Button from '@mui/material/Button';
import './navbar.css';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: '25%',
    margin: '1rem auto -.5rem auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

export default function Navbar({searchPokemons, getGen}) {
  
    return (

    <Box sx={{ flexGrow: 1, marginBottom:"2em", border:"4px solid transparent" }}>
      <AppBar position="static" sx={{ backgroundColor:"transparent", boxShadow: "none" }}>
        <Toolbar>
            <Box display="flex" justifyContent="space-around" width="100%">
            <Box component="img" src={logo} height="3em"/>
                        <Button class="gen-btn" onClick={() => getGen(1)} >Kanto <small className='small-info'>#1-151</small></Button>
                        <Button class="gen-btn" onClick={() => getGen(2)} >Johto <small className='small-info'>#152-251</small></Button>
                        <Button class="gen-btn" onClick={() => getGen(3)} >Hoenn <small className='small-info'>#252-386</small></Button>
                        <Button class="gen-btn" onClick={() => getGen(4)} >Sinnoh <small className='small-info'>#387-493</small></Button>
                        <Button class="gen-btn" onClick={() => getGen(5)} >Unova <small className='small-info'>#494-649</small></Button>
                        <Button class="gen-btn" onClick={() => getGen(6)} >Kalos <small className='small-info'>#650-721</small></Button>
                        <Button class="gen-btn" onClick={() => getGen(7)} >Alola <small className='small-info'>#722-809</small></Button>
                        <Button class="gen-btn" onClick={() => getGen(8)} >Galar & Hisui <small className='small-info'>#810-905</small></Button>
                        <Button class="gen-btn" onClick={() => getGen(9)} >Paldea <small className='small-info'>#906-1008</small></Button>
          </Box>
        </Toolbar>
        <Search className="search-box" onChange={(e)=>searchPokemons(e.target.value.toLowerCase())}>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Buscar…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
      </AppBar>
    </Box>
  );
}
