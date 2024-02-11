import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import TopSongsCard from "../../UI/TopSongsCard";

const SongSlider = (props) => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 1024 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 1024, min: 800 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 800, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <>
      <Carousel
        additionalTransfrom={-25 * 5}
        draggable={false}
        infinite={true}
        responsive={responsive}
      >
        {props.fetchedSongs.map((song) => (
          <TopSongsCard
            key={song.key}
            name={song.name}
            artist={song.artist}
            src={song.src}
          />
        ))}
      </Carousel>
    </>
  );
};

export default SongSlider;
