import axios from "axios";

class ApiService {

    axios(url, {method, payload, config = {}} = {}){
        const rootPath = "http://207.148.69.27:8899/api/v1";
        const path = rootPath + url;

        return axios({
            ...config,
            url: path,
            method: method || "GET",
            data: payload
        })
    }
}

export default new ApiService();

