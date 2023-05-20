import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Box, SimpleGrid } from "@chakra-ui/react";
import { ProductsCard } from "../components/ProductsCard";
import { deleteCart } from "../redux/cart/action";

export const CartPage = () => {
  const cart = useSelector((store) => store.cartReducer.cart);
  const dispatch = useDispatch();

  const handleDelete = (el) => {
    dispatch(deleteCart(el.id));
  };

  return (
    <Box p={"2rem"} pt={"8rem"}>
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
        {cart?.map((el) => (
          <ProductsCard
            key={el.id}
            {...el}
            btn1={"Buy now"}
            btn2={"Delete"}
            handleCustom={handleDelete}
          />
        ))}
      </SimpleGrid>
    </Box>
  );
};
