import { THREE_IDs } from "@/components/organisms/Landing/ThreeColumns";
import {
  HStack,
  Image,
  Text,
  Button,
  Tooltip,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Grid,
} from "@chakra-ui/react";
import Link from "next/link";

import { FaLock as IconLock } from "react-icons/fa";
import { LuArrowUpRight as IconArrow } from "react-icons/lu";
import { TbChevronDown as IconDown } from "react-icons/tb";

export const Nav = () => {
  return (
    <Grid
      templateColumns={{
        base: "1fr",
        md: "repeat(3,1fr)",
      }}
      gap="2rem"
    >
      <HStack as={Link} href="/">
        <Image src="/logo.png" alt="logo" boxSize="5rem" />
        <Text
          display={{ base: "inline", md: "none", lg: "inline" }}
          fontSize="3rem"
          fontWeight={700}
          color="brand.secondary"
          whiteSpace="nowrap"
        >
          Monacum Immobilien
        </Text>
      </HStack>
      <HStack
        fontWeight={600}
        fontSize="2rem"
        gap="2rem"
        justifySelf="center"
        flexWrap={{ base: "wrap", md: "unset" }}
      >
        <Button variant="ghost" as={Link} href={`/#${THREE_IDs.leistungen}`}>
          Leistungen
        </Button>
        {/* <UberUns /> */}

        <Button variant="ghost" as={Link} href="/uber">
          Über uns
        </Button>
        <Button variant="ghost" as={Link} href="/">
          Datenschutz
        </Button>
        <Button variant="ghost" as={Link} href="/impressum">
          Impressum
        </Button>
      </HStack>

      <HStack gap="3rem" justifySelf="end">
        <Button
          variant="ghost"
          leftIcon={<IconLock />}
          as={Link}
          href="/#login"
        >
          Login
        </Button>
        <Button rightIcon={<IconArrow fontSize="3rem" />}>Contact Us</Button>
      </HStack>
    </Grid>
  );
};

const UberUns = () => {
  return (
    <Menu>
      <MenuButton
        as={Button}
        variant="ghost"
        rightIcon={<IconDown />}
        fontWeight={600}
      >
        Über uns
      </MenuButton>
      <MenuList>
        <MenuItem>Coming soon</MenuItem>
      </MenuList>
    </Menu>
  );
};
