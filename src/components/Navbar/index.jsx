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
import { FaBars, FaTimes , FaLinkedin, FaInstagramSquare, FaGithubSquare } from "react-icons/fa"
import { VscGithub } from 'react-icons/vsc'
import { BsInstagram } from 'react-icons/bs'
import { AiOutlineLinkedin } from 'react-icons/ai'

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
  color: 'white',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    color: 'white',
  },
}));

export default function Navbar({searchPokemons, getGen, gen}) {

  const navRef = useRef();

	const showNavbar = (gen) => {
		navRef.current.classList.toggle("responsive_nav");
    
    if (gen>0) {
    getGen(gen);
    }
	};

  const takeMeTo = (link) => {
    if (link === 'github') {
      window.open("https://github.com/zaqueu-1")
    }
    if (link === 'insta') {
      window.open("https://www.instagram.com/zaqueu.tech/")
    }
    if (link === 'linkedin') {
      window.open("https://www.linkedin.com/in/zaqueu1")
    }
  }

    return (
    <Box sx={{ flexGrow: 1, marginBottom:"2em", border:"none", }}>
      <AppBar className="appbar" position="static" sx={{ backgroundColor:"rgb(255,255,255,0.05)", borderRadius: '0 0 12px 12px', boxShadow: "none",  }}>
        <Toolbar className="toolbar" >
          <Box className="pokelogo" component="img" src={logo} height="3em"/>
          <div className='socialMedia'>
            <button onClick={() => takeMeTo('github')} className='socialBtn'><VscGithub /></button>
            <button onClick={() => takeMeTo('insta')} className='socialBtn'><BsInstagram/></button>
            <button onClick={() => takeMeTo('linkedin')} className='socialBtn linkedin'><AiOutlineLinkedin /></button>
          </div>  
          <Box className='nav' ref={navRef} >
                <Button class={gen === 1 ? "active" : "gen-btn"} onClick={() => showNavbar(1)} >Kanto <small className='small-info'>#1-151</small></Button>
                <Button class={gen === 2 ? "active" : "gen-btn"} onClick={() => showNavbar(2)} >Johto <small className='small-info'>#152-251</small></Button>
                <Button class={gen === 3 ? "active" : "gen-btn"} onClick={() => showNavbar(3)} >Hoenn <small className='small-info'>#252-386</small></Button>
                <Button class={gen === 4 ? "active" : "gen-btn"} onClick={() => showNavbar(4)} >Sinnoh <small className='small-info'>#387-493</small></Button>
                <Button class={gen === 5 ? "active" : "gen-btn"} onClick={() => showNavbar(5)} >Unova <small className='small-info'>#494-649</small></Button>
                <Button class={gen === 6 ? "active" : "gen-btn"} onClick={() => showNavbar(6)} >Kalos <small className='small-info'>#650-721</small></Button>
                <Button class={gen === 7 ? "active" : "gen-btn"} onClick={() => showNavbar(7)} >Alola <small className='small-info'>#722-809</small></Button>
                <Button class={gen === 8 ? "active" : "gen-btn"} onClick={() => showNavbar(8)} >Galar & Hisui <small className='small-info'>#810-905</small></Button>
                <Button class={gen === 9 ? "active" : "gen-btn"} onClick={() => showNavbar(9)} >Paldea <small className='small-info'>#906-1008</small></Button>
                <button className="nav-btn nav-close-btn" onClick={showNavbar}>
					        <FaTimes />
				        </button>
          </Box>
          <button className="nav-btn" onClick={showNavbar}>
				          <FaBars />
			          </button>
        </Toolbar>
      </AppBar>
      <Search className="search-box" onChange={(e)=>searchPokemons(e.target.value.toLowerCase())}>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Buscar…"
              inputProps={{ 'aria-label': 'search' }} />
        </Search>
    </Box>
  );
}
