import { Button, Text } from "@chakra-ui/react";
import styled from "@emotion/styled";
import { ReactNode, useState } from "react";
import { InfoModal, ModalStates } from "./InfoModal";

export enum THREE_IDs {
  leistungen = "Leistungen",
  WEG = "WEG-Verwaltung",
  MIET = "Miethausverwaltung",
  SONDER = "Sondereigentumsverwaltung",
}
export const ThreeColumnItem = () => {
  const [modal, setModal] = useState<ModalStates>(undefined);
  function set(state: ModalStates) {
    return () => setModal(state);
  }

  return (
    <>
      {modal !== undefined && (
        <InfoModal
          isOpen={true}
          onClose={() => setModal(undefined)}
          modalKey={modal}
        />
      )}
      <Wrapper id={THREE_IDs.leistungen}>
        <div className="container">
          <Item
            id={THREE_IDs.WEG}
            onOpen={set("WEG")}
            title={
              <>
                WEG-
                <wbr />
                Verwaltung
              </>
            }
            desc="Wir bieten professionelle WEG-Verwaltung für eine reibungslose und effiziente Verwaltung Ihrer Eigentümergemeinschaft."
          />
          <Item
            id={THREE_IDs.MIET}
            onOpen={set("MIET")}
            title={
              <>
                Miethaus
                <wbr />
                verwaltung
              </>
            }
            desc="Unser Miethausverwaltungsservice sorgt für eine sorgenfreie und optimale Betreuung Ihrer Mietobjekte."
          />
          <Item
            id={THREE_IDs.SONDER}
            onOpen={set("SONDER")}
            title={
              <>
                Sondereigentums
                <wbr />
                verwaltung
              </>
            }
            desc="Unsere Sondereigentumsverwaltung bietet individuelle und maßgeschneiderte Lösungen für die Verwaltung Ihres Sondereigentums."
          />
        </div>
      </Wrapper>
    </>
  );
};

const Item = (props: {
  id: string;
  title: ReactNode;
  desc: string;
  onOpen(): void;
}) => {
  return (
    <div className="box" id={props.id}>
      <span></span>
      <div className="content">
        <Text
          as={"h2"}
          fontFamily="body"
          fontWeight={700}
          color="black"
          // wordBreak="break-all"
        >
          {props.title}
        </Text>
        <Text fontFamily="body" color="black">
          {props.desc}
        </Text>
        <Button
          p="1rem 2rem"
          bg="rgba(0,0,0,0.1)"
          _hover={{ bg: "rgba(0,0,0,0.2)" }}
          onClick={props.onOpen}
          fontFamily="body"
          color="black"
        >
          Mehr info
        </Button>
      </div>
    </div>
  );
};

const Wrapper = styled.div`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: consolas;
  }

  body {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    background: white;
  }

  .container {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    padding: 40px 0;
  }

  .container .box {
    position: relative;
    width: 320px;
    height: 400px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 40px 30px;
    transition: 0.5s;
  }

  .container .box::before {
    content: " ";
    position: absolute;
    top: 0;
    left: 50px;
    width: 50%;
    height: 100%;
    text-decoration: none;
    background: #fff;
    border-radius: 8px;
    transform: skewX(15deg);
    transition: 0.5s;
  }

  .container .box::after {
    content: "";
    position: absolute;
    top: 0;
    left: 50;
    width: 50%;
    height: 100%;
    background: #fff;
    border-radius: 8px;
    transform: skewX(15deg);
    transition: 0.5s;
    filter: blur(30px);
  }

  .container .box:hover:before,
  .container .box:hover:after {
    transform: skewX(0deg);
    left: 20px;
    width: calc(100% - 90px);
  }

  .container .box:nth-child(1):before,
  .container .box:nth-child(1):after {
    background: linear-gradient(315deg, #d8b384, #ecdcbc);
  }

  .container .box:nth-child(2):before,
  .container .box:nth-child(2):after {
    background: linear-gradient(315deg, #346c54, #d8b384);
  }

  .container .box:nth-child(3):before,
  .container .box:nth-child(3):after {
    background: linear-gradient(315deg, #ecdcbc, #346c54);
  }

  .container .box span {
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 5;
    pointer-events: none;
  }

  .container .box span::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 0;
    height: 0;
    border-radius: 8px;
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(10px);
    opacity: 0;
    transition: 0.1s;
    animation: animate 2s ease-in-out infinite;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.08);
  }

  .container .box:hover span::before {
    top: -50px;
    left: 50px;
    width: 100px;
    height: 100px;
    opacity: 1;
  }

  .container .box span::after {
    content: "";
    position: absolute;
    bottom: 0;
    right: 0;
    width: 100%;
    height: 100%;
    border-radius: 8px;
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(10px);
    opacity: 0;
    transition: 0.5s;
    animation: animate 2s ease-in-out infinite;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.08);
    animation-delay: -1s;
  }

  .container .box:hover span:after {
    bottom: -50px;
    right: 50px;
    width: 100px;
    height: 100px;
    opacity: 1;
  }

  @keyframes animate {
    0%,
    100% {
      transform: translateY(10px);
    }

    50% {
      transform: translate(-10px);
    }
  }

  .container .box .content {
    position: relative;
    left: 0;
    padding: 20px 40px;
    background: rgba(255, 255, 255, 0.05);
    backdrop-filter: blur(10px);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
    border-radius: 8px;
    z-index: 1;
    transform: 0.5s;
    color: #fff;
  }

  .container .box:hover .content {
    left: -25px;
    padding: 60px 40px;
  }

  .container .box .content h2 {
    font-size: 2em;
    // color: #fff;
    margin-bottom: 10px;
  }

  .container .box .content p {
    font-size: 1.1em;
    margin-bottom: 10px;
    line-height: 1.4em;
  }

  .container .box .content a {
    display: inline-block;
    font-size: 1.1em;
    color: #111;
    background: #fff;
    padding: 10px;
    border-radius: 4px;
    text-decoration: none;
    font-weight: 700;
    margin-top: 5px;
  }

  .container .box .content a:hover {
    background: #ffcf4d;
    border: 1px solid rgba(255, 0, 88, 0.4);
    box-shadow: 0 1px 15px rgba(1, 1, 1, 0.2);
  }
`;
