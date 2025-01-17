import React, { useEffect, useState } from "react"
import { useParams, useNavigate } from "react-router-dom"
import axios from "axios"
import { Container } from "@mui/system"
import { Box, IconButton } from "@mui/material"
import Navbar from "../../components/Navbar"
import { IoChevronBackOutline, IoChevronForwardOutline } from "react-icons/io5"
import "./styles.css"

const PokemonPage = () => {
  const { pokeId, name } = useParams()
  const navigate = useNavigate()
  const [pokemon, setPokemon] = useState(null)
  const [isNavigating, setIsNavigating] = useState(false)

  useEffect(() => {
    const getPokemon = async () => {
      try {
        let response
        if (name) {
          response = await axios.get(
            `https://pokeapi.co/api/v2/pokemon/${name.toLowerCase()}/`,
          )
          // Redireciona para a URL com ID mantendo o estado
          navigate(`/${response.data.id}`, { replace: true })
        } else {
          response = await axios.get(
            `https://pokeapi.co/api/v2/pokemon/${pokeId}/`,
          )
        }
        setPokemon(response)
        setIsNavigating(false)
      } catch (error) {
        console.error("Erro ao carregar Pokémon:", error)
        navigate("/")
      }
    }

    getPokemon()
  }, [pokeId, name, navigate])

  const handleNavigation = (direction) => {
    if (isNavigating) return

    setIsNavigating(true)
    const currentId = pokemon.data.id
    const newId =
      direction === "next"
        ? Math.min(currentId + 1, 1010)
        : Math.max(currentId - 1, 1)

    navigate(`/${newId}`)
  }

  if (!pokemon) {
    return (
      <div>
        <Navbar />
        <div style={{ textAlign: "center", marginTop: "2rem", color: "white" }}>
          Carregando...
        </div>
      </div>
    )
  }

  const colors = {
    rock: "rgb(182, 161, 54)",
    ghost: "rgb(115, 87, 151)",
    electric: "rgb(247, 208, 44)",
    bug: "rgb(166, 185, 26)",
    poison: "rgb(163, 61, 162)",
    normal: "rgb(168, 167, 122)",
    fairy: "rgb(214, 133, 173)",
    fire: "rgb(238, 129, 48)",
    grass: "rgb(122, 199, 76)",
    ice: "rgb(150, 217, 214)",
    water: "rgb(99, 144, 240)",
    ground: "rgb(226, 191, 101)",
    flying: "rgb(169, 143, 243)",
    fighting: "rgb(194, 46, 40)",
    psychic: "rgb(249, 85, 135)",
    dragon: "rgb(111, 53, 252)",
    dark: "rgb(112, 87, 70)",
    steel: "rgb(183, 183, 206)",
  }

  const poke_types = pokemon.data.types.map((type) => type.type.name)
  const main_type = Object.keys(colors)
  const type1 = main_type.find((type) => poke_types.indexOf(type) === 0)
  const color = colors[type1]

  const type2 = () => {
    if (pokemon.data.types[1]) {
      return pokemon.data.types[1].type.name
    }
  }

  return (
    <div>
      <Navbar />
      <Container>
        <Box className='pokemon-page' style={{ backgroundColor: `${color}80` }}>
          <div className='navigation-buttons'>
            <IconButton
              onClick={() => handleNavigation("prev")}
              disabled={parseInt(pokeId) <= 1 || isNavigating}
              className='nav-button'
            >
              <IoChevronBackOutline />
            </IconButton>
            <IconButton
              onClick={() => handleNavigation("next")}
              disabled={parseInt(pokeId) >= 1010 || isNavigating}
              className='nav-button'
            >
              <IoChevronForwardOutline />
            </IconButton>
          </div>

          <div className='pokemon-header'>
            <h1>
              #{pokemon.data.id} {pokemon.data.name}
            </h1>
            <p>
              Altura: {pokemon.data.height / 10}m | Peso:{" "}
              {pokemon.data.weight / 10}kg
            </p>
          </div>

          <div className='pokemon-content'>
            <div className='pokemon-wrapper'>
              <div className='pokemon-image'>
                <img
                  src={
                    pokemon.data.sprites.other["official-artwork"].front_default
                  }
                  alt={pokemon.data.name}
                  className='floating'
                />
              </div>
              <div className='types'>
                <span className={type1}>{type1}</span>
                {type2() && <span className={type2()}>{type2()}</span>}
              </div>
            </div>

            <div className='pokemon-info'>
              <div className='stats'>
                <h2>Status Base</h2>
                <ul>
                  <li>
                    HP: <b>{pokemon.data.stats[0].base_stat}</b>
                  </li>
                  <li>
                    Attack: <b>{pokemon.data.stats[1].base_stat}</b>
                  </li>
                  <li>
                    Defense: <b>{pokemon.data.stats[2].base_stat}</b>
                  </li>
                  <li>
                    Sp.Attack: <b>{pokemon.data.stats[3].base_stat}</b>
                  </li>
                  <li>
                    Sp.Defense: <b>{pokemon.data.stats[4].base_stat}</b>
                  </li>
                  <li>
                    Speed: <b>{pokemon.data.stats[5].base_stat}</b>
                  </li>
                </ul>
              </div>

              <div className='abilities'>
                <h2>Habilidades</h2>
                {pokemon.data.abilities.map((ability, index) => (
                  <span key={index} className='ability'>
                    {ability.ability.name}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </Box>
      </Container>
    </div>
  )
}

export default PokemonPage
