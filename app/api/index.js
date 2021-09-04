import api from './apiHelper';

export const getAllPokemonApi = params => {
  const res = api.get(`pokemon/`, params);
  return res;
};

export const getPokemonDetailApi = input => {
  const res = api.get(`pokemon/${input}`);
  return res;
};

export const getPokemonEncounterApi = input => {
  const res = api.get(`pokemon/${input}/encounters`);
  return res;
};

export const getPokemonEncounterMethodApi = input => {
  const res = api.get(`pokemon/encounters-method/${input}`);
  return res;
};
