import { Flex, Button, Grid, Text } from "@chakra-ui/react";
import Link from "next/link";

export const LoginExplainer = () => {
  return (
    <Grid placeItems="center" gap="2rem" m="0 auto">
      <Flex id="login" direction="column">
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
        <Button
          as={Link}
          href="https://mycasavi.com/app/login"
          alignSelf="center"
          w="fit-content"
          mt="2rem"
        >
          Login mit Casavi
        </Button>
      </Flex>
    </Grid>
  );
};
