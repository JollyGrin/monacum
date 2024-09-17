import {
  Grid,
  Text,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  Box,
  HStack,
  Flex,
  ModalCloseButton,
  ModalFooter,
  Button,
} from "@chakra-ui/react";
import Link from "next/link";

import { MdEmail as IconEmail } from "react-icons/md";
import { FaPhone as IconPhone } from "react-icons/fa";
import { ReactNode } from "react";
import { MapIframe } from "../Footer/MapIframe";

const fields = {
  email: "info@monacum.com",
  phone: "+496170961709",
};

export function ContactModal(props: { isOpen: boolean; onClose(): void }) {
  return (
    <>
      <Modal {...props}>
        <ModalOverlay />
        <ModalContent
          minW={{ base: "300px", sm: "500px" }}
          w={{ base: "100%", sm: "initial" }}
        >
          <ModalCloseButton />
          <ModalHeader fontSize="3rem" fontWeight={700} my="1rem" mx="1rem">
            Kontakt
          </ModalHeader>
          <ModalBody p={{ base: "0.5rem", sm: "0 3rem 3rem" }}>
            <Grid placeItems="center" minH="30vh" fontSize="2.5rem">
              <Flex direction="column" gap="2rem">
                <Field
                  Icon={<IconEmail />}
                  link={`mailto:${fields.email}`}
                  text={fields.email}
                />

                <Field
                  Icon={<IconPhone />}
                  link={`tel:${fields.phone}`}
                  text={fields.phone}
                />
              </Flex>
            </Grid>
            <MapIframe height="300px" />
          </ModalBody>
          <ModalFooter>
            <Button
              onClick={props.onClose}
              display={{ base: "block", sm: "none" }}
            >
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

const Field = (props: { Icon: ReactNode; text: string; link: string }) => (
  <HStack
    gap="inherit"
    transition="all 0.25s ease"
    _hover={{ transform: "scale(1.1)", textDecor: "underline" }}
  >
    {props.Icon}
    <Text as={Link} href={props.link}>
      {props.text}
    </Text>
  </HStack>
);
