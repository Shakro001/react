
import axios from 'axios'

const API = `https://restcountries.com/v3.1/all`

const service = {
    get: (name) => axios.get(API + (name ? `/name/${name}` : '')).then(({ data }) => data)
}

export default service;