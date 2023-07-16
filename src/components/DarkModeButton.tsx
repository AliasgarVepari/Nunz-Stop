import { HStack, Switch, Text, useColorMode } from "@chakra-ui/react";

const DarkModeButton = () => {
  const { toggleColorMode } = useColorMode();
  return (
    <HStack>
      <Switch colorScheme="green" onChange={toggleColorMode} />
      <Text whiteSpace="nowrap">Dark Mode</Text>
    </HStack>
  );
};

export default DarkModeButton;
