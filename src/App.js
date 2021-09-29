import React, { useEffect, useState } from "react";
import { Route } from "react-router-dom";

//API from api.js
import { CHARACTERS_API, EPISODES_API } from "./api/api";

//components
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Characters from "./components/Characters/Characters";
import Episodes from "./components/Episodes/Episodes";
import Locations from "./components/Locations/Locations";
import Watchlist from "./components/Watchlist/Watchlist";

function App() {
  const [characters, setCharacters] = useState(null);
  const [charInfo, setCharInfo] = useState({});
  const [charPageCounter, setCharPageCounter] = useState(1);
  const [modalActive, setModalActive] = useState(false);

  const fetchCharacters = (url) => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setCharacters(data.results);
        setCharInfo(data.info);
        // console.log(data);
      })
      .catch((error) => console.log(error));
  };

  const onPrev = () => {
    if (charPageCounter > 1) {
      fetchCharacters(charInfo.prev);
      setCharPageCounter(charPageCounter - 1);
    }
  };
  const onNext = () => {
    if (charPageCounter < charInfo.pages) {
      fetchCharacters(charInfo.next);
      setCharPageCounter(charPageCounter + 1);
    }
  };

  useEffect(() => {
    fetchCharacters(CHARACTERS_API);
    // fetchCharacters(EPISODES_API);
  }, []);

  return (
    <div className="App">
      <Header />

      <Route path="/" exact>
        <Main />
      </Route>

      <Route path="/characters" exact>
        <Characters
          characters={characters}
          prev={charInfo.prev}
          next={charInfo.next}
          onPrev={onPrev}
          onNext={onNext}
          charPageCounter={charPageCounter}
          pages={charInfo.pages}
          modalActive={modalActive}
          setModalActive={setModalActive}
        />
      </Route>

      <Route path="/episodes" exact>
        <Episodes modalActive={modalActive} setModalActive={setModalActive} />
      </Route>

      <Route path="/locations" exact>
        <Locations modalActive={modalActive} setModalActive={setModalActive} />
      </Route>

      <Route path="/watchlist" exact>
        <Watchlist />
      </Route>
    </div>
  );
}

export default App;
