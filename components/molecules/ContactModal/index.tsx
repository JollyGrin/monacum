import {
  Text,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  Box,
} from "@chakra-ui/react";

export function ContactModal(props: { isOpen: boolean; onClose(): void }) {
  return (
    <>
      <Modal {...props}>
        <ModalOverlay />
        <ModalContent minW={{ base: 0, sm: "500px" }}>
          <ModalHeader fontSize="3rem" fontWeight={700} my="1rem" mx="1rem">
            header
          </ModalHeader>
          <ModalBody p="0 3rem 3rem">body</ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}
