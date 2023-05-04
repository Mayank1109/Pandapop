import classes from "./Search.module.css";
import SearchIcon from "../../UI/SearchIcon";
import { useContext, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import appContext from "../app-Context";

const Search = () => {
  const searchInputRef = useRef();
  // const [searchResult, setSearchResult] = useState("");
  const navigate = useNavigate();
  const ctx = useContext(appContext);

  const searchInputHandler = async (event) => {
    event.preventDefault();
    const searchQuery = searchInputRef.current.value;

    try {
      const response = await fetch(
        `https://yt-api.p.rapidapi.com/search?query=${searchQuery}`,
        {
          method: "GET",
          headers: {
            "X-RapidAPI-Key":
              "84701ac01emsh75827ed4d87b809p1cfe69jsneb3682289658",
            "X-RapidAPI-Host": "yt-api.p.rapidapi.com",
          },
        }
      );

      const result = await response.json();
      console.log(result);

      ctx.onSearch(result.data);

      return navigate("/search");
    } catch (error) {
      console.error(error.message);
    }
  };
  return (
    <>
      <div className={classes.header_searchbox}>
        <form action="/search" onSubmit={searchInputHandler}>
          <div className={classes.searchbox}>
            <SearchIcon />
            <input
              type="text"
              className="Search"
              placeholder="search"
              ref={searchInputRef}
            />
          </div>
        </form>
      </div>
    </>
  );
};

export default Search;