import { Nav } from "@/components/molecules/Nav";
import { Box, Flex, Grid, Text, VStack } from "@chakra-ui/react";
import Head from "next/head";
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from "@chakra-ui/react";

export default function Impressum() {
  return (
    <>
      <Head>
        <title>Monacum Immobilien: Impressum</title>
        <meta name="description" content="Monacum" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Box p="2rem">
          <Nav />
          <p
            style={{
              width: "fit-content",
              marginTop: "2rem",
              fontSize: "5rem",
              fontWeight: 700,
            }}
          >
            Impressum
          </p>
          <Grid
            templateColumns={{ base: "1fr", md: "1fr 1fr" }}
            gap={{ base: "5rem", md: "0.5rem" }}
            pt="2rem"
            minH="91vh"
            w="100%"
            // backgroundImage="/houses.svg"
            // backgroundPosition="bottom"
            // backgroundSize="auto"
            // backgroundRepeat="repeat-x"
          >
            <VStack
              alignItems="start"
              sx={{
                strong: {
                  mt: "2rem",
                },
              }}
            >
              <Impress />
            </VStack>
            <VStack
              bg="rgba(0,0,0,0.025)"
              p="1rem"
              alignItems="start"
              borderRadius="1rem"
              letterSpacing="0.1px"
            >
              <Haftung />
            </VStack>
          </Grid>
        </Box>
      </main>
    </>
  );
}

const Impress = () => (
  <>
    <strong>Angaben gemäß § 5 TMG:</strong>
    <p>Monacum Immobilienverwaltung GmbH</p>
    <p>Boschstr. 12</p>
    <p>82178 Puchheim</p>
    <br />
    <p>Vertreten durch:</p>
    <p>Michael Werner Hödl und Maximilian Reichenbächer</p>
    <strong>Kontakt:</strong>
    <p>Telefon: +49 (0)176-23648073</p>
    <p>E-Mail: info@monacum-immobilien.de</p>
    <strong>Registereintrag:</strong>
    <p>Eintragung im Handelsregister.</p>
    <p>Registergericht: Amtsgericht München</p>
    <p>Registernummer: HRB 296091</p>
    <strong>Umsatzsteuer-ID:</strong>
    <p>
      Umsatzsteuer-Identifikationsnummer gemäß § 27a Umsatzsteuergesetz:
      DE407392777
    </p>
    <strong>Berufserlaubnis:</strong>
    <p>Genehmigung gemäß §34c GewO</p>
  </>
);

const Haftung = () => (
  <>
    <strong>Haftung für Inhalte</strong>
    <p>
      Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf
      diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis
      10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet,
      übermittelte oder gespeicherte fremde Informationen zu überwachen oder
      nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit
      hinweisen. Verpflichtungen zur Entfernung oder Sperrung der Nutzung von
      Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt.
      Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis
      einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von
      entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend
      entfernen.
    </p>
    <strong>Haftung für Links</strong>
    <p>
      Unser Angebot enthält Links zu externen Webseiten Dritter, auf deren
      Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden
      Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten
      Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten
      verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung
      auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum
      Zeitpunkt der Verlinkung nicht erkennbar. Eine permanente inhaltliche
      Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte
      einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von
      Rechtsverletzungen werden wir derartige Links umgehend entfernen.
    </p>
    <strong>Urheberrecht</strong>
    <p>
      Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen
      Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung,
      Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen
      des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen
      Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind nur für den
      privaten, nicht kommerziellen Gebrauch gestattet. Soweit die Inhalte auf
      dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte
      Dritter beachtet. Insbesondere werden Inhalte Dritter als solche
      gekennzeichnet. Sollten Sie trotzdem auf eine Urheberrechtsverletzung
      aufmerksam werden, bitten wir um einen entsprechenden Hinweis. Bei
      Bekanntwerden von Rechtsverletzungen werden wir derartige Inhalte umgehend
      entfernen.
    </p>
  </>
);
