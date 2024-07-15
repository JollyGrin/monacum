import {
  Image,
  Text,
  HStack,
  Box,
  Grid,
  VStack,
  Flex,
  Button,
} from "@chakra-ui/react";
import { ReactNode } from "react";

import { FaHammer as IconHammer } from "react-icons/fa6";
import { FaHandsHelping as IconHelping } from "react-icons/fa";
import { MdFolderSpecial as IconSpecial } from "react-icons/md";

export const ThreeColumns = () => {
  return (
    <Grid templateColumns={{ base: "1fr", md: "repeat(3,1fr)" }} gap="1rem">
      <Item
        img="https://picsum.photos/200"
        title="WEG-Verwaltung"
        icon={<IconHammer />}
      />
      <Item
        img="https://picsum.photos/200"
        title="Miethausverwaltung"
        icon={<IconHelping />}
      />
      <Item
        img="https://picsum.photos/200"
        title="Sondereigentumsverwaltung"
        icon={<IconSpecial />}
      />
    </Grid>
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

const Item = (props: { img: string; title: string; icon?: ReactNode }) => {
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
      <Button w="fit-content">More Information</Button>
    </Flex>
  );
};
