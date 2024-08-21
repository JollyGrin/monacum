import { CONTACT_QUERY_KEY } from "@/components/molecules/Nav";
import { Image, Button, Box, Grid, Text, VStack } from "@chakra-ui/react";
import Link from "next/link";
import { LuArrowUpRight as IconArrow } from "react-icons/lu";

export const LandingHero = () => {
  return (
    <Grid
      minH="80vh"
      placeItems="center"
      // backgroundImage="/houses2.svg"
      bg="brand.secondary"
      backgroundBlendMode="hard-light"
      backgroundImage="/office.jpg"
      backgroundPosition="100% 40%"
      backgroundSize="cover"
      backgroundRepeat="repeat"
      mx="-2rem"
      position="relative"
      p="2rem"
    >
      <Box
        w="100%"
        h="100px"
        bg="linear-gradient(0deg, rgba(0,0,0,0) 0%, rgba(255,248,243,0.75) 50%, rgba(255,248,243,1) 100%)"
        position="absolute"
        top="0"
      />
      <VStack gap="2rem" maxW="600px">
        <Image
          src="/logo.png"
          alt="logo"
          maxW={{ base: "200px", md: "300px" }}
        />
        <Text
          textAlign="center"
          w="100%"
          fontSize="5rem"
          fontWeight={700}
          color="brand.primary"
          textShadow="3px 3px 1px rgba(0,0,0,0.25)"
        >
          Monacum Immobilien
        </Text>
        <Button
          rightIcon={<IconArrow fontSize="3rem" />}
          as={Link}
          href={{ query: { [CONTACT_QUERY_KEY]: undefined } }}
        >
          Get in touch
        </Button>
      </VStack>
      <Box
        w="100%"
        h="50px"
        bg="linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(255,248,243,0.75) 50%, rgba(255,248,243,1) 100%)"
        position="absolute"
        bottom="0"
      />
    </Grid>
  );
};
