import {
  Button,
  HStack,
  Heading,
  Image,
  List,
  ListItem,
} from "@chakra-ui/react";
import useGanere from "../../hooks/useGanere";
import ImageCrop from "../../services/ImageCrop";
import GanreSkeleton from "./GanreSkeleton";
import { Genre } from "../../hooks/useGanere";

interface Props {
  genre: Genre | null;
  onSelectedGenre: (value: Genre) => void;
}

const Ganere = ({ onSelectedGenre, genre }: Props) => {
  const { data, loading } = useGanere();
  const skeletonIndex = [1, 2, 3, 4, 5, 6, 7];

  return (
    <>
      <Heading marginY={3} size={"lg"} fontWeight={500}>
        Genre
      </Heading>
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
                    fit={"cover"}
                  />
                  <Button
                    size={"md"}
                    whiteSpace={"normal"}
                    textAlign={"left"}
                    variant={genre?.id == item.id ? "outline" : "link"}
                    fontWeight={genre?.id == item.id ? "bold" : ""}
                    value={item.id}
                    onClick={() => onSelectedGenre(item)}
                  >
                    {item.name}
                  </Button>
                </HStack>
              </ListItem>
            ))}
      </List>
    </>
  );
};

export default Ganere;
