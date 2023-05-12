// import classes from "./Album.module.css";
import { useEffect, useState } from "react";
import AlbumCard from "../../UI/AlbumCard";

const Album = () => {
  const [Albums, setAlbums] = useState([]);

  const fetchAlbumsHandler = async () => {
    try {
      const response = await fetch(
        "https://spotify117.p.rapidapi.com/new_releases/?country=us",
      {
        method: "GET",
        headers: {
          "content-type": "application/octet-stream",
          "X-RapidAPI-Key":
            "84701ac01emsh75827ed4d87b809p1cfe69jsneb3682289658",
          "X-RapidAPI-Host": "spotify117.p.rapidapi.com",
        },
      });
    

      const result = await response.json();
      console.log(result);
      console.log(result.albums.items[0].id);

      const loadedAlbums = [];

      for (let i = 0; i < 5; i++) {
        loadedAlbums.push({
          key: result.albums.items[i].id,
          src: result.albums.items[i].images[0].url,
          name: result.albums.items[i].name,
          artist: result.albums.items[i].artists[0].name,
        });
      }
      setAlbums(loadedAlbums);
    } catch (error) {
      console.error(error.message);
    }
  };

  useEffect(() => {
    fetchAlbumsHandler();
  }, []);
  return (
    <>
      {Albums.map((album) => (
        <AlbumCard
          key={album.key}
          name={album.name}
          artist={album.artist}
          src={album.src}
        />
      ))}
    </>
  );
};

export default Album;
