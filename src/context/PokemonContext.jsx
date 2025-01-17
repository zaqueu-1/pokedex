import React, { createContext, useState, useContext, useEffect } from "react"
import axios from "axios"
import { useNavigate, useLocation } from "react-router-dom"

const PokemonContext = createContext()

// IDs especiais após 1010
const specialPokemonIds = [
  10001, 10002, 10003, 10004, 10005, 10006, 10007, 10008, 10009, 10010, 10011,
  10012, 10013, 10014, 10015, 10016, 10017, 10018, 10019, 10020, 10021, 10022,
  10023, 10024, 10025, 10026, 10027, 10028, 10029, 10030, 10031, 10032, 10033,
  10034, 10035, 10036, 10037, 10038, 10039, 10040, 10041, 10042, 10043, 10044,
  10045, 10046, 10047, 10048, 10049, 10050, 10051, 10052, 10053, 10054, 10055,
  10056, 10057, 10058, 10059, 10060, 10061, 10062, 10063, 10064, 10065, 10066,
  10067, 10068, 10069, 10070, 10071, 10072, 10073, 10074, 10075, 10076, 10077,
  10078, 10079, 10080, 10081, 10082, 10083, 10084, 10085, 10086, 10087, 10088,
  10089, 10090, 10091, 10092, 10093, 10094, 10095, 10096, 10097, 10098, 10099,
  10100, 10101, 10102, 10103, 10104, 10105, 10106, 10107, 10108, 10109, 10110,
  10111, 10112, 10113, 10114, 10115, 10116, 10117, 10118, 10119, 10120, 10121,
  10122, 10123, 10124, 10125, 10126, 10127, 10128, 10129, 10130, 10131, 10132,
  10133, 10134, 10135, 10136, 10137, 10138, 10139, 10140, 10141, 10142, 10143,
  10144, 10145, 10146, 10147, 10148, 10149, 10150, 10151, 10152, 10153, 10154,
  10155, 10156, 10157, 10158, 10159, 10160, 10161, 10162, 10163, 10164, 10165,
  10166, 10167, 10168, 10169, 10170, 10171, 10172, 10173, 10174, 10175, 10176,
  10177, 10178, 10179, 10180, 10181, 10182, 10183, 10184, 10185, 10186, 10187,
  10188, 10189, 10190, 10191, 10192, 10193, 10194, 10195, 10196, 10197, 10198,
  10199, 10200, 10201, 10202, 10203, 10204, 10205, 10206, 10207, 10208, 10209,
  10210, 10211, 10212, 10213, 10214, 10215, 10216, 10217, 10218, 10219, 10220,
  10221, 10222, 10223, 10224, 10225, 10226, 10227, 10228, 10229, 10230, 10231,
  10232, 10233, 10234, 10235, 10236, 10237, 10238, 10239, 10240, 10241, 10242,
  10243, 10244, 10245, 10246, 10247, 10248, 10249, 10250,
]

