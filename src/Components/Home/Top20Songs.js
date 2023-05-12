import { useEffect, useState } from "react";
import SongSlider from "./songSlider";
// import Songs from "./Songs";

const Top20Songs = () => {
  const [songs, setSongs] = useState([]);

  const fetchSongsHandler = async () => {
    try {
      const response = await fetch();
      // "https://spotify-scraper.p.rapidapi.com/v1/chart/tracks/top",
      // {
      //   method: "GET",
      //   headers: {
      //     "content-type": "application/octet-stream",
      //     "X-RapidAPI-Key":
      //       "84701ac01emsh75827ed4d87b809p1cfe69jsneb3682289658",
      //     "X-RapidAPI-Host": "spotify-scraper.p.rapidapi.com",
      //   },
      // }

      const result = await response.json();

      console.log(result);
      console.log(
        result.tracks[0].id,
        result.tracks[0].name,
        result.tracks[0].album.cover[0].url,
        result.tracks[0].artists[0].name
      );
      const loadedSongs = [];

      for (let i = 0; i < 20; i++) {
        loadedSongs.push({
          key: result.tracks[i].id,
          src: result.tracks[i].album.cover[0].url,
          name: result.tracks[i].name,
          artist: result.tracks[i].artists[0].name,
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
