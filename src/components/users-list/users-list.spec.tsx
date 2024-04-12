import { screen, render, waitFor, act } from "@testing-library/react";
import { UsersList } from "./users-list.tsx";
import { get } from "../../../__mocks__/axios";
import { faker } from "@faker-js/faker";

/**
 * Complete skipped tests
 * */
describe("UsersList", () => {
  function createUsers(length = 5) {
    return Array.from({ length }).map(() => ({
      id: faker.number.int(),
      first_name: faker.person.firstName(),
      last_name: faker.person.lastName(),
      avatar: "https://i.pravatar.cc/300",
    }));
  }

  it("should render loading", async () => {
    get.mockImplementationOnce(async () => {
      return new Promise((resolve) => setTimeout(resolve, 10_000));
    });

    await act(async () => {
      render(<UsersList />);
    });

    const spinner = screen.queryByText("Loading...");
    expect(spinner).toBeInTheDocument();
  });

  it("should render empty list", async () => {
    get.mockResolvedValueOnce({ data: { data: [], total_pages: 0 } });

    await act(async () => {
      render(<UsersList />);
    });

    await waitFor(() => {
      const noUsers = screen.queryByText("No users found");
      expect(noUsers).toBeInTheDocument();
    });
  });

  it.skip("should render users list", async () => {
    const list = createUsers();
    get.mockResolvedValueOnce({ data: { data: list, total_pages: 1 } });

    await act(async () => {
      render(<UsersList />);
    });

    await waitFor(() => {
      const users = screen.queryAllByTestId("user-row");
      expect(users).toHaveLength(list.length);
    });
  });

  it.skip("should navigate to next page", async () => {});

  it.skip("should delete user successfully", async () => {});
});
