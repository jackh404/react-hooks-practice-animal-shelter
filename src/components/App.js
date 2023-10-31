import React, { useState } from "react";

import Filters from "./Filters";
import PetBrowser from "./PetBrowser";

function App() {
  const [pets, setPets] = useState([]);
  const [filters, setFilters] = useState({ type: "all" });

  const onChangeType = (e) => {
    setFilters({...filters, type:e.target.value})
  }

  const onFindPetsClick = async () => {
    const response = await
    fetch(`http://localhost:3001/pets${
      filters.type==="all"?"":"?type="+filters.type
    }`)
    const filteredPets = await response.json()
    setPets(filteredPets)
  }

  return (
    <div className="ui container">
      <header>
        <h1 className="ui dividing header">React Animal Shelter</h1>
      </header>
      <div className="ui container">
        <div className="ui grid">
          <div className="four wide column">
            <Filters 
            onChangeType={onChangeType}
            onFindPetsClick={onFindPetsClick}
            filters={filters}
            />
          </div>
          <div className="twelve wide column">
            <PetBrowser 
            pets={pets}
            setPets={setPets}/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;