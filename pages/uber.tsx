import { Footer } from "@/components/molecules/Footer";
import { Nav } from "@/components/molecules/Nav";
import {
  Text,
  Image,
  Box,
  ChakraProps,
  HStack,
  VStack,
  Flex,
  UnorderedList,
} from "@chakra-ui/react";
import Head from "next/head";
import Link from "next/link";
import { ReactNode } from "react";

import { FaRocket as IconRocket } from "react-icons/fa";

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
        <Flex direction="column" minH="100vh" justifyContent="space-between">
          <Box p="2rem">
            <Nav />
          </Box>
          <Container>
            <Flex direction="column" maxW="700px" m="0 auto" gap="2rem">
              <Text fontWeight={700} fontSize="3rem">
                Ihre Experten für Immobilienverwaltung in und um München
              </Text>
              <Text>
                Willkommen bei Monacum Immobilienverwaltung GmbH, Ihrem
                vertrauenswürdigen Partner für professionelle
                Immobilienverwaltung in München und der Region. Mit unserer
                langjährigen Erfahrung und umfassenden Fachkenntnissen in der
                Immobilienbranche sorgen wir dafür, dass Ihre Immobilien nicht
                nur optimal verwaltet, sondern auch nachhaltig im Wert
                gesteigert werden.
              </Text>
              <Text>
                Wir legen großen Wert auf persönlichen Service und individuelle
                Betreuung. Unser engagiertes Team aus erfahrenen
                Immobilienexperten bietet Ihnen maßgeschneiderte Lösungen – von
                der Mietverwaltung über technische Objektbetreuung bis hin zur
                Verwaltung von Wohnungseigentümergemeinschaften (WEG).
              </Text>
              <Text fontWeight={700} fontSize="3rem">
                Was uns auszeichnet:
              </Text>
              <UnorderedList>
                <li>
                  <p>
                    <strong>Verlässlichkeit:</strong> Wir setzen auf eine
                    transparente und vertrauensvolle Zusammenarbeit.
                  </p>
                </li>
                <li>
                  <p>
                    <strong>Qualität:</strong> Durch kontinuierliche Fortbildung
                    und den Einsatz moderner Technologien bieten wir Ihnen
                    höchste Standards in der Immobilienverwaltung.
                  </p>
                </li>
                <li>
                  <p>
                    <strong>Lokale Expertise:</strong> Mit tiefen Wurzeln in
                    München und der Region kennen wir den Immobilienmarkt und
                    seine Besonderheiten genau.
                  </p>
                </li>
              </UnorderedList>
              <p>
                Bei uns steht der langfristige Erfolg Ihrer Immobilien im
                Mittelpunkt. Kontaktieren Sie uns und erfahren Sie, wie wir auch
                Ihre Objekte effizient und werterhaltend verwalten können!
              </p>
            </Flex>
          </Container>
          <Footer />
        </Flex>
      </main>
    </>
  );
}

const Staff = () => {
  return (
    <VStack>
      <Image
        w="200px"
        src="https://s3.amazonaws.com/media.mixrank.com/profilepic/4d7cc954da001fb9cae6a3f86136c88c"
        // src="https://api.dicebear.com/9.x/lorelei/svg?seed=john"
        alt="max"
      />
      <Text fontWeight={700} fontSize="2rem">
        Maximilian Reichenbächer
      </Text>
      <HStack>
        <Link href="https://rocketreach.co/maximilian-reichenbacher-email_170462330">
          <IconRocket />
        </Link>
      </HStack>
      <Text>Some nice text about how great max is</Text>
    </VStack>
  );
};

const Container = (props: ChakraProps & { children: ReactNode }) => {
  return (
    <Box my="4rem" {...props}>
      <Box maxW={props.maxW ?? "800px"} m="0 auto" px="2rem">
        {props.children}
      </Box>
    </Box>
  );
};
