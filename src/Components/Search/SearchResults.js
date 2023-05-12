import placeholder from "../../Assets/Dummy_pics/2.png";
import EmptySearchResults from "./EmptySearchResults";
import { useContext } from "react";
import ResultCard from "../../UI/ResultCard";
import appContext from "../app-Context";
const SearchResults = () => {
  const ctx = useContext(appContext);
  console.log(ctx.searchResults);
  return (
    <>
      {ctx.searchResults &&
        ctx.searchResults.map((song) => (
          <ResultCard
            downloadId={song.id}
            key={song.id}
            name={song.title}
            artist={
              // song.author?.name.length < 11
              //   ? song.author.name
              //   : song.author.name.slice(0, 13) + "..."
              song.author ? song.author.name : "--"
            }
            duration={song.duration}
            src={song.bestThumbnail ? song.bestThumbnail.url : placeholder}
          />
        ))}

      {!ctx.searchResults && <EmptySearchResults />}
    </>
  );
};

export default SearchResults;
