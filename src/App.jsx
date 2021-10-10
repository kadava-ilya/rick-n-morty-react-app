import React, { useState } from "react";
import { Route } from "react-router-dom";

//components
import { Header } from "./components/Header/Header";
import { Main } from "./components/Main/Main";
import { Watchlist } from "./components/Watchlist/Watchlist";
import { Characters } from "./components/Characters/Characters";
import { Episodes } from "./components/Episodes/Episodes";
import { Locations } from "./components/Locations/Locations";

function App() {
  const [modalActive, setModalActive] = useState(false);

  return (
    <div className="App">
      <Header />

      <Route path="/" exact>
        <Main />
      </Route>

      <Route path="/characters" exact>
        <Characters
          modalActive={modalActive}
          setModalActive={setModalActive} />
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
