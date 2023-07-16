import axios from "axios";

export default axios.create({
        baseURL: 'https://api.rawg.io/api',
        params : { key :'c7032fec662d40b583bf54c827c2dbb1',},
    });

