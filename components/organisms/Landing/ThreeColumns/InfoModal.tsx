import {
  Text,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  Box,
  ModalCloseButton,
} from "@chakra-ui/react";

export type ModalStates = "WEG" | "MIET" | "SONDER" | undefined;

export function InfoModal(props: {
  isOpen: boolean;
  onClose(): void;
  modalKey: ModalStates;
}) {
  if (props.modalKey === undefined) return null;
  return (
    <>
      <Modal {...props} isCentered>
        <ModalOverlay />
        <ModalContent
          minW={{ base: "320px", sm: "500px" }}
          borderBottom="solid 1rem"
          borderBottomColor="#ecdcbc"
        >
          <ModalCloseButton size="lg" />
          <ModalHeader fontSize="3rem" fontWeight={700} my="1rem" mx="1rem">
            {
              {
                WEG: <Text>WEG-Verwaltung</Text>,
                MIET: <Text>Miethausverwaltung</Text>,
                SONDER: <Text>Sondereigentumsverwaltung</Text>,
              }[props.modalKey]
            }
          </ModalHeader>
          <ModalBody p="0 3rem 3rem">
            {
              {
                WEG: <Weg />,
                MIET: <Miet />,
                SONDER: <Sonder />,
              }[props.modalKey]
            }
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}

const Weg = () => (
  <Box>
    <Text>
      Unser Fokus liegt auf dem Vertrauen unserer Kund*innen, langjährigem
      Know-how und der zuverlässigen Betreuung Ihrer
      Wohnungseigentümergemeinschaft.
      <br />
      <br />
      Wir garantieren eine bodenständige, seriöse und betriebswirtschaftlich
      orientierte WEG-Verwaltung mit qualifizierten Mitarbeitenden. Eine
      persönliche Ansprechperson steht Ihnen für alle Belange Ihres Eigentums
      zur Verfügung.
      <br />
      <br />
      Die Erstellung der turnusmäßigen Jahresabrechnung und des Wirtschaftsplans
      erfolgt im Einklang mit der Einberufung von Eigentümerversammlungen und
      der Umsetzung der gefassten Beschlüsse.
    </Text>
  </Box>
);

const Miet = () => (
  <Box>
    <Text>
      Neben der kompetenten Betreuung der Mieter*innen legen wir großen Wert auf
      eine sinnvolle Instandsetzungspolitik, eine sichere Finanzverwaltung und
      ein solides Versicherungsmanagement für Ihr Miethaus.
      <br />
      <br />
      Dank unserer langjährigen Zusammenarbeit mit qualifizierten Handwerks- und
      Gebäudemanagementunternehmen garantieren wir die optimale Werterhaltung
      Ihres Objektes.
      <br />
      <br />
      Wir übernehmen die professionelle und umfassende Verwaltung in allen
      Belangen.
    </Text>
  </Box>
);

const Sonder = () => (
  <Box>
    <Text>
      Wir kümmern uns um alle relevanten Aufgaben rund um Ihre Wohnung und
      sämtliche Belange des Mietverhältnisses. Dazu gehören der Abschluss und
      die Kündigung von Mietverträgen, die Überwachung der Mietzahlungen und die
      Abwicklung von Mietinkasso- Verfahren. Zudem erstellen wir
      Betriebskostenabrechnungen und verwalten Kautionen, inklusive deren
      Abrechnung.
      <br />
      <br />
      Bei Fragen stehen wir Ihnen und Ihren Mieter*innen jederzeit zur Verfügung
      und übernehmen die Kommunikation in Schadensfällen. Dies umfasst auch die
      Abwicklung von versicherten Schadensfällen sowie die Überwachung und
      Koordination des gesamten Prozesses, einschließlich der Hinzuziehung
      qualifizierter Handwerksunternehmen.
    </Text>
  </Box>
);
