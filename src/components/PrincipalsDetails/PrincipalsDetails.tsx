import React, { memo } from "react";
import { getActorName, getInitials } from "../../utils/utils";
import { useGetPrincipals } from "../../api/hooks";
import { Movie } from "../../types";
import { useApiContext } from "../../context/ApiContext";

type PrincipalsDetailsProps = {
  movieTitle: Movie["title"];
  movieId: Movie["id"];
};

const PrincipalsDetails: React.FC<PrincipalsDetailsProps> = ({
  movieTitle,
  movieId,
}) => {
  const { principals, isLoading } = useGetPrincipals({ movieId });
  const {
    names: { values: names, isLoading: isLoadingNames },
  } = useApiContext();

  return (
    <div className="w-full p-6 rounded-lg shadow-lg bg-darkGrey text-lightGrey">
      <h2 className="mb-6 text-3xl font-semibold">
        <span className="font-bold text-white">{movieTitle}</span> Cast
      </h2>

      {isLoadingNames || isLoading ? (
        <ul className="pl-6 list-none">
          {Array.from({ length: 5 }).map((_, index) => (
            <li key={index} className="flex items-center mb-2">
              <div className="w-12 h-12 mr-3 bg-gray-700 rounded-full animate-pulse"></div>
              <div className="w-3/4 h-4 bg-gray-700 rounded animate-pulse"></div>
            </li>
          ))}
        </ul>
      ) : (
        <ul className="list-none">
          {principals.map((principal) => (
            <li key={principal.id} className="flex items-center mb-4">
              <div className="flex items-center justify-center w-12 h-12 mr-3 text-white rounded-full bg-dark">
                {getInitials(getActorName({ nameId: principal.nameId, names }))}
              </div>
              <div>
                <strong className="text-lg">
                  {getActorName({ nameId: principal.nameId, names })}
                </strong>{" "}
                - {principal.category}
                {principal.characters && (
                  <span> as {principal.characters.join(", ")}</span>
                )}
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default memo(PrincipalsDetails);
