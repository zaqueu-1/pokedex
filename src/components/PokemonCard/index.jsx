import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

export default function PokemonCard({ id, name, image, types }) {

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

  return (
    
    <Card style={{ maxWidth: 350, borderRadius: "12px", backgroundColor: color }}>
        <container style={{ fontSize: "16px", textShadow: "1px 1px rgb(40, 40, 40, 0.3)", color: "whitesmoke",
      display:"flex", alignItems:"left", justifyContent:"left", background:"rgba(124,124,124,0.25)", padding:"2px 10px" }}>
          #{id} </container>
        <CardMedia
        loading="lazy"
        component="img"
        height="180"
        min-height="100"
        image={image}
        alt={name}
        className="CardMedia">
        </CardMedia>
        <div display="flex" alignItems="center" justifyContent="center" className='typesContainer'>
        <Typography padding="4px" display="inline-block" fontSize="11px" className={type1} color="white" borderRadius="4px" 
        style={{ textTransform: 'capitalize', width: "25%", textAlign: "center"  }}>
          {type1}</Typography> 
        <Typography padding="4px" display="inline-block" fontSize="11px" className={type2()} color="white" borderRadius="4px" 
        style={{ textTransform: 'capitalize', width: "25%", textAlign: "center" }}>
         {type2()} </Typography>
        </div>
        <CardContent className='CardContent'>
        <Typography gutterBottom variant="h5" className="pokeName" color="white" 
        style={{ textTransform: 'capitalize', fontSize: "1.2rem", textAlign: 'center'}}>
          {name} </Typography>
        </CardContent>
        </Card>
  );
}
