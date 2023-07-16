import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import DarkModeButton from "./DarkModeButton";
import { SearchPanel } from "./SearchPanel";

interface Props {
  setSearch: (item: string | undefined) => void;
}

const NavBar = ({ setSearch }: Props) => {
  return (
    <HStack justifyContent="space-between" padding="10px">
      <Image src={logo} boxSize="60px"></Image>
      <SearchPanel setSearch={setSearch} />
      <DarkModeButton />
    </HStack>
  );
};

export default NavBar;
