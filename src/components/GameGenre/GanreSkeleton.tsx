import { ListItem, HStack, Skeleton, SkeletonText } from "@chakra-ui/react";

const GanreSkeleton = () => {
  return (
    <ListItem paddingY="5px">
      <HStack>
        <Skeleton boxSize="35px" borderRadius="5px" />
        <SkeletonText height="30px" />
      </HStack>
    </ListItem>
  );
};

export default GanreSkeleton;
