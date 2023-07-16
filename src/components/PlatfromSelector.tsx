import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BiChevronDown } from "react-icons/bi";
import usePlatfrom, { Platform } from "../hooks/usePlatform";

interface Props {
  selectedPlatform: Platform | null;
  onSelectedPlatform: (platfromItem: Platform) => void;
}

const PlatfromSelector = ({ selectedPlatform, onSelectedPlatform }: Props) => {
  const { data: platformData, error } = usePlatfrom();
  if (error) return null;
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BiChevronDown />}>
        {selectedPlatform?.name ?? "Select Platforms"}
      </MenuButton>
      <MenuList>
        {platformData.map((item) => (
          <MenuItem
            key={item.id}
            onClick={() => {
              onSelectedPlatform(item);
              console.log(item);
            }}
          >
            {item.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default PlatfromSelector;
