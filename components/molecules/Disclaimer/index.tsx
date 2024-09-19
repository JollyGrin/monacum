// components/GdprDisclaimer.js
import { Box, Button, Flex, Text, useDisclosure } from "@chakra-ui/react";
import { useEffect } from "react";

export const GdprDisclaimer = () => {
  const { isOpen, onClose, onOpen } = useDisclosure({ defaultIsOpen: true });

  useEffect(() => {
    const consent = localStorage.getItem("gdpr-consent");
    if (consent) {
      onClose();
    } else {
      onOpen();
    }
  }, [onClose, onOpen]);

  const handleConsent = () => {
    localStorage.setItem("gdpr-consent", "true");
    onClose();
  };

  if (!isOpen) return null;

  return (
    <Flex
      position="fixed"
      bottom={0}
      width="100%"
      color="white"
      zIndex={9999}
      direction="column"
      alignItems="center"
    >
      <Box backgroundColor="gray.700" p="2rem">
        <Text fontSize="2.5rem" fontWeight={700}>
          Datenschutzhinweis
        </Text>
        <Text>
          Unsere Website verwendet keine Cookies zur Verfolgung oder Analyse von
          Nutzeraktivitäten. Es werden keine persönlichen Daten gesammelt oder
          gespeichert. Es gibt keine analytischen Tools oder Funktionen auf
          dieser Seite.
        </Text>
        <Text mb={2}>
          Durch das Klicken auf „Verstanden“ bestätigen Sie, dass Sie diese
          Informationen zur Kenntnis genommen haben.
        </Text>
        <Button colorScheme="teal" onClick={handleConsent}>
          Verstanden
        </Button>
      </Box>
    </Flex>
  );
};
