import React, { useEffect, useState } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { getProducts } from "../redux/products/action";
import { ProductsCard } from "../components/ProductsCard";
import { Box, SimpleGrid, HStack, Button, Heading } from "@chakra-ui/react";
import { addToCart } from "../redux/cart/action";
import { FooterPage } from "./FooterPage";

export const HomePage = () => {
  const dispatch = useDispatch();
  const { isLoading, isError, errMessage, products } = useSelector(
    (store) => ({
      isLoading: store.productsReducer.isLoading,
      isError: store.productsReducer.isError,
      errMessage: store.productsReducer.errMessage,
      products: store.productsReducer.products,
    }),
    shallowEqual
  );
  const [page, setPage] = useState(1);

  useEffect(() => {
    const paramobj = {
      params: {
        page,
        limit: 8,
      },
    };
    dispatch(getProducts(paramobj));
  }, [page]);

  const handleCart = (el) => {
    dispatch(addToCart(el));
  };

  return (
    <Box pt={"8rem"} textAlign={"center"}>
      {isLoading ? (
        <Heading>Loading...</Heading>
      ) : isError ? (
        <Heading>{errMessage}</Heading>
      ) : (
        <Box p={"0 3rem 0 3rem"}>
          {" "}
          <SimpleGrid
            columns={{
              base: "1",
              sm: "2",
              md: "3",
              lg: "4",
              xl: "4",
              "2xl": "4",
            }}
            spacing={10}
          >
            {products?.map((el) => (
              <ProductsCard
                key={el.id}
                {...el}
                btn1={"Buy now"}
                btn2={"Add to cart"}
                handleCustom={handleCart}
              />
            ))}
          </SimpleGrid>
          <HStack spacing={1} mt={"1rem"} justifyContent={"center"}>
            <Button
              onClick={() => setPage((prev) => prev - 1)}
              isDisabled={page === 1}
            >
              previous
            </Button>
            <Button isDisabled={true}>{page}</Button>
            <Button onClick={() => setPage((prev) => prev + 1)}>Next</Button>
          </HStack>
        </Box>
      )}
      <FooterPage />
    </Box>
  );
};
