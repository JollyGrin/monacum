import { THREE_IDs } from "@/components/organisms/Landing/ThreeColumns";
import { Text, Box, HStack } from "@chakra-ui/react";
import Link from "next/link";

export const Links = () => {
  return (
    <HStack gap="5rem" alignItems="start">
      <Box mt="2rem">
        <Text fontWeight={600}>Leistungen</Text>
        <LinkText href={`/#${THREE_IDs.WEG}`}>WEG-Verwaltung</LinkText>
        <LinkText href={`/#${THREE_IDs.MIET}`}>Miethausverwaltung</LinkText>
        <LinkText href={`/#${THREE_IDs.SONDER}`}>
          Sondereigentumsverwaltung
        </LinkText>
      </Box>
      <Box mt="2rem">
        <LinkText href="/uber">Über uns</LinkText>
        <LinkText href="?contact=">Kontakt</LinkText>
        <LinkText href="/datenschutz">Datenschutz</LinkText>
        <LinkText href="/impressum">Impressum</LinkText>
      </Box>
    </HStack>
  );
};

const LinkText = (props: { href: string; children: string }) => (
  <Box>
    <Text as={Link} href={props.href} textDecor="underline">
      {props.children}
    </Text>
  </Box>
);
