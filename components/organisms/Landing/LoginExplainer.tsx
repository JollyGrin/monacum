import { Box, Button, Grid, Text } from "@chakra-ui/react";
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
          Login mit Casavi
        </Button>
      </Box>
    </Grid>
  );
};
