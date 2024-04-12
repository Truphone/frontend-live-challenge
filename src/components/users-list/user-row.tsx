import { Avatar, Box, Flex, IconButton, Text } from "@chakra-ui/react";
import { DeleteIcon } from "@chakra-ui/icons";
import { ApiUser } from "../../api/api.ts";

interface Props {
  user: ApiUser;
  onDeleteUser?(id: number): void;
}

export function UserRow({ user, onDeleteUser }: Props) {
  return (
    <Flex
      alignItems="center"
      justifyContent="space-between"
      mb={4}
      data-testid={"user-row"}
    >
      <Flex alignItems="center">
        <Avatar src={user.avatar} name={user.first_name} me={2} />
        <Box>
          <Text fontWeight="bold">
            {user.first_name} {user.last_name}
          </Text>
          <Text fontSize="sm">{user.email}</Text>
        </Box>
      </Flex>
      <IconButton
        ml={4}
        colorScheme="red"
        size="sm"
        aria-label="Delete user"
        icon={<DeleteIcon />}
        onClick={() => onDeleteUser?.(user.id)}
      />
    </Flex>
  );
}
