export default (type) => {
  const colours = {
    normal: '#c9c9a1',
    fire: '#f2ad79',
    water: '#83a4eb',
    electric: '#f2d96f',
    grass: '#9bc97f',
    ice: '#afe3e1',
    fighting: '#de5b57',
    poison: '#c466c2',
    ground: '#e6cb85',
    flying: '#c4b1fc',
    psychic: '#f77ea3',
    bug: '#d3e35b',
    rock: '#d6c25c',
    ghost: '#9c80bf',
    dragon: '#8e60fc',
    dark: '#b0937f',
    steel: '#dddded',
    fairy: '#edafce',
  };

  return colours[type] || '#777';
}