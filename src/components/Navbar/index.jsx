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
import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
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
  },
}));

export default function Navbar({searchPokemons, getGen, gen}) {

  const navRef = useRef();

	const showNavbar = () => {
		navRef.current.classList.toggle("responsive_nav");
	};

    return (
    <Box sx={{ flexGrow: 1, marginBottom:"2em", border:"4px solid transparent" }}>
      <AppBar position="static" sx={{ backgroundColor:"transparent", boxShadow: "none" }}>
        <Toolbar className="toolbar" >
          <Box className="pokelogo" component="img" src={logo} height="3em"/>
          <Box className='nav' ref={navRef} >
                <Button class={gen === 1 ? "active" : "gen-btn"} onClick={() => getGen(1)} >Kanto <small className='small-info'>#1-151</small></Button>
                <Button class={gen === 2 ? "active" : "gen-btn"} onClick={() => getGen(2)} >Johto <small className='small-info'>#152-251</small></Button>
                <Button class={gen === 3 ? "active" : "gen-btn"} onClick={() => getGen(3)} >Hoenn <small className='small-info'>#252-386</small></Button>
                <Button class={gen === 4 ? "active" : "gen-btn"} onClick={() => getGen(4)} >Sinnoh <small className='small-info'>#387-493</small></Button>
                <Button class={gen === 5 ? "active" : "gen-btn"} onClick={() => getGen(5)} >Unova <small className='small-info'>#494-649</small></Button>
                <Button class={gen === 6 ? "active" : "gen-btn"} onClick={() => getGen(6)} >Kalos <small className='small-info'>#650-721</small></Button>
                <Button class={gen === 7 ? "active" : "gen-btn"} onClick={() => getGen(7)} >Alola <small className='small-info'>#722-809</small></Button>
                <Button class={gen === 8 ? "active" : "gen-btn"} onClick={() => getGen(8)} >Galar & Hisui <small className='small-info'>#810-905</small></Button>
                <Button class={gen === 9 ? "active" : "gen-btn"} onClick={() => getGen(9)} >Paldea <small className='small-info'>#906-1008</small></Button>
                <button className="nav-btn nav-close-btn" onClick={showNavbar}>
					        <FaTimes />
				        </button>
          </Box>
          <button className="nav-btn" onClick={showNavbar}>
				          <FaBars />
			          </button>
        </Toolbar>
        <Search className="search-box" onChange={(e)=>searchPokemons(e.target.value.toLowerCase())}>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Buscar…"
              inputProps={{ 'aria-label': 'search' }} />
        </Search>
      </AppBar>
    </Box>
  );
}
