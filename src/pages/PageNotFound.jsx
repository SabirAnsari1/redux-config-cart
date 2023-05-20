import React from "react";
import { Box, Image } from "@chakra-ui/react";
import error from "../assets/error.jpg";

export const PageNotFound = () => {
  return (
    <Box>
      <Image
        src={error}
        position={"fixed"}
        w={"100%"}
        h={"100%"}
        zIndex={"1"}
      />
    </Box>
  );
};
