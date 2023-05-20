import React, { useEffect, useRef, useState } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { userLogin } from "../redux/auth/action";
import { FaRegEyeSlash, FaRegEye } from "react-icons/fa";
import {
  VStack,
  Input,
  Button,
  InputGroup,
  InputRightElement,
  IconButton,
  Box,
  Heading,
} from "@chakra-ui/react";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [show, setShow] = useState(false);
  const dispatch = useDispatch();
  const { isLoading, isError, isAuth, errMessage } = useSelector(
    (store) => ({
      isLoading: store.authReducer.isLoading,
      isError: store.authReducer.isError,
      isAuth: store.authReducer.isAuth,
      errMessage: store.authReducer.errMessage,
    }),
    shallowEqual
  );
  const input = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    const user = {
      email,
      password,
    };

    dispatch(userLogin(user));
    setEmail("");
    setPassword("");
  };

  useEffect(() => {
    input.current.focus();
  }, []);

  return (
    <VStack spacing={"1rem"} pt={"20rem"}>
      {isLoading ? (
        <Heading>Loading...</Heading>
      ) : isError ? (
        <Heading>{errMessage}</Heading>
      ) : isAuth ? (
        <Heading>Login Successfull!!!</Heading>
      ) : (
        ""
      )}
      <Box
        w={{
          base: "90%",
          sm: "70%",
          md: "50%",
          lg: "30%",
          xl: "30%",
          "2xl": "10%",
        }}
      >
        <form onSubmit={handleSubmit}>
          {" "}
          <Input
            type="text"
            placeholder="Enter email"
            ref={input}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            variant={"filled"}
            spacing={"1rem"}
            mb={"1rem"}
          />{" "}
          <InputGroup size="md" mb={"1rem"}>
            <Input
              pr="4.5rem"
              type={show ? "text" : "password"}
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              variant={"filled"}
            />
            <InputRightElement>
              <Box onClick={() => setShow((prev) => !prev)}>
                {show ? (
                  <IconButton icon={<FaRegEyeSlash />} />
                ) : (
                  <IconButton icon={<FaRegEye />} />
                )}
              </Box>
            </InputRightElement>
          </InputGroup>
          <Button type="submit" w={"100%"} colorScheme="orange">
            Login
          </Button>
        </form>
      </Box>
    </VStack>
  );
};
