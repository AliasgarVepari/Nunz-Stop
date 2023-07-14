import axios from "axios";

const ApiService = (genre? : number) => {
    
    const params = genre ?
            {key :'c7032fec662d40b583bf54c827c2dbb1',genres : genre}
            :{ key :'c7032fec662d40b583bf54c827c2dbb1'};
    
    
    return axios.create({
        baseURL: 'https://api.rawg.io/api',
        params : params
    });
}
export default ApiService;