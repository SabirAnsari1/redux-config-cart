import React from "react";
import {
  Card,
  CardBody,
  Image,
  Heading,
  Text,
  Stack,
  Button,
  Flex,
} from "@chakra-ui/react";

export const ProductsCard = ({
  id,
  title,
  price,
  description,
  category,
  image,
  rating,
  btn1,
  btn2,
  handleCustom,
}) => {
  const el = { id, title, price, description, category, image, rating };

  return (
    <Card
      maxW="sm"
      box-shadow={"rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px"}
      textAlign={"center"}
    >
      <CardBody>
        <Image src={image} alt={title} borderRadius="lg" w={"100%"} h={"50%"} />
        <Stack mt="5" spacing="3">
          <Heading size="md">{title}</Heading>
          <Text isTruncated>{description}</Text>
          <Text>{category}</Text>
          <Text color="orange" fontSize="2xl">
            ₹{price}
          </Text>
        </Stack>
        <Flex justifyContent={"space-between"} mt={"1rem"}>
          <Button variant="solid" colorScheme="orange" color={"black"}>
            {btn1}
          </Button>
          <Button
            variant="solid"
            colorScheme="orange"
            color={"black"}
            onClick={() => handleCustom(el)}
          >
            {btn2}
          </Button>
        </Flex>
      </CardBody>
    </Card>
  );
};
