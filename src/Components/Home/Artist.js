import { useEffect, useState } from "react";
import ArtistCard from "../../UI/ArtistCard";
const Artist = () => {
  const [Artists, setArtists] = useState([]);

  const fetchArtistsHandler = async () => {
    try {
      const response = await fetch(
        "https://yt-api.p.rapidapi.com/trending?geo=US",
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
      console.log(result.data[0].videoId);
      const loadedArtists = [];

      for (let i = 0; i < 6; i++) {
        loadedArtists.push({
          key: result.data[i].videoId,
          src: result.data[i].thumbnail[0].url,
          name: result.data[i].title,
        });
      }
      setArtists(loadedArtists);
    } catch (error) {
      console.error(error.message);
    }
  };

  useEffect(() => {
    fetchArtistsHandler();
  }, []);

  return (
    <>
      {Artists.map((artist) => (
        <ArtistCard key={artist.key} src={artist.src} name={artist.name} />
      ))}
    </>
  );
};

export default Artist;
