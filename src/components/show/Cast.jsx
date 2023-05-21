import React from "react";
import IMG_PLACEHOLDER from "../../images/not-found.png";
import { CastList } from "../../Pages/Cast.styled";
const Cast = ({ cast }) => {
  return (
    <CastList>
      {cast.map(({ person, character, voice }, key) => (
        <div className="cast-item" key={key}>
          <div className="pic-wrapper">
            <img
              src={person.image ? person.image.medium : IMG_PLACEHOLDER}
              alt="cast-person"
            />
          </div>
          <div className="actor">
            <span>
              <span className="bold">
                {person.name} | {character.name} {voice ? "| Voice" : ""}{" "}
              </span>
            </span>
          </div>
        </div>
      ))}
    </CastList>
  );
};

export default Cast;
