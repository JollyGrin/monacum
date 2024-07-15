import { Button, Box, Grid, Text, VStack } from "@chakra-ui/react";
import { LuArrowUpRight as IconArrow } from "react-icons/lu";

export const LandingHero = () => {
  return (
    <Grid
      minH="80vh"
      placeItems="center"
      backgroundImage="/houses2.svg"
      backgroundPosition="bottom"
      backgroundSize="unset"
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
      <VStack alignItems="start" gap="2rem" maxW="600px">
        <Text
          fontFamily="header"
          fontWeight={500}
          fontSize="9rem"
          lineHeight="8rem"
        >
          Mit uns treffen Sie die richtige Wahl.
        </Text>

        <Text fontSize="2.5rem">
          Nach diesem Prinzip betreuen wir Wohnungseigentümergemeinschaften und
          Miethäuser umfassend, zuverlässig und gewissenhaft.
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
