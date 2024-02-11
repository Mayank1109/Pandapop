import placeholder from "../../Assets/Dummy_pics/2.png";
import EmptySearchResults from "./EmptySearchResults";

import ResultCard from "../../UI/ResultCard";
import { useSelector } from "react-redux";
const SearchResults = () => {
  const searchResults = useSelector((state) => state.result.searchResults);
  return (
    <>
      {searchResults &&
        searchResults.map((song) => (
          <ResultCard
            downloadId={song.videoId}
            key={song.videoId}
            name={song.title}
            artist={
              // song.author?.name.length < 11
              //   ? song.author.name
              //   : song.author.name.slice(0, 13) + "..."
              song.ChannelTitle ? song.ChannelTitle : "--"
            }
            duration={song.lengthText}
            src={song.thumbnail ? song.thumbnail[0].url : placeholder}
          />
        ))}

      {!searchResults && <EmptySearchResults />}
    </>
  );
};

export default SearchResults;
