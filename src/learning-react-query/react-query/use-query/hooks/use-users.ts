import { useQuery } from "@tanstack/react-query";
import axios from "axios";

type User = {
  id: number;
  name: string;
  username: string;
  email: string;
};

const useUsers = () => {
  const fetchUsers = async () =>
    axios
      .get<User[]>("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.data);

  return useQuery({
    queryKey: ["users"],
    queryFn: fetchUsers,
    staleTime: 60 * 1000, // 60 seconds
  });
};

export default useUsers;
