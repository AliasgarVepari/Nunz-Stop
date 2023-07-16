import { HStack, SimpleGrid, Spacer, Text } from "@chakra-ui/react";
import useGame from "../hooks/useGame";
import { ReactNode } from "react";
import GameCard from "./GameCard/GameCard";
import GameCardSceleton from "./GameCard/GameCardSceleton";
import { GameQuery } from "../App";

interface Props {
  gameQuery: GameQuery;
  children: ReactNode;
}

const GameGrid = ({ gameQuery, children }: Props) => {
  const { error, data: gameData, loading } = useGame(gameQuery);
  const skeletonIndex = [1, 2, 3, 4, 5, 6];

  return (
    <>
      {error && <Text>{error}</Text>}
      <HStack>{children}</HStack>
      <Spacer height={5} />
      <SimpleGrid spacing="7" columns={{ lg: 3, sm: 1, md: 2, xl: 4}}>
        {loading &&
          skeletonIndex.map((item) => (
            <GameCardSceleton key={item}></GameCardSceleton>
          ))}
        {gameData.map((game) => (
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
