import { Box, Button, Flex, Grid, Image, Text } from "@chakra-ui/react";
import Link from "next/link";

export const LoginExplainer = () => {
  return (
    <Grid placeItems="center" gap="2rem" maxW="600px" m="0 auto">
      <Box id="login">
        <Text fontWeight={600} fontSize="2.5rem">
          Login
        </Text>
        <Text>
          Dieser Bereich ist exklusiv für Wohnungseigentümern und Mietern, die
          bereits von uns betreut werden. Mit casavi © erhalten Sie Zugang zu
          diversen Unterlagen Ihres Anwesens. <br />
          <br />
          Hier können Sie jederzeit auf Dokumente wie Protokolle, den
          Energieausweis, die Gebäudeversicherungsurkunde und vieles mehr
          zugreifen.
        </Text>
        <Button mt="1rem" as={Link} href="https://mycasavi.com/app/login">
          Login with Casavi
        </Button>
      </Box>
    </Grid>
  );
};

const FakeLogin = () => (
  <Flex
    userSelect="none"
    direction="column"
    bg="brand.shadow"
    p="2rem"
    borderRadius="1rem"
    gap="1rem"
    opacity="0.5"
  >
    <Image
      src="/logo.png"
      alt="logo"
      boxSize="10rem"
      alignSelf="center"
      bg="white"
      borderRadius="100%"
      p="1rem"
    />
    <Text
      bg="pure.white"
      p="1rem 2rem"
      borderRadius="1rem"
      border="solid 1px"
      borderColor="brand.highlight"
    >
      Username
    </Text>
    <Text
      bg="pure.white"
      p="1rem 2rem"
      borderRadius="1rem"
      border="solid 1px"
      borderColor="brand.highlight"
    >
      ************
    </Text>
    <Button
      as={Link}
      href="https://mycasavi.com/app/login"
      cursor="pointer"
      _hover={{}}
    >
      Log in
    </Button>
  </Flex>
);
