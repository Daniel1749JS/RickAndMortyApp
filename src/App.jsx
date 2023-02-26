import { useEffect, useState } from "react";
import { CardComponent } from "./components/CardComponent";

function App() {
  const [characters, setCharacters] = useState([]);

  const getAllCharacters = async () => {
    let API = "https://rickandmortyapi.com/api/character";

    try {
      const response = await fetch(`${API}`);
      const data = await response.json();
      setCharacters(data.results);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllCharacters();
  }, []);

  console.log(characters)

  return (
    <div style={{display: 'flex', flexWrap: 'wrap', gap: '10px', }}>
      {
        characters.map(character => (
          <CardComponent characterName={character.name} characterPhoto={character.image} status={character.status} gender={character.gender} keyy={character.id} />
        ))
      }
    </div>
  )
}

export default App;
