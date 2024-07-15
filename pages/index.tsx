import { Nav } from "@/components/molecules/Nav";
import { LandingHero } from "@/components/organisms/Landing/Hero";
import {
  Image,
  HStack,
  Button,
  Box,
  Grid,
  Text,
  VStack,
  ChakraProps,
  Center,
  Flex,
  Input,
} from "@chakra-ui/react";
import Head from "next/head";
import styled from "@emotion/styled";
import { ReactNode } from "react";
import { ThreeColumns } from "@/components/organisms/Landing/ThreeColumns";
import { LoginExplainer } from "@/components/organisms/Landing/LoginExplainer";

export default function Home() {
  return (
    <>
      <Head>
        <title>Monacum Immobilien</title>
        <meta name="description" content="Monacum" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Box p="2rem">
          <Nav />
          <LandingHero />
        </Box>
        <Container>
          <HStack
            // alignItems="start"
            gap="1rem"
            flexDirection={{ base: "column", sm: "row" }}
            mb="2rem"
          >
            <Image
              alt="image"
              src="/image/mary.jpg"
              maxW={{ base: "100%", sm: "300px" }}
              borderRadius="1rem"
            />
            <Box>
              <Text fontWeight={700}>
                Mit uns haben Sie den idealen Partner an Ihrer Seite
              </Text>
              <Text>
                Unsere umfassenden Dienstleistunge in den Bereichen
                Wohneigentums-, Miet- und Sondereigentumsverwaltung zielen
                darauf ab, Ihre Erwartungen nicht nur zu erfüllen, sondern zu
                übertreffen.
              </Text>
            </Box>
          </HStack>
        </Container>
        <Container bg="brand.highlight" py="3rem">
          <Text
            alignSelf="center"
            w="fit-content"
            py="2rem"
            color="brand.shadow"
            fontWeight={500}
          >
            In den folgenden Bereichen bieten wir Ihnen eine kompetente und
            präzise Verwaltung Ihrer Objekte:
          </Text>
          <ThreeColumns />
          <Text pt="2rem" color="brand.shadow" fontWeight={500}>
            Gerne erstellen wir für Sie ein maßgeschneidertes Angebot mit
            detaillierter Leistungsbeschreibung und freuen uns darauf, Ihnen
            unsere Dienste persönlich vorstellen zu dürfen.
          </Text>
        </Container>
        <Container py="2rem">
          <LoginExplainer />
        </Container>
      </main>
    </>
  );
}

const Container = (props: ChakraProps & { children: ReactNode }) => {
  return (
    <Box {...props}>
      <Box maxW="800px" m="0 auto" px="1rem">
        {props.children}
      </Box>
    </Box>
  );
};
