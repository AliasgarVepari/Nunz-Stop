import { Grid, GridItem, Show } from "@chakra-ui/react";
import { useState } from "react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import Ganere from "./components/GameGenre/Ganere";

function App() {
  const [genre, setGenre] = useState<number | undefined>();

  return (
    <>
      <Grid
        templateAreas={{
          base: `"nav" "main"`,
          lg: `"nav nav " " asile main"`,
        }}
        templateColumns={{
          base: "1fr",
          lg: "245px 1fr",
        }}
      >
        <GridItem area="nav">
          <NavBar />
        </GridItem>
        <Show above="lg">
          <GridItem area="asile" paddingX={5}>
            <Ganere
              genre={genre}
              handleGanre={(value) => {
                setGenre(value);
                console.log(value);
              }}
            />
          </GridItem>
        </Show>
        <GridItem area="main" padding="30px">
          <GameGrid genre={genre} />
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
