import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";

export function InfoModal(props: { isOpen: boolean; onClose(): void }) {
  return (
    <>
      <Modal {...props}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />
          <ModalBody>hjk</ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}
