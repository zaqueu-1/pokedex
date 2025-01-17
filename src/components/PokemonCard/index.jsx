import * as React from "react"
import { Link, useNavigate } from "react-router-dom"
import Card from "@mui/material/Card"
import CardContent from "@mui/material/CardContent"
import CardMedia from "@mui/material/CardMedia"
import Typography from "@mui/material/Typography"
import "./pokemonCard.css"
import { usePokemon } from "../../context/PokemonContext"

export default function PokemonCard({ image, types, pokemon }) {
  const navigate = useNavigate()
  const { searchPokemons } = usePokemon()

  const handleClick = () => {
    searchPokemons("")
    navigate(`/pokemon/${pokemon.data.name}`)
  }

  const colors = {
    rock: "rgb(182, 161, 54, 0.5)",
    ghost: "rgb(115, 87, 151, 0.5)",
    electric: "rgb(247, 208, 44, 0.5)",
    bug: "rgb(166, 185, 26, 0.5)",
    poison: "rgb(163, 61, 162, 0.5)",
    normal: "rgb(168, 167, 122, 0.5)",
    fairy: "rgb(214, 133, 173, 0.5)",
    fire: "rgb(238, 129, 48, 0.5)",
    grass: "rgb(122, 199, 76, 0.5)",
    ice: "rgb(150, 217, 214, 0.5)",
    water: "rgb(99, 144, 240, 0.5)",
    ground: "rgb(226, 191, 101, 0.5)",
    flying: "rgb(169, 143, 243, 0.5)",
    fighting: "rgb(194, 46, 40, 0.5)",
    psychic: "rgb(249, 85, 135, 0.5)",
    dragon: "rgb(111, 53, 252, 0.5)",
    dark: "rgb(112, 87, 70, 0.5)",
    steel: "rgb(183, 183, 206, 0.5)",
  }

  const poke_types = types.map((type) => type.type.name)
  const main_type = Object.keys(colors)
  const type1 = main_type.find((type) => poke_types.indexOf(type) === 0)
  const color = colors[type1]

  const type2 = () => {
    if (types[1]) {
      return types[1].type.name
    }
  }

  return (
    <Card className='card-wrapper' style={{ backgroundColor: color }}>
      <div
        onClick={handleClick}
        style={{ textDecoration: "none", cursor: "pointer" }}
      >
        <div className='id-container'> #{pokemon.data.id} </div>
        <CardMedia
          className='card-media'
          image={image}
          loading='lazy'
          alt={pokemon.data.name}
        />
        <div className='typesContainer'>
          <Typography className={`${type1} type`}>{type1}</Typography>
          <Typography className={`${type2()} type`}>{type2()}</Typography>
        </div>
        <CardContent className='cardContent'>
          <Typography className='pokeName'>{pokemon.data.name}</Typography>
        </CardContent>
      </div>
    </Card>
  )
}
