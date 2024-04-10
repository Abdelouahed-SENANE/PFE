import instance from "../config/ConfigAxios";

export const handleLogout = async () => {
    try {
        const response = await instance.post("/logout");
        if (response.status === 200) {
            sessionStorage.removeItem("user");
            sessionStorage.removeItem("token");
            return window.location.href = "/";
        }
    } catch (error) {
        console.log(error);
    }
};