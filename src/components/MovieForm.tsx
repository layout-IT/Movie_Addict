import { SubmitHandler, useForm } from 'react-hook-form';
import { IMovies } from '../types';
import { useStore } from '../zustand/store';
import { InputField } from './InputField';

type TMovieForm = Pick<IMovies, 'title' | 'genre'>;

export const MovieForm = () => {
  const { movies, setGenres, setMovies } = useStore();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<TMovieForm>({
    mode: 'onChange',
  });

  const onSubmit: SubmitHandler<TMovieForm> = (data) => {
    const newMovie = {
      id: movies.length + 1,
      ...data,
    };
    setMovies([...movies, newMovie]);

    setGenres();
    reset();
  };

  return (
    <div>
      <h1>Add new movie</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="flex items-center">
        <div className="flex flex-col">
          <InputField nameField="title" register={register} />
          {errors?.title?.message && (
            <p className="text-red-500">{errors.title.message}</p>
          )}

          <InputField nameField="genre" register={register} />
          {errors?.genre?.message && (
            <p className="text-red-500 mb-4 ">{errors.genre.message}</p>
          )}
        </div>
        <button
          type="submit"
          className="
                    px-3
                    py-2
                    h-[40px]
                    border-2
                    rounded-2xl
                    border-purple-500
                    hover:relative  
                    hover:bg-purple-500
                    hover:text-white
                    ease-in-out
                    active:bg-purple-500
                    active:text-white
                    transition-all "
        >
          add movie
        </button>
      </form>
    </div>
  );
};
