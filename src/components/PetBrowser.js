import React from "react";

import Pet from "./Pet";

function PetBrowser({pets,setPets}) {
  const onAdoptPet = (id) => {
    const updatedPets = pets.map(pet=>pet.id===id?{...pet, isAdopted:true}:pet)
    setPets(updatedPets)
  }
  const petGrid = pets.map(pet=><Pet pet={pet} key={pet.id} onAdoptPet={onAdoptPet}/>)
  return <div className="ui cards">{petGrid}</div>;
}

export default PetBrowser;