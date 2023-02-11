import { useEffect, useState } from "react";
import axios from "axios";
import { IData } from "../interfaces/Idata";
import { IFetch } from "../interfaces/IFetch";

const useFetch = ({ url }: IFetch) => {
  const [error, setError] = useState(null);
  const [fetchedData, setFetchedData] = useState<IData[]>([]);

  useEffect(() => {
    axios
      .get(url)
      .then(({ data }) => setFetchedData(data.data))
      .catch((error) => setError(error));
  }, [url]);

  if (error) {
    return { error };
  }
  return { fetchedData, error };
};

export default useFetch;
