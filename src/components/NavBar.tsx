import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import DarkModeButton from "./DarkModeButton";

const NavBar = () => {
  return (
    <HStack justifyContent="space-between" padding="10px">
      <Image src={logo} boxSize="60px"></Image>
      <DarkModeButton />
    </HStack>
  );
};

export default NavBar;
