import { Alert, AlertIcon } from "@chakra-ui/react";

export function UsersError({ error }: { error: string }) {
  return (
    <Alert status="error">
      <AlertIcon />
      {error}
    </Alert>
  );
}
