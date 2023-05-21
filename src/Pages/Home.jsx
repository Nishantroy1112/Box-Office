import React, { useState } from "react";
import MainPageLayout from "../components/MainPageLayout";
import { apiGet } from "../misc/config";
import ShowGrid from "../components/show/ShowGrid";
import ActorGrid from "../components/actor/ActorGrid";
import { useLastQuery } from "../misc/Custom-hooks";
import {
  RadioInputsWrapper,
  SearchButtonWrapper,
  SearchInput,
} from "./Home.styled";
import CustomRadio from "../components/CustomRadio";
// import { RadioWrapper } from "./CustomRadio";
const Home = () => {
  const [input, setInput] = useLastQuery("");
  const [results, setResults] = useState(null);
  const [searchOption, setSearchOption] = useState("shows");

  const isSearch = searchOption === "shows";
  const onchangeRad = (ev) => {
    setSearchOption(ev.target.value);
  };
  const onInputChange = (ev) => {
    setInput(ev.target.value);
  };
  const onKeyDownf = (ev) => {
    if (ev.keyCode === 13) {
      onSearch();
    }
  };
  const onSearch = () => {
    // fetch(`https://catfact.ninja/fact`)
    apiGet(`search/${searchOption}?q=${input}`).then((data) => {
      setResults(data);
      console.log(data);
    });
    // fetch(`http://api.tvmaze.com/search/shows?q=${input}`)
    //   .then((res) => res.json())
    //   .then((data) => {
    //     setResults(data);
    //     console.log(data);
    //   });
  };
  const renderResult = () => {
    if (results && results.length === 0) {
      return <div>No result found</div>;
    }
    if (results && results.length > 0) {
      return results[0].show ? (
        <ShowGrid data={results} />
      ) : (
        <ActorGrid data={results} />
      );
    }
    return null;
  };
  return (
    <MainPageLayout>
      <SearchInput
        type="text"
        onChange={onInputChange}
        onKeyDown={onKeyDownf}
        placeholder="search for shows"
        value={input}
      ></SearchInput>
      <RadioInputsWrapper>
        <div>
          <CustomRadio
            label="Shows"
            id="shows-search"
            value="shows"
            checked={isSearch}
            onChange={onchangeRad}
          />
        </div>
        <div>
          <CustomRadio
            type="radio"
            label="Actors"
            id="actors-search"
            value="people"
            checked={!isSearch}
            onChange={onchangeRad}
          />
        </div>
      </RadioInputsWrapper>
      <SearchButtonWrapper>
        <button onClick={onSearch}>Search</button>
      </SearchButtonWrapper>
      {renderResult()}
    </MainPageLayout>
  );
};

export default Home;
