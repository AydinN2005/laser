import axios from 'axios'
import {baseUrl} from "~/services/baseUrl";

let token = '';
if (typeof window !== 'undefined') {
  if (localStorage.getItem('user')) {
    token = localStorage.getItem('user')
  }
}
export const instance = axios.create({
  baseURL: baseUrl, headers: {
    Authorization: `Bearer ${token ? token : null}`
  }
})
