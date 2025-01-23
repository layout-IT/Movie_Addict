import { create } from 'zustand';
import { MOVIES } from '../constants';
import { IMovies } from '../types';

export interface IStore {
  genre: string;
  genres: string[];
  searchText: string;
  setGenres: () => void;
  setGenre: (genre: string) => void;
  setsearchText: (text: string) => void;
  movies: IMovies[];
  setMovies: (newMovies: IMovies[]) => void;
}

export const useStore = create<IStore>((set) => ({
  genre: '',
  genres: [],
  searchText: '',
  movies: MOVIES,
  setGenres: () =>
    set((state) => ({
      genres: Array.from(
        new Set(state.movies.map((movie: IMovies) => movie.genre))
      ),
    })),
  setGenre: (genre) => set({ genre }),
  setsearchText: (text) => set({ searchText: text }),
  setMovies: (newMovies) => set({ movies: newMovies }),
}));
