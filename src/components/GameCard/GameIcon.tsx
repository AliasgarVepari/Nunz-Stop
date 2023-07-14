import {
  FaPlaystation,
  FaXbox,
  FaWindows,
  FaLinux,
  FaAppStoreIos,
  FaApple,
} from "react-icons/fa";
import { TbWorld } from "react-icons/tb";
import { BiLogoPlayStore } from "react-icons/bi";
import { IconType } from "react-icons";
import { BsNintendoSwitch } from "react-icons/bs";
import { HStack, Icon } from "@chakra-ui/react";
import { Platform } from "../../hooks/useGame";

interface Props {
  platform: Platform[];
}

interface Icon {
  [key: string]: IconType;
}

const GameIcon = ({ platform }: Props) => {
  const iconMap: Icon = {
    pc: FaWindows,
    playstation: FaPlaystation,
    xbox: FaXbox,
    android: BiLogoPlayStore,
    mac: FaApple,
    ios: FaAppStoreIos,
    linux: FaLinux,
    nintendo: BsNintendoSwitch,
    web: TbWorld,
  };
  return (
    <HStack marginY={1}>
      {platform.map((item) => (
        <Icon key={item.id} as={iconMap[item.slug]} color="gray.500" />
      ))}
    </HStack>
  );
};

export default GameIcon;
