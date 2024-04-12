import { Container, Flex } from "@chakra-ui/react";
import { Header } from "./header.tsx";
import { Footer } from "./footer.tsx";
import { PropsWithChildren } from "react";

export function Layout({ children }: PropsWithChildren) {
  return (
    <Flex direction="column" minHeight="100vh">
      <Header />
      <Container flex="1" p={4}>
        {children}
      </Container>
      <Footer />
    </Flex>
  );
}
