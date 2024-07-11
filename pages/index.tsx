import { Nav } from "@/components/molecules/Nav";
import { Button, Box, Grid, Text, VStack } from "@chakra-ui/react";
import Head from "next/head";

import { LuArrowUpRight as IconArrow } from "react-icons/lu";

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
          <Grid
            minH="50vh"
            placeItems="center"
            backgroundImage="/houses2.svg"
            backgroundPosition="bottom"
            backgroundSize="unset"
            backgroundRepeat="repeat"
            mx="-2rem"
            position="relative"
          >
            <Box
              w="100%"
              h="100px"
              bg="linear-gradient(0deg, rgba(0,0,0,0) 0%, rgba(255,248,243,0.75) 50%, rgba(255,248,243,1) 100%)"
              position="absolute"
              top="0"
            />
            <VStack alignItems="start" gap="2rem">
              <Text
                fontFamily="header"
                fontWeight={500}
                fontSize="13rem"
                lineHeight="10rem"
              >
                Don&apos;t trust us,
                <br /> trust our clients
              </Text>
              <Text fontSize="2.5rem">
                Over 300 listings, apartments, lots and more available now
              </Text>
              <Button rightIcon={<IconArrow fontSize="3rem" />}>
                Get in touch
              </Button>
            </VStack>
          </Grid>
        </Box>
      </main>
    </>
  );
}
