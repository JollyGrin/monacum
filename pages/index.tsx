import { Nav } from "@/components/molecules/Nav";
import { LandingHero } from "@/components/organisms/Landing/Hero";
import { Image, HStack, Box, Text, ChakraProps } from "@chakra-ui/react";
import Head from "next/head";
import { ReactNode } from "react";
import { ThreeColumnItem } from "@/components/organisms/Landing/ThreeColumns";
import { LoginExplainer } from "@/components/organisms/Landing/LoginExplainer";
import { Footer } from "@/components/molecules/Footer";

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
            flexDirection={{ base: "column", md: "row" }}
            mb="2rem"
            minH="300px"
          >
            <Image
              alt="image"
              src="/towers.jpg"
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
        <Container
          bg="brand.primary"
          py="3rem"
          maxW={"unset !important"}
          mb={"0 !important"}
        >
          <Box maxW="800px" m="0 auto" color="pure.black">
            <Text alignSelf="center" w="fit-content" py="2rem" fontWeight={500}>
              In den folgenden Bereichen bieten wir Ihnen eine kompetente und
              präzise Verwaltung Ihrer Objekte:
            </Text>
          </Box>
          <ThreeColumnItem />
          <Box maxW="800px" m="0 auto" color="black">
            <Text pt="2rem" color="inherit" fontWeight={500}>
              Gerne erstellen wir für Sie ein maßgeschneidertes Angebot mit
              detaillierter Leistungsbeschreibung und freuen uns darauf, Ihnen
              unsere Dienste persönlich vorstellen zu dürfen.
            </Text>
          </Box>
        </Container>
        <Box position="relative" p={0} pt="7rem">
          {/* <Box */}
          {/*   w="100%" */}
          {/*   h="45px" */}
          {/*   bg="linear-gradient(0deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.65) 50%, rgba(0,0,0,1) 100%)" */}
          {/*   position="absolute" */}
          {/*   top="-1px" */}
          {/* /> */}
          <Container py="2rem" mt={0}>
            <LoginExplainer />
          </Container>
        </Box>
        <Footer />
      </main>
    </>
  );
}

const Container = (props: ChakraProps & { children: ReactNode }) => {
  return (
    <Box my="4rem" {...props}>
      <Box maxW={props.maxW ?? "800px"} m="0 auto" px="1rem">
        {props.children}
      </Box>
    </Box>
  );
};
