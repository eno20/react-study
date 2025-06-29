import { useEffect, useState } from "react";
import Movie from "../components/Movie.js";
import styles from "./Home.module.css";

function Home() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const getMovies = async () => {
    const json = await (
      await fetch(
        "https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year"
      )
    ).json();
    setMovies(json.data.movies);
    setLoading(false);
  };
  console.log(movies);
  useEffect(() => {
    getMovies();
  }, []);
  return (
    <div className={styles.container}>
      <h1>The Movies!</h1>
      {loading ? (
        <div className={styles.loader}>
          <span>Loading...</span>
        </div>
      ) : null}
      <div className={styles.movies}>
        {movies.map((movie) => (
          <Movie
            id={movie.id}
            key={movie.id}
            coverImage={movie.medium_cover_image}
            title={movie.title}
            year={movie.year}
            summary={movie.summary}
            genres={movie.genres}
          />
        ))}
      </div>
    </div>
  );
}
export default Home;
