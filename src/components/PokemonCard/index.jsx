import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import './pokemonCard.css'
import Modal from '../Modal'
import { useState } from "react";

export default function PokemonCard({ image, types, pokemon, handleImage }) {

  const colors = {
    rock: 'rgb(182, 161, 54, 0.5)',
    ghost: 'rgb(115, 87, 151, 0.5)',
    electric: 'rgb(247, 208, 44, 0.5)',
    bug: 'rgb(166, 185, 26, 0.5)',
    poison: 'rgb(163, 61, 162, 0.5)',
    normal: 'rgb(168, 167, 122, 0.5)',
    fairy: 'rgb(214, 133, 173, 0.5)',
    fire: 'rgb(238, 129, 48, 0.5)',
    grass: 'rgb(122, 199, 76, 0.5)',
    ice: 'rgb(150, 217, 214, 0.5)',
    water: 'rgb(99, 144, 240, 0.5)',
    ground: 'rgb(226, 191, 101, 0.5)',
    flying: 'rgb(169, 143, 243, 0.5)',
    fighting: 'rgb(194, 46, 40, 0.5)',
    psychic: 'rgb(249, 85, 135, 0.5)',
    dragon: 'rgb(111, 53, 252, 0.5)',
    dark: 'rgb(112, 87, 70, 0.5)',
    steel: 'rgb(183, 183, 206, 0.5)',
  }

  const poke_types = types.map(type => type.type.name);
  const main_type = Object.keys(colors);
  const type1 = main_type.find(type => poke_types.indexOf(type) === 0);
  const color = colors[type1];

  const type2 = () => {
    if (types[1]) {
      return types[1].type.name;
    }
  }

  const [openModal, setOpenModal] = useState(false)

  const CONTAINER = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
    color: '#fff',
    margin: '0 auto',
  }

  const PKM_NAME = {
    textTransform: "capitalize",
    fontSize: '1.5rem',
    fontWeight: 'bold',
    marginBottom: '.3rem',
    marginTop: '-3rem',
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    color: '#fec20d',
  }

  return (
    <Card className="card" style={{ backgroundColor: color}}>
      <Modal setOpenModal={setOpenModal} isOpen={openModal} pokemon={pokemon}>
        <div style={CONTAINER}>

          <div style={PKM_NAME}>
            <p>#{pokemon.data.id} {pokemon.data.name}</p>
          </div>

          <div>
            <p>Altura: {pokemon.data.height/10}m | Peso: {pokemon.data.weight/10}kg</p>
          </div>

          <div className='info-div'>

          <CardMedia
              className="modal-media"
              image={image}
              loading='lazy'
              alt={pokemon.data.name} />

            <div>
            <div className='modalTypesContainer'>
                <Typography className={`${type1} modalType`}>
                  {type1}
                </Typography> 
                <Typography className={`${type2()} modalType`}>
                  {type2()} 
                </Typography>
              </div>
              <div className='stats-div'>
                <div style={{marginBottom:'1rem', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column'}}>
                  <ul>HP: <b>{pokemon.data.stats[0].base_stat}</b></ul>
                  <ul>Attack: <b>{pokemon.data.stats[1].base_stat}</b></ul>
                  <ul>Defense: <b>{pokemon.data.stats[2].base_stat}</b></ul>
                  <ul>Sp.Attack: <b>{pokemon.data.stats[3].base_stat}</b></ul>
                  <ul>Sp.Defense: <b>{pokemon.data.stats[4].base_stat}</b></ul>
                  <ul>Speed: <b>{pokemon.data.stats[5].base_stat}</b></ul>
                </div>
                {pokemon.data.abilities.map((ability) => (
                      <Typography className='ability'>
                        {ability.ability.name}
                      </Typography>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </Modal>
      <div className="id-container"> #{pokemon.data.id} </div>
      <CardMedia
        className="card-media"
        image={image}
        loading='lazy'
        alt={pokemon.data.name}
        onClick={() => setOpenModal(true)} >
      </CardMedia>
      <div className='typesContainer'>
        <Typography className={`${type1} type`}>
            {type1}
          </Typography> 
          <Typography className={`${type2()} type`}>
            {type2()} 
          </Typography>
        </div>
        <CardContent className='cardContent'>
          <Typography gutterBottom variant="h5" 
                      className="pokeName" >
            {pokemon.data.name} 
          <div className="more-info" onClick={() => setOpenModal(true)}>+ Informações</div>
          </Typography>
        </CardContent>
        </Card>
  );
}
