import { HStack, Switch, Text, useColorMode } from "@chakra-ui/react";
import React from "react";

const DarkModeButton = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <HStack>
      <Switch colorScheme="green" onChange={toggleColorMode} />
      <Text>Dark Mode</Text>
    </HStack>
  );
};

export default DarkModeButton;
