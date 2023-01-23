import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import '../PokemonCard/pokemonCard.css'

export default function Skeleton() {
  return (

    <Card className="card" style={{ backgroundColor: '#fff'}}>
    <div className="id-container" />
    <CardMedia
      className="card-media" >
    </CardMedia>
    <div className='typesContainer' />
      <CardContent className='cardContent'>
        <Typography gutterBottom variant="h5" className="pokeName" />
      </CardContent>
      </Card>
  )
}


