let BASE_URL;

BASE_URL = "https://gh-trending-api.herokuapp.com";

const API_BASE_URL = `https://cors-anywhere.herokuapp.com/${BASE_URL}`;

const AppUrl = {
    REPO_LISTING_URL: API_BASE_URL + "/repositories",
    DEVELOPER_LISTING_URL: API_BASE_URL + "/developers",
};

export default AppUrl;