import './styles/App.css';
import { HomePage } from './pages/HomePage';
import { FormPage } from './pages/FormPage';
import { DataProvider } from './context/dataContext';
import { Routes, Route } from 'react-router-dom'


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <DataProvider>
          <Routes>
            <Route>
              <Route path="/" element={<HomePage />} />
              <Route path="/form" element={<FormPage />} />
            </Route>
          </Routes>

        </DataProvider>
      </header>
    </div>
  );
}

export default App;
