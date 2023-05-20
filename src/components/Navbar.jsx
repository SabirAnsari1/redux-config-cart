import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Flex,
  Button,
  InputGroup,
  InputLeftElement,
  Input,
  IconButton,
  InputRightElement,
} from "@chakra-ui/react";
import { MdSearch, MdCancel } from "react-icons/md";
import { BsCart3 } from "react-icons/bs";
import { useSelector } from "react-redux";

export const Navbar = () => {
  const [search, setSearch] = useState("");
  const cart = useSelector((store) => store.cartReducer.cart);

  return (
    <Flex
      w={"100%"}
      h={"5rem"}
      p={"0 3rem 0 3rem"}
      justifyContent={"space-between"}
      alignItems={"center"}
      position={"fixed"}
      fontSize={"3xl"}
      background={"black"}
      zIndex={"1"}
    >
      <Link to={"/"}>Home</Link>
      <Link to={"/cart"}>
        <Flex alignItems={"center"}>
          <IconButton icon={<BsCart3 />} bg={"transparent"} />
          {cart.length}
        </Flex>
      </Link>
      <InputGroup w={"30%"}>
        <InputLeftElement>
          <IconButton
            icon={<MdSearch />}
            isLoading={search !== ""}
            value={search}
          />
        </InputLeftElement>
        <Input
          type="text"
          placeholder="Search..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          variant="filled"
          border={"none"}
          pl={"50px"}
        />
        <InputRightElement>
          <IconButton
            icon={<MdCancel />}
            onClick={() => setSearch((prev) => (prev = ""))}
            opacity={search ? "inherit" : "0"}
            cursor={search ? "pointer" : "default"}
            bg={"transparent"}
          />
        </InputRightElement>
      </InputGroup>
      <Link to={"/login"}>
        <Button colorScheme="orange">Login</Button>
      </Link>
    </Flex>
  );
};
