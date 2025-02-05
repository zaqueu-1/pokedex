import { Container } from "@mui/system"
import { Grid } from "@mui/material"
import React from "react"
import Navbar from "../components/Navbar"
import PokemonCard from "../components/PokemonCard"
import Pagination from "../components/Pagination"
import { usePokemon } from "../context/PokemonContext"
import Skeleton from "../components/Skeleton"

export const Home = () => {
  const { pokemons, currentPage, setCurrentPage, isLoading } = usePokemon()

  const postsPerPage = 12
  const lastPostIndex = currentPage * postsPerPage
  const firstPostIndex = lastPostIndex - postsPerPage
  const currentPosts = pokemons.slice(firstPostIndex, lastPostIndex)

  return (
    <>
      <Navbar />
      <Container>
        <Grid className='pokeGrid' container spacing={2}>
          {isLoading
            ? Array(12)
                .fill(null)
                .map((_, index) => (
                  <Grid
                    className='pokeCard animate-pop'
                    item
                    xs={2}
                    key={index}
                  >
                    <Skeleton />
                  </Grid>
                ))
            : currentPosts.map((pokemon, key) => (
                <Grid className='pokeCard animate-pop' item xs={2} key={key}>
                  <PokemonCard
                    pokemon={pokemon}
                    image={
                      pokemon.data.sprites.other["official-artwork"]
                        .front_default
                    }
                    types={pokemon.data.types}
                  />
                </Grid>
              ))}
        </Grid>
      </Container>
      {!isLoading && (
        <Pagination
          totalPosts={pokemons.length}
          postsPerPage={postsPerPage}
          setCurrentPage={setCurrentPage}
          currentPage={currentPage}
        />
      )}
    </>
  )
}
