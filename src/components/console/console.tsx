import {
  Text,
  Badge,
  Box,
  Flex,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
} from "@chakra-ui/react";
import { useEffect, useRef, useState } from "react";

export function Console() {
  const [requests, setRequests] = useState<string[]>([]);
  const intervalRef = useRef<NodeJS.Timeout>();

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setRequests(
        JSON.parse(localStorage.getItem("networkCalls") || "[]").reverse(),
      );
    }, 1000);

    return () => {
      clearInterval(intervalRef.current);
      localStorage.setItem("networkCalls", "[]");
    };
  }, []);

  const requestsCount = requests.length;

  return (
    <Box p={4}>
      <Tabs>
        <TabList>
          <Flex alignItems="center" columnGap={2}>
            <span>Network</span> <Badge size="xs">({requestsCount})</Badge>
          </Flex>
        </TabList>
        <TabPanels>
          <TabPanel maxH={200} overflowY="scroll">
            {requests.map((request, index) => (
              <Flex
                key={index}
                justifyContent="space-between"
                alignItems="center"
                mb={2}
              >
                <Text>{request}</Text>
                <Badge colorScheme="blue">{requestsCount - index}</Badge>
              </Flex>
            ))}
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  );
}
