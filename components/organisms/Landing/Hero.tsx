import { CONTACT_QUERY_KEY } from "@/components/molecules/Nav";
import { Image, Button, Box, Grid, Text, VStack } from "@chakra-ui/react";
import Link from "next/link";
import { LuArrowUpRight as IconArrow } from "react-icons/lu";
import { motion } from "framer-motion";

const MotionImage = motion(Image);
const MotionGrid = motion(Grid);

export const LandingHero = () => {
  return (
    <MotionGrid
      minH="80vh"
      placeItems="center"
      bg="brand.secondary"
      backgroundBlendMode="hard-light"
      backgroundImage="/office.jpg"
      backgroundPosition="100% 40%"
      backgroundSize="150%" // Start zoomed in
      backgroundRepeat="repeat"
      mx="-2rem"
      position="relative"
      p="2rem"
      initial={{ backgroundSize: "130%" }} // Starts zoomed in
      animate={{ backgroundSize: "105%" }} // Animates to full size
      transition={{ duration: 2 }} // Duration of the zoom effect (2 seconds)
    >
      <Box
        w="100%"
        h="100px"
        bg="linear-gradient(0deg, rgba(0,0,0,0) 0%, rgba(255,248,243,0.75) 50%, rgba(255,248,243,1) 100%)"
        position="absolute"
        top="0"
      />
      <VStack gap="2rem" maxW="600px">
        <MotionImage
          src="/logo.png"
          alt="logo"
          maxW={{ base: "200px", md: "300px" }}
          initial={{ opacity: 0, scale: 0.8 }} // Animation starts from 0 opacity and scaled down
          animate={{ opacity: 1, scale: 1 }} // Animate to full opacity and original size
          transition={{ duration: 3 }} // Duration of 1 second
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
          zIndex={1000}
          rightIcon={<IconArrow fontSize="3rem" />}
          as={Link}
          href={{ query: { [CONTACT_QUERY_KEY]: undefined } }}
        >
          Kontakt
        </Button>
      </VStack>
      <Box
        w="100%"
        h="50px"
        bg="linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(255,248,243,0.75) 50%, rgba(255,248,243,1) 100%)"
        position="absolute"
        bottom="0"
      />
    </MotionGrid>
  );
};
