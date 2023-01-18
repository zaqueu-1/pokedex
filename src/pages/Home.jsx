import { Container } from "@mui/system";
import { Grid } from "@mui/material";
import React from "react";
import axios from "axios";
import Navbar from "../components/Navbar";
import PokemonCard from "../components/PokemonCard";
import { useEffect } from "react";
import { useState } from "react";
import Pagination from "../components/Pagination";

export const Home = () => {
  
    const [pokemons, setPokemons] = useState([]);
    const [allPokes, setAllPokes] = useState([]);
    const [gen, setGen] = useState(1);
    const [currentPage, setCurrentPage] = useState(1);
    useEffect(() => {getGen(1)}, []);
    useEffect(() => {getAllPokes()}, []);

    const postsPerPage = 12;
    const lastPostIndex = currentPage * postsPerPage;
    const firstPostIndex = lastPostIndex - postsPerPage;
    const currentPosts = pokemons.slice(firstPostIndex, lastPostIndex);

    const getPokemons = (initialId, finalId) => {
        var endpoints = [];
       
        for (var i=initialId; i<=finalId; i++) { 
            endpoints.push(`https://pokeapi.co/api/v2/pokemon/${i}/`); 
        };
        
        axios.all(endpoints.map((endpoint) => axios.get(endpoint))).then((res) => setPokemons(res));
    };

    const getAllPokes = () => {
        var endpoints = [];
       
        for (var i=1; i<=1008; i++) { 
            endpoints.push(`https://pokeapi.co/api/v2/pokemon/${i}/`); 
        };
        
        axios.all(endpoints.map((endpoint) => axios.get(endpoint))).then((res) => setAllPokes(res));
    };

    const getGen = (gen) => {
        switch(gen) {
            case 1:
                setGen(gen);
                getPokemons(1, 151);
                setCurrentPage(1);
                break;
            case 2:
                setGen(gen);
                getPokemons(152, 251);
                setCurrentPage(1);
                break;
            case 3:
                setGen(gen);
                getPokemons(252, 386);
                setCurrentPage(1);
                break;
            case 4:
                setGen(gen);
                getPokemons(387, 493);
                setCurrentPage(1);
                break;
            case 5:
                setGen(gen);
                getPokemons(494, 649);
                setCurrentPage(1);
                break;
            case 6:
                setGen(gen);
                getPokemons(650, 721);
                setCurrentPage(1);
                break;
            case 7:
                setGen(gen);
                getPokemons(722, 809);
                setCurrentPage(1);
                break;
            case 8:
                setGen(gen);
                getPokemons(810, 905);
                setCurrentPage(1);
                break;
            case 9:
                setGen(gen);
                getPokemons(906, 1008);
                setCurrentPage(1);
                break;
            default:
                setGen(gen);
                getPokemons(1, 151);
                setCurrentPage(1);
                break;
        }
    };
    

    const searchPokemons = (name) => {
        var searchRes = [];

      if (name === "") {
        setCurrentPage(1);
        getGen(gen);
      }
      for (var i in allPokes) {
        if (allPokes[i].data.name.includes(name) && name.length>2) {
            setCurrentPage(1);
            searchRes.push(allPokes[i]);
        }
      }
        setPokemons(searchRes);
    };

    const handleImage = (id, name) => {
    const gen1to8 = name;
    const gen9 = `https://www.serebii.net/pokemon/art/${id}.png`;

        if (id >= 906) {
            return gen9;
        } else {
            return gen1to8;
    }
    }

    return (
        <div>
            <Navbar 
                searchPokemons={searchPokemons} 
                getPokemons={getPokemons} 
                getGen={getGen}
                gen={gen} />
                <Container>
                    <Grid className='pokeGrid' container spacing={2}>
                        {currentPosts.map((pokemon, key) => (
                            <Grid className="pokeCard animate-pop" item xs={2} key={key}>
                            <PokemonCard 
                                id={pokemon.data.id} 
                                name={pokemon.data.name} 
                                image={handleImage(pokemon.data.id, pokemon.data.sprites.other["official-artwork"].front_default)}
                                types={pokemon.data.types} />
                            </Grid>
                        ))}      
                    </Grid>
                </Container>
                <Pagination 
                    totalPosts={pokemons.length} 
                    postsPerPage={postsPerPage} 
                    setCurrentPage={setCurrentPage}
                    currentPage={currentPage} />
        </div>
    )
}