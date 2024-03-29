import { useEffect, useState } from "react";
import SongSlider from "./songSlider";
// import Songs from "./Songs";

const Top20Songs = () => {
  const [songs, setSongs] = useState([]);

  const url = "https://spotify81.p.rapidapi.com/top_200_tracks";
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "84701ac01emsh75827ed4d87b809p1cfe69jsneb3682289658",
      "X-RapidAPI-Host": "spotify81.p.rapidapi.com",
    },
  };

  const fetchSongsHandler = async () => {
    try {
      const response = await fetch(url, options);

      const result = await response.json();

      console.log(result);
      // console.log(
      //   result.tracks[0].id,
      //   result.tracks[0].name,
      //   result.tracks[0].album.cover[0].url,
      //   result.tracks[0].artists[0].name
      // );
      const loadedSongs = [];

      for (let i = 0; i < 20; i++) {
        loadedSongs.push({
          key: i,
          src: result[i].trackMetadata.displayImageUri,
          name: result[i].trackMetadata.trackName,
          artist: result[i].trackMetadata.artists.name,
        });
      }
      setSongs(loadedSongs);
    } catch (error) {
      console.error(error.message);
    }
  };

  useEffect(() => {
    fetchSongsHandler();
  }, []);
  return (
    <>
      <SongSlider fetchedSongs={songs} />
    </>
  );
};

export default Top20Songs;
