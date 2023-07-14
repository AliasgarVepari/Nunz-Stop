import { SimpleGrid, Text } from "@chakra-ui/react";
import useGame from "../hooks/useGame";
import GameCard from "./GameCard/GameCard";
import GameCardSceleton from "./GameCard/GameCardSceleton";

interface Props {
  genre: number | undefined;
}

const GameGrid = ({ genre }: Props) => {
  const { error, data, loading } = useGame(genre);
  const skeletonIndex = [1, 2, 3, 4, 5, 6];
  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid spacing="7" columns={{ lg: 3, sm: 1, md: 2, xl: 5 }}>
        {loading &&
          skeletonIndex.map((item) => (
            <GameCardSceleton key={item}></GameCardSceleton>
          ))}
        {data.map((game) => (
          <GameCard
            key={game.id}
            games={game}
            platform={game.parent_platforms.map((item) => item.platform)}
          ></GameCard>
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
