import { Text, Grid, Flex, Button } from "@chakra-ui/react";
import { ReactNode, useState } from "react";
import { FaHammer as IconHammer } from "react-icons/fa6";
import { FaHandsHelping as IconHelping } from "react-icons/fa";
import { MdFolderSpecial as IconSpecial } from "react-icons/md";
import { InfoModal } from "./InfoModal";

export const ThreeColumns = () => {
  const [modal, setModal] = useState<"weg" | "miet" | "sonder">();

  return (
    <>
      {modal && (
        <InfoModal
          isOpen={!!modal}
          onClose={() => setModal(undefined)}
          modalKey={modal}
        />
      )}

      <Grid templateColumns={{ base: "1fr", md: "repeat(3,1fr)" }} gap="1rem">
        <Item
          img="https://picsum.photos/200"
          title="WEG-Verwaltung"
          icon={<IconHammer />}
          onClick={() => setModal("weg")}
        />
        <Item
          img="https://picsum.photos/200"
          title="Miethausverwaltung"
          icon={<IconHelping />}
          onClick={() => setModal("miet")}
        />
        <Item
          img="https://picsum.photos/200"
          title="Sondereigentumsverwaltung"
          icon={<IconSpecial />}
          onClick={() => setModal("sonder")}
        />
      </Grid>
    </>
  );
};

// const Item = (props: { img: string; title: string }) => {
//   return (
//     <VStack>
//       <Text fontWeight={700} fontSize="2rem">
//         {props.title}
//       </Text>
//       <Image alt="bulletpoint" src={props.img} borderRadius="100%" />
//     </VStack>
//   );
// };

const Item = (props: {
  img: string;
  title: string;
  icon?: ReactNode;
  onClick(): void;
}) => {
  return (
    <Flex
      direction="column"
      bg="pure.white"
      p="3rem 2rem"
      borderRadius="0.25rem"
      boxShadow="0 2px 3px rgba(0,0,0,0.1)"
      gap="2rem"
    >
      <Grid
        bg="brand.shadow"
        color="pure.white"
        placeItems="center"
        boxSize="4rem"
        borderRadius="100%"
        fontSize="2.5rem"
      >
        {props.icon}
      </Grid>
      <Text fontWeight={700}>{props.title}</Text>
      <Text fontWeight={200}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </Text>
      <Button w="fit-content" onClick={props.onClick}>
        Mehr
      </Button>
    </Flex>
  );
};