export function PokemonProvider({ children }) {
  const [pokemons, setPokemons] = useState([])
  const [allPokes, setAllPokes] = useState([])
  const [gen, setGen] = useState(1)
  const [currentPage, setCurrentPage] = useState(1)
  const [isSearchMode, setIsSearchMode] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const [searchText, setSearchText] = useState("")

  const navigate = useNavigate()
  const location = useLocation()

  useEffect(() => {
    console.log("Iniciando carregamento inicial...")
    getPokemons(1, 151).catch((error) => {
      console.error("Erro no carregamento inicial:", error)
      setIsLoading(false)
    })
  }, [])

  const getPokemons = async (initialId, finalId) => {
    try {
      console.log(`Carregando Pokémon de ${initialId} até ${finalId}...`)
      setIsLoading(true)
      const endpoints = []

      if (initialId > 1010) {
        const startIndex = initialId - 1011
        const endIndex = finalId - 1011

        for (let i = startIndex; i <= endIndex; i++) {
          if (specialPokemonIds[i]) {
            endpoints.push(
              `https://pokeapi.co/api/v2/pokemon/${specialPokemonIds[i]}/`,
            )
          }
        }
      } else {
        for (let i = initialId; i <= Math.min(finalId, 1010); i++) {
          endpoints.push(`https://pokeapi.co/api/v2/pokemon/${i}/`)
        }
      }

      console.log(`Fazendo ${endpoints.length} requisições...`)
      const responses = await axios.all(
        endpoints.map((endpoint) => axios.get(endpoint)),
      )
      console.log("Requisições completadas com sucesso")
      setPokemons(responses)
    } catch (error) {
      console.error("Erro ao carregar Pokémon:", error)
      throw error
    } finally {
      setIsLoading(false)
    }
  }

  const getAllPokes = async () => {
    if (allPokes.length > 0) return

    try {
      setIsLoading(true)
      const endpoints = []

      // IDs normais até 1010
      for (let i = 1; i <= 1010; i++) {
        endpoints.push(`https://pokeapi.co/api/v2/pokemon/${i}/`)
      }

      // Adiciona os IDs especiais
      specialPokemonIds.forEach((id) => {
        endpoints.push(`https://pokeapi.co/api/v2/pokemon/${id}/`)
      })

      const responses = await axios.all(
        endpoints.map((endpoint) => axios.get(endpoint)),
      )
      setAllPokes(responses)
    } catch (error) {
      console.error("Erro ao carregar todos os Pokémon:", error)
    } finally {
      setIsLoading(false)
    }
  }

  const getGen = async (selectedGen) => {
    setIsSearchMode(false)
    switch (selectedGen) {
      case 1:
        setGen(selectedGen)
        await getPokemons(1, 151)
        setCurrentPage(1)
        break
      case 2:
        setGen(selectedGen)
        await getPokemons(152, 251)
        setCurrentPage(1)
        break
      case 3:
        setGen(selectedGen)
        await getPokemons(252, 386)
        setCurrentPage(1)
        break
      case 4:
        setGen(selectedGen)
        await getPokemons(387, 493)
        setCurrentPage(1)
        break
      case 5:
        setGen(selectedGen)
        await getPokemons(494, 649)
        setCurrentPage(1)
        break
      case 6:
        setGen(selectedGen)
        await getPokemons(650, 721)
        setCurrentPage(1)
        break
      case 7:
        setGen(selectedGen)
        await getPokemons(722, 809)
        setCurrentPage(1)
        break
      case 8:
        setGen(selectedGen)
        await getPokemons(810, 905)
        setCurrentPage(1)
        break
      case 9:
        setGen(selectedGen)
        await getPokemons(906, 1010)
        setCurrentPage(1)
        break
      case 10: // Formas especiais
        setGen(selectedGen)
        await getPokemons(1011, 1260) // Ajuste esses números conforme necessário
        setCurrentPage(1)
        break
      default:
        setGen(1)
        await getPokemons(1, 151)
        setCurrentPage(1)
        break
    }
  }

  const searchPokemons = async (name) => {
    setSearchText(name)

    if (name === "") {
      setIsSearchMode(false)
      setCurrentPage(1)
      getGen(gen)
      return
    }

    // Só procede com a busca se tiver 3 ou mais caracteres
    if (name.length >= 3) {
      // Se é a primeira busca, carrega todos os Pokémon
      if (!isSearchMode) {
        setIsSearchMode(true)
        await getAllPokes()
      }

      // Realiza a busca
      const searchRes = allPokes.filter((pokemon) =>
        pokemon.data.name.toLowerCase().includes(name.toLowerCase()),
      )

      // Só navega para home e atualiza os resultados se encontrou algo
      if (searchRes.length > 0) {
        setPokemons(searchRes)
        setCurrentPage(1)

        // Se estiver em uma página de Pokémon individual, navega para home
        if (location.pathname !== "/") {
          navigate("/")
        }
      }
    }
  }

  return (
    <PokemonContext.Provider
      value={{
        pokemons,
        allPokes,
        gen,
        currentPage,
        setCurrentPage,
        getGen,
        searchPokemons,
        getPokemons,
        isLoading,
        searchText,
      }}
    >
      {children}
    </PokemonContext.Provider>
  )
}

export function usePokemon() {
  const context = useContext(PokemonContext)
  if (!context) {
    throw new Error("usePokemon must be used within a PokemonProvider")
  }
  return context
}
