import instance from '@config/ConfigAxios';


export const fetchUsers = async () => {
    const response = await instance.get('users');
    return response;
}

export const deleteUser = async (userId) => {
    const response = await instance.delete('users/'+userId);
    return response;
}