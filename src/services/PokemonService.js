import axios from "axios"

const pokemonService = {}

pokemonService.getListPokemon = function () {
  return axios({
    url: `https://pokeapi.co/api/v2/pokemon/`,
    method: "get",
  })
}

pokemonService.getDetailPokemon = function (url) {
  return axios({
    url: `${url}`,
    method: "get",
  })
}

export default pokemonService
