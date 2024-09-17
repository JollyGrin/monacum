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
                Datenschutzrichtlinien für Monacum Immobilienverwaltung GmbH
              </Text>
              <Text>
                Wir, die Betreiber der Website Monacum
                (https://www.monacum-immobilien.de), nehmen den Schutz Ihrer
                persönlichen Daten sehr ernst. Diese Datenschutzerklärung
                informiert Sie darüber, welche Daten wir erheben, wie wir diese
                nutzen und welche Rechte Sie in Bezug auf Ihre persönlichen
                Daten haben.
              </Text>

              <Text fontWeight={700} fontSize="3rem">
                1. Verantwortliche Stelle
              </Text>
              <Text>
                Die verantwortliche Stelle für die Datenverarbeitung auf dieser
                Website ist: Monacum Immobilienverwaltung GmbH E-Mail:
                info@monacum-immobilien.de
              </Text>

              <Text fontWeight={700} fontSize="3rem">
                2. Erhobene Daten
              </Text>
              <Text>
                Wir erheben keine personenbezogenen Daten von Nutzern über diese
                Website. Unsere Website nutzt keine Cookies, keine Analysetools
                und keine Tracking-Technologien. Es werden keine Informationen
                über den Besuch oder die Nutzung dieser Website gespeichert.
              </Text>

              <Text fontWeight={700} fontSize="3rem">
                3. Speicherung und Hosting
              </Text>
              <Text>
                Der Code unserer Website wird privat auf GitHub gespeichert, und
                die Website wird auf den Servern von Vercel gehostet. Beide
                Plattformen sind DSGVO-konform und gewährleisten den Schutz
                Ihrer Daten. Da wir jedoch keine Benutzerdaten erheben oder
                verarbeiten, sind keine zusätzlichen Datenschutzmaßnahmen
                erforderlich.
              </Text>

              <Text fontWeight={700} fontSize="3rem">
                4. Weitergabe von Daten
              </Text>
              <Text>
                Da wir keine Daten von Ihnen erheben, werden selbstverständlich
                auch keine Daten an Dritte weitergegeben.
              </Text>

              <Text fontWeight={700} fontSize="3rem">
                5. Ihre Rechte
              </Text>
              <Text>
                Da wir keine personenbezogenen Daten verarbeiten, bestehen in
                Bezug auf diese Website keine spezifischen Rechte zur
                Datenverarbeitung. Sollten Sie dennoch Fragen haben, können Sie
                uns jederzeit unter info@monacum-immobilien.de kontaktieren.
              </Text>

              <Text fontWeight={700} fontSize="3rem">
                6. Änderungen der Datenschutzerklärung
              </Text>
              <Text>
                Wir behalten uns das Recht vor, diese Datenschutzerklärung bei
                Bedarf zu ändern. Über wesentliche Änderungen werden wir auf
                unserer Website informieren.
              </Text>
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
