import axios from 'axios';
import { URL_API } from '../constants/urls';

export const getFetchingDataByPage = async (pageParam: number, type: string) => {
  try {
    const { data } = await axios.get(`${URL_API}${type}?page=${pageParam}`)
    return data
  } catch (err) {
    throw new Error(`${err}`)
  }
};
