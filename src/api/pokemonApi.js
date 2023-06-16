import axios from 'axios';

export const pokemonApi = axios.create({
    baseURL: 'https://pokeapi.co/api/v2',
  });

// Al utilizar axios.create(), se pueden establecer valores por defecto para diferentes opciones, como la URL base, cabeceras HTTP, opciones de autenticación, etc. Esto puede ser útil cuando se desea utilizar la misma configuración en varias solicitudes HTTP.