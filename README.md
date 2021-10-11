Feautures:

- The project has 5 main components: Main, Characters, Episodes, Locations and Watchlist;
- All lists have been taken from Rick n Morty API
  (https://rickandmortyapi.com/documentation/#introduction);
- Characters component has the list of character cards (20 cards per page). List may be filtered by species, status and gender. Switching the page may be done by pressing any arrow button of pagination component. If you press on any Character card - the popup of this character with all info will be shown.
- Episodes component has the filter form to search any episodes you need and the table down below with all episodes seriated by id number and the air date. Rendered only 20 rows per page. Pages may be switched by pressing any arrow button of pagination component;
- Locations component looks similar to Episodes components;
- Watchlist component has input field where user can write down a new episode to watch later. A new list item will be created by pressing the Add button. This item may be removed from list by pressing remove button. Also it may be marked as completed if you press check button. All items save to local storage.
