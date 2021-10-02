import React, { useState } from "react";
import { Route } from "react-router-dom";

//components
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Characters from "./components/Characters/Characters";
import Episodes from "./components/Episodes/Episodes";
import Locations from "./components/Locations/Locations";
import Watchlist from "./components/Watchlist/Watchlist";


//Redux components
import CharactersRedux from "./components/Characters/Characters-redux";
import EpisodesRedux from "./components/Episodes/Episodes-redux";
import LocationsRedux from "./components/Locations/LocationsRedux";

function App() {
  const [modalActive, setModalActive] = useState(false);

  return (
    <div className="App">
      <Header />

      <Route path="/" exact>
        <Main />
      </Route>

      <Route path="/characters" exact>
        <Characters modalActive={modalActive} setModalActive={setModalActive} />
      </Route>

      {/* Redux */}
      <Route path="/characters-redux" exact>
        <CharactersRedux />
      </Route>

      <Route path="/episodes" exact>
        <Episodes modalActive={modalActive} setModalActive={setModalActive} />
      </Route>

      {/* Redux */}
      <Route path="/episodes-redux" exact>
        <EpisodesRedux />
      </Route>

      <Route path="/locations" exact>
        <Locations modalActive={modalActive} setModalActive={setModalActive} />
      </Route>

      {/* Redux */}
      <Route path="/locations-redux" exact>
        <LocationsRedux />
      </Route>

      <Route path="/watchlist" exact>
        <Watchlist />
      </Route>
    </div>
  );
}

export default App;
