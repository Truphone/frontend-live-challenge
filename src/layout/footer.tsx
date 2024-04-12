import { Box, Flex } from "@chakra-ui/react";

export function Footer() {
  return (
    <Flex
      bg="blue.500"
      color="white"
      p={4}
      justifyContent="center"
      alignItems="center"
    >
      <Box textAlign="center">© 2024 Your Company. All rights reserved.</Box>
    </Flex>
  );
}
