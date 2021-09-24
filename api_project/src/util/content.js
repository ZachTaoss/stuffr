import React, { useState, useContext, useEffect, useFetch } from "react";
// import { useFetch } from './useFetch'

const API_ENDPOINT = `https://www.dnd5eapi.co/api/`;

const CharacterContext = React.createContext();

export const CharacterProvider = ({ children }) => {
  const [characters, setCharacters] = useState();
  const [probs,setProb] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  // const { characters,error, loading} = useFetch(`&s=${query}&`)

  const fetchCharacters = async () => {
    setLoading(true);
    try {
      const response = await fetch(`${API_ENDPOINT}classes/`);
      const data = await response.json();
      setCharacters(data.results);
      setLoading(false);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchCharacters();
    console.log(`${API_ENDPOINT} and then ${characters}`);
  }, []);
  console.log(`${API_ENDPOINT} and then ${characters}`);
  // const {name } = useParams();
  // const name = {characters}
  // const fetchCharactersInfo = async () => {
  //     setLoading(true);
  //     try {
  //       const response = await fetch(`${API_ENDPOINT}classes/${name}`);
  //       const data = await response.json();
  //       setProb(data.proficiencies);
  //       setLoading(false);
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   };
  
  //   useEffect(() => {
  //     fetchCharactersInfo();
  //     console.log(`${API_ENDPOINT} and then ${characters}`);
  //   }, []);

  return (
    <CharacterContext.Provider
      value={{ characters, API_ENDPOINT, loading, error, probs }}
    >
      {children}
    </CharacterContext.Provider>
  );
};

export const useCharacterContext = () => {
  return useContext(CharacterContext);
};

