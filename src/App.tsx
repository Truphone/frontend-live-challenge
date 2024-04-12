import { Button, ChakraProvider } from "@chakra-ui/react";
import { Layout } from "./layout/layout.tsx";
import { UsersList } from "./components/users-list/users-list.tsx";
import { Console } from "./components/console/console.tsx";
import { useState } from "react";

function App() {
  const [showUsers, setShowUsers] = useState(false);

  return (
    <ChakraProvider>
      <Layout>
        {!showUsers && (
          <Button onClick={() => setShowUsers(true)} mt={4} colorScheme="blue">
            Load Users
          </Button>
        )}
        {showUsers && <UsersList />}
        <Console />
      </Layout>
    </ChakraProvider>
  );
}

export default App;
