import { Button, HStack, Image, List, ListItem } from "@chakra-ui/react";
import useGanere from "../../hooks/useGanere";
import ImageCrop from "../../services/ImageCrop";
import GanreSkeleton from "./GanreSkeleton";

interface Props {
  handleGanre: (value: number) => void;
}

const Ganere = ({ handleGanre }: Props) => {
  const { data, loading } = useGanere();
  const skeletonIndex = [1, 2, 3, 4, 5, 6, 7];

  return (
    <List>
      {loading
        ? skeletonIndex.map((item) => <GanreSkeleton key={item} />)
        : data.map((item) => (
            <ListItem key={item.id} paddingY="5px">
              <HStack>
                <Image
                  src={ImageCrop(item.image_background)}
                  boxSize="35px"
                  borderRadius="5px"
                />
                <Button
                  variant="link"
                  value={item.id}
                  onClick={() => handleGanre(item.id)}
                >
                  {item.name}
                </Button>
              </HStack>
            </ListItem>
          ))}
    </List>
  );
};

export default Ganere;
