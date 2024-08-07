import { Image, Button, Box, Grid, Text, VStack } from "@chakra-ui/react";
import { LuArrowUpRight as IconArrow } from "react-icons/lu";

export const LandingHero = () => {
  return (
    <Grid
      minH="80vh"
      placeItems="center"
      // backgroundImage="/houses2.svg"
      bg="brand.secondary"
      backgroundBlendMode="color-dodge"
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
        <Image src="/logo.png" alt="logo" maxW="300px" />
        <Text
          textAlign="center"
          w="100%"
          fontSize="5rem"
          fontWeight={700}
          color="brand.primary"
        >
          Monacum Immobilien
        </Text>
        <Button rightIcon={<IconArrow fontSize="3rem" />}>Get in touch</Button>
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
