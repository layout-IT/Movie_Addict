import { useMemo } from 'react';
import { IMovies } from '../types';
import { useStore } from '../zustand/store';

export const Movies = () => {
  const { genre, searchText, movies } = useStore();

  const filteredMovies = useMemo(() => {
    return movies.filter((movie: IMovies) => {
      const filteredByGenre = genre ? genre === movie.genre : true;
      const isTextInTitle = movie.title
        .toLowerCase()
        .includes(searchText.toLowerCase());
      const filteredByText = searchText ? isTextInTitle : true;

      return filteredByGenre && filteredByText;
    });
  }, [genre, searchText, movies]);

  return (
    <ol className="flex flex-wrap justify-center">
      {filteredMovies.map(({ id, title, genre }: IMovies, index: number) => (
        <li
          style={{
            marginRight: (index + 1) % 3 === 0 ? '0' : '10px',
            listStyle: 'none',
            padding: '10px',
            width: '31%',
          }}
          className="mb-2 border-2 rounded-2xl border-gray-500 flex-grow-0 flex flex-col mr-2 py-2 px-4"
          key={id}
        >
          <span className="block">title: {title}</span>
          <span className="block">genre: {genre}</span>
        </li>
      ))}
    </ol>
  );
};
