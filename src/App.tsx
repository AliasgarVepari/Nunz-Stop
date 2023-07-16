import { Grid, GridItem, Show } from "@chakra-ui/react";
import { useState } from "react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import Ganere from "./components/GameGenre/Ganere";
import { Genre } from "./hooks/useGanere";
import PlatfromSelector from "./components/PlatfromSelector";
import { Platform } from "./hooks/usePlatform";
import OrderSelector from "./components/OrderSelector";
import { Orderby } from "./components/OrderSelector";
import GameText from "./components/GameText";

export interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
  orderby: Orderby | null;
  search: string | null;
}

function App() {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);
  return (
    <>
      <Grid
        templateAreas={{
          base: `"nav" "main"`,
          lg: `"nav nav " " asile main"`,
        }}
        templateColumns={{
          base: "1fr",
          lg: "200px 1fr",
        }}
      >
        <GridItem area="nav">
          <NavBar
            setSearch={(value) =>
              setGameQuery({
                ...gameQuery,
                search: value,
              })
            }
          />
        </GridItem>
        <Show above="lg">
          <GridItem area="asile" paddingX={5}>
            <Ganere
              genre={gameQuery?.genre ?? null}
              onSelectedGenre={(value) => {
                setGameQuery({
                  ...gameQuery,
                  genre: value,
                });
                console.log(value);
              }}
            />
          </GridItem>
        </Show>
        <GridItem area="main" padding="30px">
          <GameText gameQuery={gameQuery} />
          <GameGrid gameQuery={gameQuery}>
            <PlatfromSelector
              selectedPlatform={gameQuery?.platform ?? null}
              onSelectedPlatform={(item) => {
                setGameQuery({
                  ...gameQuery,
                  platform: item,
                });
              }}
            />
            <OrderSelector
              selectedOrder={gameQuery?.orderby ?? null}
              onSelectedOrder={(item) => {
                setGameQuery({
                  ...gameQuery,
                  orderby: item,
                });
              }}
            />
          </GameGrid>
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
