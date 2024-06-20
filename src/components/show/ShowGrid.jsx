// import React, { useCallback } from "react";
// import ShowCard from "./ShowCard";
// import IMAGE_NOT_FOUND from "../../images/not-found.png";
// import { FlexGrid } from "../Styled";
// import { useShows } from "../../misc/Custom-hooks";
// const ShowGrid = ({ data }) => {
//   const [starredShows, dispatchStarred] = useShows();
//   return (
//     <FlexGrid>
//       {data.map(({ show }) => {
//         const isStarred = starredShows.includes(show.id);
//         // eslint-disable-next-line react-hooks/rules-of-hooks
//         const onStarClick = useCallback(() => {
//           if (isStarred) {
//             dispatchStarred({ type: "REMOVE", showId: show.id });
//           } else {
//             dispatchStarred({ type: "ADD", showId: show.id });
//           }
//         }, [isStarred, show.id]);
//         return (
//           <ShowCard
//             key={show.id}
//             id={show.id}
//             name={show.name}
//             summary={show.summary}
//             image={show.image ? show.image.medium : IMAGE_NOT_FOUND}
//             onStarClick={onStarClick}
//             isStarred={isStarred}
//           />
//         );
//       })}
//     </FlexGrid>
//   );
// };

// export default ShowGrid;
import React, { useCallback } from "react";
import ShowCard from "./ShowCard";
import IMAGE_NOT_FOUND from "../../images/not-found.png";
import { FlexGrid } from "../Styled";
import { useShows } from "../../misc/Custom-hooks";

const ShowGrid = ({ data }) => {
  const [starredShows, dispatchStarred] = useShows();

  // Define the onStarClick callback outside of the map function
  const onStarClick = useCallback(
    (showId) => {
      if (starredShows.includes(showId)) {
        dispatchStarred({ type: "REMOVE", showId });
      } else {
        dispatchStarred({ type: "ADD", showId });
      }
    },
    [starredShows, dispatchStarred]
  );

  return (
    <FlexGrid>
      {data.map(({ show }) => {
        const isStarred = starredShows.includes(show.id);

        return (
          <ShowCard
            key={show.id}
            id={show.id}
            name={show.name}
            summary={show.summary}
            image={show.image ? show.image.medium : IMAGE_NOT_FOUND}
            onStarClick={() => onStarClick(show.id)}
            isStarred={isStarred}
          />
        );
      })}
    </FlexGrid>
  );
};

export default ShowGrid;
