import { Button, Flex, Text } from "@chakra-ui/react";

interface Props {
  currentPage: number;
  totalPages: number;
  onNextClick(): void;
  onPrevClick(): void;
}

export function Pagination({
  currentPage,
  totalPages,
  onPrevClick,
  onNextClick,
}: Props) {
  return (
    <Flex mt={8} justifyContent="space-between">
      <Button onClick={onPrevClick} disabled={currentPage === 1}>
        Previous
      </Button>
      <Text>{`Page ${currentPage} of ${totalPages}`}</Text>
      <Button onClick={onNextClick} disabled={currentPage === totalPages}>
        Next
      </Button>
    </Flex>
  );
}
