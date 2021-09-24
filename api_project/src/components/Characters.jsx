import React, { useState, useEffect } from "react";
import { useCharacterContext } from "../util/content";
import { Link } from 'react-router-dom';


const Characters = () => {
  const { characters, loading } = useCharacterContext();
  if(loading) {
      return <div className="loading"></div>
  }
  return (
    <div className="characters-container">
      {characters.map((character) => {
        const { index: id, name } = character;
        return (
          <Link to={`/CharInfo/${name}`} key={name}>
            <div className="single-character-con" key={name}>
              <h4 className="c-names" key={name}>{name}</h4>
            </div>
            </Link>
        );
      })}
    </div>
  );
};

export default Characters;
