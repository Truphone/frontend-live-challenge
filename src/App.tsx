import { ChakraProvider } from "@chakra-ui/react";
import { Layout } from "./layout/layout.tsx";
import { UsersList } from "./components/users-list/users-list.tsx";

function App() {
  return (
    <ChakraProvider>
      <Layout>
        <UsersList />
      </Layout>
    </ChakraProvider>
  );
}

export default App;
