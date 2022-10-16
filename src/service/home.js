import axios from '../utils/axios'

export function getHome() {
  console.log('here I am')
  return axios.get('/index-infos');
}
