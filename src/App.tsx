import './App.css';
import { Genres } from './components/genres';
import { Movies } from './components/movies';
import { MovieForm } from './components/MovieForm';
import { useStore } from './zustand/store';

const App = () => {
  const { setsearchText } = useStore();

  return (
    <div style={{ padding: '30px' }}>
      <MovieForm />
      <h1 className="font-semibold text-7xl font-serif mb-4">Movie</h1>
      <input
        type="text"
        onChange={(e) => setsearchText(e.target.value)}
        className="px-3
                      py-2
                      border-2
                      rounded-2xl
                      border-gray-500
                      mb-4
                      placeholder-gray-800
                      hover:relative
                      hover:scale-105
                      transition-all
                      ease-in-out
                      w-[300px]
                      mr-[10px]"
        placeholder="Search"
        py-2
      />
      <Genres />
      <Movies />
    </div>
  );
};

export default App;
