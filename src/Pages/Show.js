import React from "react";
import { useParams } from "react-router";
// import { apiGet } from "../misc/config";
import ShowMainData from "../components/show/ShowMainData";
import Details from "../components/show/Details";
import Seasons from "../components/show/Seasons";
import Cast from "../components/show/Cast";
import { InfoBlock, ShowPageWrapper } from "./Show..styled";
import { useShow } from "../misc/Custom-hooks";

// const Reducer = (prevState, action) => {
//   switch (action.type) {
//     case "FETCH_SUCCESS": {
//       return { isLoading: false, error: null, show: action.show };
//     }
//     case "FETCH_FAILED": {
//       return { ...prevState, isLoading: false, error: action.error };
//     }
//     default:
//       return prevState;
//   }
// };
// const initialState = {
//   isLoading: true,
//   error: null,
//   show: null,
// };
const Show = () => {
  const { id } = useParams();
  const { show, isLoading, error } = useShow(id);
  // const [{ show, isLoading, error }, dispatch] = useReducer(
  //   Reducer,
  //   initialState
  // );
  // // const [isLoading, setIsLoading] = useState(true);
  // // const [error, setError] = useState(null);
  // // const [show, setShow] = useState(null);
  // useEffect(() => {
  //   let isMount = true;
  //   apiGet(`shows/${id}?embed[]=seasons&embed[]=cast`)
  //     .then((results) => {
  //       if (isMount) {
  //         dispatch({ type: "FETCH_SUCCESS", show: results });
  //         // setShow(results);
  //         // setIsLoading(false);
  //       }
  //     })
  //     .catch((err) => {
  //       if (isMount) {
  //         dispatch({ type: "FETCH_FAILED", Error: err.message });
  //         // setError(err.message);
  //         // setIsLoading(false);
  //       }
  //     });
  //   return () => {
  //     isMount = false;
  //   };
  // }, [id]);
  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Error occured: {error}</div>;
  }
  // console.log("show", show);
  return (
    <ShowPageWrapper>
      <ShowMainData
        image={show.image}
        name={show.name}
        rating={show.rating}
        summary={show.summary}
        tags={show.genres}
      />
      <InfoBlock>
        <h1>Details</h1>
        <Details
          status={show.status}
          network={show.network}
          premiered={show.premiered}
        />
      </InfoBlock>
      <InfoBlock>
        <h1>Seasons</h1>
        <Seasons seasons={show._embedded.seasons} />
      </InfoBlock>
      <InfoBlock>
        <h1>Cast</h1>
        <Cast cast={show._embedded.cast} />
      </InfoBlock>
    </ShowPageWrapper>
  );
};

export default Show;
