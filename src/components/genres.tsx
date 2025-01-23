import { useEffect } from 'react';
import { useStore } from '../zustand/store';

export const Genres = () => {
  const { genre, genres, setGenre, setGenres } = useStore();

  useEffect(() => {
    setGenres();
  }, []);

  return (
    <div className="mb-4">
      {genres.map((filmGenre) => (
        <button
          key={filmGenre}
          className={`${filmGenre === genre ? 'bg-purple-500 border-purple-500 text-white hover:bg-purple-500 ' : 'bg-inherit  border-purple-500'} 
                        mr-2
                        py-0.5
                        px-4
                        border-2
                        rounded-2xl
                        border-gray-500
                        hover:relative  
                        hover:bottom-[4px]
                        hover:left-0
                        ease-in-out
                        active:bg-purple-500
                        transition-all 
                        `}
          onClick={() => setGenre(genre === filmGenre ? '' : filmGenre)}
        >
          {filmGenre}
        </button>
      ))}
    </div>
  );
};
