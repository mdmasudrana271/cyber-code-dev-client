import './App.css';
import { RouterProvider } from 'react-router-dom';
import { router } from './Routes/Router';
import { ThemeContext } from './Context/AuthProvider';
import { useContext } from 'react';
function App() {
  const {theme} = useContext(ThemeContext)
  return (
    <div className="App" id={theme}>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
