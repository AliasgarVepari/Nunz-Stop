import { Card, CardBody, HStack, Heading, Image } from "@chakra-ui/react";
import { Games, Platform } from "../../hooks/useGame";
import GameIcon from "./GameIcon";
import ImageCrop from "../../services/ImageCrop";
import CriticsBadge from "./CriticsBadge";
import GameCardConfig from "./GameCardConfig";

interface Props {
  games: Games;
  platform: Platform[];
}

const GameCard = ({ games, platform }: Props) => (
  <Card
    key={games.id}
    width={GameCardConfig.width}
    borderRadius={GameCardConfig.borderRadius}
    overflow={GameCardConfig.overflow}
  >
    <Image
      src={ImageCrop(games.background_image)}
      height={GameCardConfig.imageHeight}
    />
    <CardBody>
      <Heading size={"lg"}>{games.name}</Heading>
      <HStack justifyContent="space-between">
        <GameIcon platform={platform} />

        <CriticsBadge rating={games.metacritic} />
      </HStack>
    </CardBody>
  </Card>
);

export default GameCard;
