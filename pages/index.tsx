import { Nav } from "@/components/molecules/Nav";
import { LandingHero } from "@/components/organisms/Landing/Hero";
import { Button, Box, Grid, Text, VStack } from "@chakra-ui/react";
import Head from "next/head";

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
      </main>
    </>
  );
}
