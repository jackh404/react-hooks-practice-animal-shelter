import React from "react";

import Pet from "./Pet";

function PetBrowser({pets,onAdoptPet}) {
  const petGrid = pets.map(pet=><Pet pet={pet} key={pet.id} onAdoptPet={onAdoptPet}/>)
  return <div className="ui cards">{petGrid}</div>;
}

export default PetBrowser;