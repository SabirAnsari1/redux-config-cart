import React from "react";
import { Flex, Heading } from "@chakra-ui/react";

export const FooterPage = () => {
  return (
    <Flex
      mt={"1rem"}
      h={"5rem"}
      bg={"black"}
      alignItems={"center"}
      justifyContent={"center"}
    >
      <Heading fontSize={"1rem"}>
        Designed and build by Sabir Ansari, 2023 All rights reserved.
      </Heading>
    </Flex>
  );
};
