import React, { useEffect, useState } from "react"
import pokemonService from "../services/PokemonService"
import CardPokemon from "./CardPokemon"

const ListPokemon = () => {
  const [pokemon, setPokemon] = useState([])

  const getListPokemon = async () => {
    try {
      const response = await pokemonService.getListPokemon()
      console.log("response pokemonnn", response)
      setPokemon(response.data.results)
    } catch {
      console.log("error")
    }
  }

  useEffect(() => {
    getListPokemon()
  }, [])

  return (
    <div>
      <h1>Pokedex</h1>
      <div class="poke-container" id="poke-container">
        {pokemon.map((data) => (
          <CardPokemon data={data} />
        ))}
      </div>
    </div>
  )
}

export default ListPokemon
