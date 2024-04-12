import { Box, Flex, IconButton, Input, Spinner } from "@chakra-ui/react";
import { useState } from "react";
import { UserRow } from "./user-row.tsx";
import { Pagination } from "./pagination.tsx";
import { useUsersList } from "./hooks/use-users-list.ts";
import { UsersError } from "./users-error.tsx";
import { NoUsers } from "./no-users.tsx";

export function UsersList() {
  const [page, setPage] = useState(1);
  const { users, loading, error, totalPages } = useUsersList();
  const showError = !loading && error;
  const ready = !showError && !loading;
  const noUsers = ready && users.length === 0;

  function handleDeleteUser(id: number) {
    const answer = confirm(
      `Are you sure you want to delete this user id: ${id}?`,
    );

    if (answer) {
      alert("User deletion is not implemented yet.");
    }
  }

  function gotoNextPage() {
    setPage(page < Number(totalPages || 0) ? page + 1 : page);
  }

  function gotoPrevPage() {
    setPage(page > 1 ? page - 1 : page);
  }

  return (
    <Flex direction="column" alignItems="center" justifyContent="center" p={4}>
      <Box>
        {loading && <Spinner size="xl" />}
        {showError && <UsersError error={error} />}
        {noUsers && <NoUsers />}
        {ready && (
          <>
            <Flex alignItems="center" mb={4}>
              <Input placeholder="Search users" me={2} />
            </Flex>
            {users.map((user) => (
              <UserRow
                key={user.id}
                user={user}
                onDeleteUser={handleDeleteUser}
              />
            ))}
            {totalPages && (
              <Pagination
                currentPage={page}
                totalPages={totalPages}
                onNextClick={gotoNextPage}
                onPrevClick={gotoPrevPage}
              />
            )}
          </>
        )}
      </Box>
    </Flex>
  );
}
