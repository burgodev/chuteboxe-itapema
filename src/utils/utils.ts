import { Name, Principal } from "../types";

type GetActorName = {
  nameId: Principal["nameId"];
  names: Name[];
};

export const getActorName = ({ nameId, names }: GetActorName) => {
  const actor = names.find((name) => name.id === nameId);
  return actor ? actor.name : "Unknown Actor";
};

export const getInitials = (name: string) => {
  const initials = name
    .split(" ")
    .map((n) => n[0])
    .join("");
  return initials.toUpperCase();
};
