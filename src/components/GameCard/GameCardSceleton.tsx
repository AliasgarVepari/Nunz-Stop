import { Card, CardBody, Skeleton, SkeletonText } from "@chakra-ui/react";
import GameCardConfig from "./GameCardConfig";

const GameCardSceleton = () => {
  return (
    <Card
      width={GameCardConfig.width}
      borderRadius={GameCardConfig.borderRadius}
      overflow={GameCardConfig.overflow}
    >
      <Skeleton height={GameCardConfig.imageHeight} />
      <CardBody>
        <SkeletonText height="96px" />
      </CardBody>
    </Card>
  );
};

export default GameCardSceleton;
