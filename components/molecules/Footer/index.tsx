import { Center, Grid, Text, Image, Box, VStack } from "@chakra-ui/react";
import Link from "next/link";
import { MapIframe } from "./MapIframe";
import { Links } from "./Links";

export const Footer = () => {
  return (
    <Box minH="20vh" bg="brand.secondary" color="brand.primary" p="2rem">
      <MapIframe />
      <Grid
        templateColumns="1fr 3fr 1fr"
        h="100%"
        maxW="900px"
        m="0 auto"
        alignItems="start"
      >
        <Logo />
        <div />
        <Links />
      </Grid>
    </Box>
  );
};

const Logo = () => {
  return (
    <VStack py="2rem">
      <Image src="/logo.png" alt="logo" boxSize="10rem" alignSelf="center" />
      <Text fontWeight={700} color="brand.highlight" textAlign="center">
        Monacum Immobilien
      </Text>
    </VStack>
  );
};

const LinkText = (props: { href: string; children: string }) => (
  <Text as={Link} href={props.href}>
    {props.children}
  </Text>
);
