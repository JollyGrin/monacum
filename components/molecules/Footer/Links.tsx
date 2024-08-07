import { Text, Box, HStack } from "@chakra-ui/react";
import Link from "next/link";

export const Links = () => {
  return (
    <HStack gap="5rem" alignItems="start">
      <Box mt="2rem">
        <Text fontWeight={600}>Leistungen</Text>
        <LinkText href="/">WEG-Verwaltung</LinkText>
        <LinkText href="/">Miethausverwaltung</LinkText>
        <LinkText href="/">Sondereigentumsverwaltung</LinkText>
      </Box>
      <Box mt="2rem">
        <Text fontWeight={600}>Über uns</Text>
        <LinkText href="/">Dataschutz</LinkText>
        <LinkText href="/">Impressum</LinkText>
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
