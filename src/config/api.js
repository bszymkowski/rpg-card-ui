//todo bsz
const apiAddress = "http://arcane-sea-76966.herokuapp.com";
    // "http://localhost:8080";

export const api = {
    login: {
        google: apiAddress + "/login/google"
    },
    logout: apiAddress + "/logout",
    user: apiAddress + "/profile"
};

