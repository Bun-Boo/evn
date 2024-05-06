import axios from 'axios';

const path = {
  base: 'https://studynodejs.vercel.app/endpoint-evn-app',
};

function getEndpoint(): Promise<string> {
    return axios.get(path.base)
        .then((response) => {
            const { data } = response;
            return data;
        })
        .catch((error) => {
            console.log('error', error);
            return 'uqovc8e1557qz';
        });
}

export default {
    getEndpoint,
};
