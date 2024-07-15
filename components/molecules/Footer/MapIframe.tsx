import { Box } from "@chakra-ui/react";

export const MapIframe = () => (
  <Box minH={{ base: "250px", sm: 0 }}>
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9742.531389899006!2d4.8896488439679!3d52.377077109013584!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c609b7648f168f%3A0x28c2494c1bc8baa1!2sCentral%20Station!5e0!3m2!1sen!2snl!4v1721034759606!5m2!1sen!2snl"
      width="100%"
      height="200"
      allowFullScreen
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      style={{ borderRadius: "1rem" }}
    ></iframe>
  </Box>
);
