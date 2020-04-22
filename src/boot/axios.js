import Vue from 'vue'
import axios from 'axios'

const axiosDb = axios.create({
    baseURL: 'https://api.example.com'
})

Vue.prototype.$axios = axiosDb

export { axiosDb }
