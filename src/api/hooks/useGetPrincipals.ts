import { useEffect, useState } from "react";

import { Principal } from "../../types";
import { MOCK_API_LOADING_TIME } from "../consts";
import { apiPrincipalsToPrincipals } from "../../mappers/apiMappers";
import axios from "../axios";

// **
// Ideally this query should be done using movieId as param and not fetching all principals and filtering it on the FE.
// I'll work with the idea that this is fetching data from API based on movieId, doing one fetch for each movie.
// Even doing this, ideally we should still cache already fetched getPrincipals(movieId) to avoid fetching the same data multiple times.
// For DEMO purposes I won't cache this, since it would require either installing a caching lib (like axios-cache-interceptor) or doing it by hand.
// ps: I also could made this request on root level and store it on context provider to avoid extra requests. But this is not how a real world app would work though... So I prefer to leave it on a component level using the idea of movieId as param.
// **
const useGetPrincipals = ({ movieId }: { movieId: string }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [principals, setPrincipals] = useState<Principal[]>([]);

  useEffect(() => {
    getPrincipals();
  }, []);

  const getPrincipals = async () => {
    setIsLoading(true);

    try {
      // Usually we would get principals based on movieId(tconst) so we don't have to query the whole list. Since its for demo purposes I'm doing that on FE.
      const { data } = await axios.get(`/principals`);
      const uniquePrincipals = removeDuplicates(
        apiPrincipalsToPrincipals(data).filter(
          (principal) => principal.movieId === movieId
        )
      ).slice(0, 5);

      setPrincipals(uniquePrincipals);
    } catch (err) {
      console.log("Error fetching principals", err);
    }

    // * setTimeout added for demo purposes */
    setTimeout(() => setIsLoading(false), MOCK_API_LOADING_TIME);
  };

  // API bug fix: For some reason API returns duplicate(same tconst and nconst) principals
  const removeDuplicates = (principals: Principal[]) => {
    const uniquePrincipalsMap = new Map<string, Principal>();

    principals.forEach((principal) => {
      const key = `${principal.movieId}-${principal.nameId}`;
      if (!uniquePrincipalsMap.has(key)) {
        uniquePrincipalsMap.set(key, principal);
      }
    });

    return Array.from(uniquePrincipalsMap.values());
  };

  return { principals, isLoading };
};

export default useGetPrincipals;
