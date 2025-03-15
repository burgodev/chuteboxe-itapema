import React, { useState, memo } from "react";
import { Movie as MovieType } from "../../types";
import { PrincipalsDetails } from "../PrincipalsDetails";
import { Modal } from "../Modal";
import { MovieDetails } from "../MovieDetails";
import { MovieTabs } from "../MovieTabs";
import { Tab } from "../MovieTabs/types";

interface MovieModalProps {
  isOpen: boolean;
  onClose: () => void;
  movie: MovieType | null;
}

const MovieModal: React.FC<MovieModalProps> = ({ isOpen, onClose, movie }) => {
  const [activeTab, setActiveTab] = useState<Tab>("details");

  if (!movie) return null;

  return (
    <Modal isOpen={isOpen} onClose={onClose} title={movie.title}>
      <img
        className="object-cover w-[40vw] h-[50vh] mb-6 object-top"
        src={movie.image}
        alt={`Poster of ${movie.title}`}
      />

      <MovieTabs activeTab={activeTab} onTabChange={setActiveTab} />

      {activeTab === "details" && <MovieDetails movie={movie} />}
      {activeTab === "principals" && (
        <PrincipalsDetails movieTitle={movie.title} movieId={movie.id} />
      )}
    </Modal>
  );
};

export default memo(MovieModal);
