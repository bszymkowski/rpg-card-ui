//todo bsz
const apiAddress = "";
    // "http://localhost:8080";

export const api = {
    login: {
        google: apiAddress + "/login/google"
    },
    logout: apiAddress + "/logout",
    user: apiAddress + "/profile"
};

