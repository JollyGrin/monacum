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
            <HStack justifyContent="space-evenly">
              <Staff />
              <Staff />
            </HStack>
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
      <Box maxW={props.maxW ?? "800px"} m="0 auto" px="1rem">
        {props.children}
      </Box>
    </Box>
  );
};
