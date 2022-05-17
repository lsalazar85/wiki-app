import axios from 'axios';
import { URL_API } from '../constants/urls';

export const getFetchingDataByName = async (
  pageParam: number,
  name: string
) => {
  try {
    const { data } = await axios.get(
      `${URL_API}character?page=${pageParam}&name=${name}`
    );
    return data;
  } catch (err) {
    throw new Error(`${err}`);
  }
};
