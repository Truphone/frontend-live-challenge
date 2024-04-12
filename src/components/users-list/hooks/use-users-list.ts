import { useEffect, useState } from "react";
import { ApiUser, listUsers } from "../../../api/api.ts";

export function useUsersList() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [users, setUsers] = useState<ApiUser[]>([]);
  const [totalPages, setTotalPages] = useState<number | undefined>();

  useEffect(() => {
    listUsers()
      .then((response) => {
        setUsers(response.data.data);
        setTotalPages(response.data.total_pages);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  return { loading, error, totalPages, users };
}
