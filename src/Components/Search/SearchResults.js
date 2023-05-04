import EmptySearchResults from "./EmptySearchResults";
import { useContext } from "react";
import ResultCard from "../../UI/ResultCard";
import appContext from "../app-Context";
const SearchResults = () => {
  const ctx = useContext(appContext);

  return (
    <>
      {ctx.searchResults &&
        ctx.searchResults.map((song) => (
          <ResultCard
            downloadId={song.videoId}
            key={song.videoId}
            name={
              song.title.length < 11
                ? song.title
                : song.title.slice(0, 15) + "..."
            }
            artist={
              song.channelTitle < 11
                ? song.channelTitle
                : song.channelTitle.slice(0, 13) + "..."
            }
            duration={song.lengthText}
            src={song.thumbnail[0].url}
          />
        ))}

      {!ctx.searchResults && <EmptySearchResults />}
    </>
  );
};

export default SearchResults;
