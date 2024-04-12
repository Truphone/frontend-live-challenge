import {
  Box,
  Button,
  Flex,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";

export function Header() {
  return (
    <Flex
      bg="blue.500"
      p={4}
      justifyContent="space-between"
      alignItems="center"
    >
      <Box color="white">Logo</Box>
      <Menu>
        <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
          Menu
        </MenuButton>
        <MenuList>
          <MenuItem>Home</MenuItem>
          <MenuItem>About</MenuItem>
          <MenuItem>Contact</MenuItem>
        </MenuList>
      </Menu>
    </Flex>
  );
}
