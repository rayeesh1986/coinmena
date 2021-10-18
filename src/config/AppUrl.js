let BASE_URL;

BASE_URL = "https://cors-anywhere.herokuapp.com/https://gh-trending-api.herokuapp.com";

const API_BASE_URL = `${BASE_URL}`;

const AppUrl = {
    REPO_LISTING_URL: API_BASE_URL + "/repositories",
    DEVELOPER_LISTING_URL: API_BASE_URL + "/developers",
};

export default AppUrl;