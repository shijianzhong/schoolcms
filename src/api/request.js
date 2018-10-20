import Vue from 'vue';
import axios from 'axios';
// import conf from '../config';

axios.defaults.withCredentials = true;

// const host = conf.publicPath;
// const host = 'http://localhost:3001/'
const host = 'http://imeasy.cn/'

export default {
    post: (url, data, error, option) =>
        axios.post(host + url, data, option)
        .then(response => response ? response.data : "")
        .catch((err) => {
            if (error) {
                error(err);
            } else {
                console.error(err);
            }
        }),
    get: (url, error, option) =>

        axios.get(host + url, option)
        .then(response => response ? response.data : "")
        .catch((err) => {
            if (error) {
                error(err);
            } else {
                console.log(err);
            }
        }),
    delete: (url, error, option) =>
        axios.delete(host + url, option)
        .then(response => response.data)
        .catch((err) => {
            if (error) {
                error(err);
            } else {
                console.log(err);
            }
        }),
    // url(path) { return host + path; },
    url: (path) => { return host + path; }
};