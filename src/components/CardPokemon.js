import React, { useEffect, useState } from "react"
import pokemonService from "../services/PokemonService"

const CardPokemon = ({ data }) => {
  const [pokemonDetail, setPokemonDetail] = useState([])
  console.log("data", data)

  const colors = {
    fire: "#FDDFDF",
    grass: "#DEFDE0",
    electric: "#FCF7DE",
    water: "#DEF3FD",
    ground: "#f4e7da",
    rock: "#d5d5d4",
    fairy: "#fceaff",
    poison: "#98d7a5",
    bug: "#f8d5a3",
    dragon: "#97b3e6",
    psychic: "#eaeda1",
    flying: "#F5F5F5",
    fighting: "#E6E0D4",
    normal: "#F5F5F5",
  }

  const getDetailPokemon = async () => {
    try {
      const response = await pokemonService.getDetailPokemon(data.url)
      console.log("response pokemonnn detailllll", response)
      setPokemonDetail(response.data)
    } catch {
      console.log("error")
    }
  }

  useEffect(() => {
    getDetailPokemon()
  }, [])

  return (
    <div
      className="pokemon"
      style={{
        backgroundColor: colors?.[pokemonDetail?.types?.[0]?.type?.name],
      }}
    >
      <div className="img-container">
        <img
          alt={pokemonDetail?.name}
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonDetail?.id}.png`}
        />
      </div>
      <div className="info">
        <span className="number">{pokemonDetail?.id}</span>
        <h3 className="name">{pokemonDetail?.name}</h3>
        <small className="type">
          Type: <span>{pokemonDetail?.types?.[0]?.type?.name}</span>{" "}
        </small>
      </div>
    </div>
  )
}

export default CardPokemon
