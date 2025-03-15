import { useEffect, useRef, useState } from "react";
import axios from "../axios";
import { MOCK_API_LOADING_TIME } from "../consts";
import { Name } from "../../types";
import { apiNamesToNames } from "../../mappers/apiMappers";

const useGetNames = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [names, setNames] = useState<Name[]>([]);
  const hasFetchedNames = useRef(false);

  useEffect(() => {
    if (!hasFetchedNames.current) {
      getNames();
      hasFetchedNames.current = true;
    }
  }, []);

  const getNames = async () => {
    setIsLoading(true);

    try {
      const { data } = await axios.get("/names");
      setNames(apiNamesToNames(data));
    } catch (err) {
      console.log("Error fetching names", err);
    }

    // * setTimeout added for demo purposes */
    setTimeout(() => setIsLoading(false), MOCK_API_LOADING_TIME);
  };

  return { names, isLoading };
};

export default useGetNames;
