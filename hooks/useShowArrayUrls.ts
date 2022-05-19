import { useQuery } from "react-query";
import axios from "axios";

import { URL_API } from "../constants/urls";

export const useArrayUrls = (query: string, id: string, type: string) => {
  const result = useQuery(`${query}-${id}`, async () => {
    const { data } = await axios.get(`${URL_API}${type}/${id}`);
    return data;
  });

  return { ...result };
};
