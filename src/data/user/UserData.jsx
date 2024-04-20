import { fetchUsers } from "./UserService"

export const getAllUsers = async () => {
    const response = await fetchUsers();
    return response.data.data
}