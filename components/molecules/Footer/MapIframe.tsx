import { Box } from "@chakra-ui/react";

export const MapIframe = ({ height = "200" }: { height?: string }) => (
  <Box minH={{ base: "250px", sm: 0 }} maxW="1000px" m="0 auto">
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2660.9121439173846!2d11.365180900000002!3d48.169774499999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x479e78ba72c79797%3A0x95c20007ad5ddc5a!2sGewerbegebiet%20Nord%2C%20Boschstra%C3%9Fe%2012%2C%2082178%20Puchheim%2C%20Germany!5e0!3m2!1sen!2snl!4v1723035474644!5m2!1sen!2snl"
      width="100%"
      height={height}
      allowFullScreen
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      style={{ borderRadius: "1rem" }}
    ></iframe>
  </Box>
);
